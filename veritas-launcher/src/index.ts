import {
  ILabShell,
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
} from "@jupyterlab/application";
import { PageConfig } from "@jupyterlab/coreutils";
import { ICommandPalette, MainAreaWidget } from "@jupyterlab/apputils";
import { ILauncher } from "@jupyterlab/launcher";
import { IMainMenu } from "@jupyterlab/mainmenu";
import { ITranslator } from "@jupyterlab/translation";
import { launcherIcon } from "@jupyterlab/ui-components";

import { toArray } from "@lumino/algorithm";
import { DockPanel, TabBar, Widget } from "@lumino/widgets";

import { Launcher, LauncherModel, VeritasCategory } from "./launcher";
import {
  diagnosisIcon,
  assessmentIcon,
  toolKitIcon,
  creditScoringIcon,
  customerMarketingIcon,
  infoIcon,
} from "./icons";
import { GridItem, registerItems } from "./register-items";
import "../style/index.css";

/**
 * The command IDs used by the launcher plugin.
 */
const CommandIDs = {
  create: "launcher:create",
};

/**
 * Initialization data for the theme extension.
 */
const extension: JupyterFrontEndPlugin<ILauncher> = {
  id: "veritas-launcher",
  autoStart: true,
  requires: [ITranslator, ILabShell, IMainMenu],
  optional: [ICommandPalette],
  provides: ILauncher,
  activate: (
    app: JupyterFrontEnd,
    translator: ITranslator,
    labShell: ILabShell,
    mainMenu: IMainMenu,
    palette: ICommandPalette | null
  ): ILauncher => {
    // Find the MainLogo widget in the shell and replace it with the Elyra Logo
    const widgets = app.shell.widgets("top");
    let widget = widgets.next();

    while (widget !== undefined) {
      if (widget.id === "jp-MainLogo") {
        toolKitIcon.element({
          container: widget.node,
          justify: "center",
          margin: "2px 5px 2px 5px",
          height: "auto",
          width: "20px",
        });
        break;
      }

      widget = widgets.next();
    }

    // Use custom veritas launcher
    const { commands, shell } = app;
    const trans = translator.load("jupyterlab");
    const model = new LauncherModel();

    commands.addCommand(CommandIDs.create, {
      label: trans.__("New Launcher"),
      execute: (args: any) => {
        const cwd = args["cwd"] ? String(args["cwd"]) : "";
        const id = `launcher-${Private.id++}`;
        const callback = (item: Widget): void => {
          labShell.add(item, "main", { ref: id });
        };

        const launcher = new Launcher({
          model,
          cwd,
          callback,
          commands,
          translator,
        });

        launcher.model = model;
        launcher.title.icon = launcherIcon;
        launcher.title.label = trans.__("Launcher");

        const main = new MainAreaWidget({ content: launcher });

        // If there are any other widgets open, remove the launcher close icon.
        main.title.closable = !!toArray(labShell.widgets("main")).length;
        main.id = id;

        shell.add(main, "main", {
          activate: args["activate"] as boolean,
          ref: args["ref"] as string,
        });

        labShell.layoutModified.connect(() => {
          // If there is only a launcher open, remove the close icon.
          main.title.closable = toArray(labShell.widgets("main")).length > 1;
        }, main);

        return main;
      },
    });

    if (palette) {
      palette.addItem({
        command: CommandIDs.create,
        category: trans.__("Launcher"),
      });
    }

    if (labShell) {
      labShell.addButtonEnabled = true;
      labShell.addRequested.connect(
        (sender: DockPanel, arg: TabBar<Widget>) => {
          // Get the ref for the current tab of the tabbar which the add button was clicked
          const ref =
            arg.currentTitle?.owner.id ||
            arg.titles[arg.titles.length - 1].owner.id;
          if (commands.hasCommand("filebrowser:create-main-launcher")) {
            // If a file browser is defined connect the launcher to it
            return commands.execute("filebrowser:create-main-launcher", {
              ref,
            });
          }
          return commands.execute(CommandIDs.create, { ref });
        }
      );
    }

    const hostName = window.location.hostname;

    const veritasItems: GridItem[] = [
      {
        commandId: "veritas:credit-scoring",
        label: "Credit Scoring Demo",
        icon: creditScoringIcon,
        category: VeritasCategory,
        rank: 11,
        execute: () => {
          commands.execute("docmanager:open", {
            path: "CS_demo.ipynb",
          });
        },
      },
      {
        commandId: "veritas:customer-marketing",
        label: "Customer Marketing Demo",
        icon: customerMarketingIcon,
        category: VeritasCategory,
        rank: 12,
        execute: () => {
          commands.execute("docmanager:open", {
            path: "customer_marketing_example/CM_demo.ipynb",
          });
        },
      },
      {
        commandId: "veritas:assessment",
        label: "Veritas Assessment Tool",
        icon: assessmentIcon,
        category: VeritasCategory,
        rank: 13,
        execute: () => {
          window.open(PageConfig.getOption("veritasAssessmentUrl"));
        },
      },
    ];

    registerItems(commands, model, veritasItems);

    return model;
  },
};

/**
 * The namespace for module private data.
 */
namespace Private {
  /**
   * The incrementing id used for launcher widgets.
   */
  // eslint-disable-next-line
  export let id = 0;
}

export default extension;
