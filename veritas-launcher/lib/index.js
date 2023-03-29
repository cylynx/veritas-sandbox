"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("@jupyterlab/application");
const coreutils_1 = require("@jupyterlab/coreutils");
const apputils_1 = require("@jupyterlab/apputils");
const launcher_1 = require("@jupyterlab/launcher");
const mainmenu_1 = require("@jupyterlab/mainmenu");
const translation_1 = require("@jupyterlab/translation");
const ui_components_1 = require("@jupyterlab/ui-components");
const algorithm_1 = require("@lumino/algorithm");
const launcher_2 = require("./launcher");
const icons_1 = require("./icons");
const register_items_1 = require("./register-items");
require("../style/index.css");
/**
 * The command IDs used by the launcher plugin.
 */
const CommandIDs = {
    create: "launcher:create",
};
/**
 * Initialization data for the theme extension.
 */
const extension = {
    id: "veritas-launcher",
    autoStart: true,
    requires: [translation_1.ITranslator, application_1.ILabShell, mainmenu_1.IMainMenu],
    optional: [apputils_1.ICommandPalette],
    provides: launcher_1.ILauncher,
    activate: (app, translator, labShell, mainMenu, palette) => {
        // Find the MainLogo widget in the shell and replace it with the Elyra Logo
        const widgets = app.shell.widgets("top");
        let widget = widgets.next();
        while (widget !== undefined) {
            if (widget.id === "jp-MainLogo") {
                icons_1.toolKitIcon.element({
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
        const model = new launcher_2.LauncherModel();
        commands.addCommand(CommandIDs.create, {
            label: trans.__("New Launcher"),
            execute: (args) => {
                const cwd = args["cwd"] ? String(args["cwd"]) : "";
                const id = `launcher-${Private.id++}`;
                const callback = (item) => {
                    labShell.add(item, "main", { ref: id });
                };
                const launcher = new launcher_2.Launcher({
                    model,
                    cwd,
                    callback,
                    commands,
                    translator,
                });
                launcher.model = model;
                launcher.title.icon = ui_components_1.launcherIcon;
                launcher.title.label = trans.__("Launcher");
                const main = new apputils_1.MainAreaWidget({ content: launcher });
                // If there are any other widgets open, remove the launcher close icon.
                main.title.closable = !!(0, algorithm_1.toArray)(labShell.widgets("main")).length;
                main.id = id;
                shell.add(main, "main", {
                    activate: args["activate"],
                    ref: args["ref"],
                });
                labShell.layoutModified.connect(() => {
                    // If there is only a launcher open, remove the close icon.
                    main.title.closable = (0, algorithm_1.toArray)(labShell.widgets("main")).length > 1;
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
            labShell.addRequested.connect((sender, arg) => {
                var _a;
                // Get the ref for the current tab of the tabbar which the add button was clicked
                const ref = ((_a = arg.currentTitle) === null || _a === void 0 ? void 0 : _a.owner.id) ||
                    arg.titles[arg.titles.length - 1].owner.id;
                if (commands.hasCommand("filebrowser:create-main-launcher")) {
                    // If a file browser is defined connect the launcher to it
                    return commands.execute("filebrowser:create-main-launcher", {
                        ref,
                    });
                }
                return commands.execute(CommandIDs.create, { ref });
            });
        }
        const hostName = window.location.hostname;
        const veritasItems = [
            {
                commandId: "veritas:credit-scoring",
                label: "Credit Scoring Demo",
                icon: icons_1.creditScoringIcon,
                category: launcher_2.VeritasCategory,
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
                icon: icons_1.customerMarketingIcon,
                category: launcher_2.VeritasCategory,
                rank: 12,
                execute: () => {
                    commands.execute("docmanager:open", {
                        path: "customer_marketing_example/CM_demo.ipynb",
                    });
                },
            },
            {
                commandId: "veritas:puw",
                label: "Predictive Underwriting Demo",
                icon: icons_1.puwIcon,
                category: launcher_2.VeritasCategory,
                rank: 13,
                execute: () => {
                    commands.execute("docmanager:open", {
                        path: "PUW_demo.ipynb",
                    });
                },
            },
            {
                commandId: "veritas:base-classification",
                label: "Base Classification Demo",
                icon: icons_1.classificationIcon,
                category: launcher_2.VeritasCategory,
                rank: 14,
                execute: () => {
                    commands.execute("docmanager:open", {
                        path: "BaseClassification_demo.ipynb",
                    });
                },
            },
            {
                commandId: "veritas:base-regression",
                label: "Base Regression Demo",
                icon: icons_1.regressionIcon,
                category: launcher_2.VeritasCategory,
                rank: 15,
                execute: () => {
                    commands.execute("docmanager:open", {
                        path: "BaseRegression_demo.ipynb",
                    });
                },
            },
            {
                commandId: "veritas:new-use-case-creation",
                label: "Create New Use Case",
                icon: icons_1.newUseCaseIcon,
                category: launcher_2.VeritasCategory,
                rank: 16,
                execute: () => {
                    commands.execute("docmanager:open", {
                        path: "NewUseCaseCreation_demo.ipynb",
                    });
                },
            },
            {
                commandId: "veritas:assessment",
                label: "Veritas Assessment Tool",
                icon: icons_1.assessmentIcon,
                category: launcher_2.VeritasCategory,
                rank: 17,
                execute: () => {
                    window.open(coreutils_1.PageConfig.getOption("veritasAssessmentUrl"));
                },
            },
        ];
        (0, register_items_1.registerItems)(commands, model, veritasItems);
        return model;
    },
};
/**
 * The namespace for module private data.
 */
var Private;
(function (Private) {
    /**
     * The incrementing id used for launcher widgets.
     */
    // eslint-disable-next-line
    Private.id = 0;
})(Private || (Private = {}));
exports.default = extension;
//# sourceMappingURL=index.js.map