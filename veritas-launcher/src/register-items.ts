import { CommandLinker } from "@jupyterlab/apputils";
import { LauncherModel } from "@jupyterlab/launcher";
import { LabIcon } from "@jupyterlab/ui-components";

export type GridItem = {
  commandId: string;
  label: string;
  icon: LabIcon;
  category: string;
  rank: number;
  execute: () => any;
};

export const registerItems = (
  commands: CommandLinker.IOptions["commands"],
  model: LauncherModel,
  items: GridItem[]
) => {
  for (const item of items) {
    commands.addCommand(item.commandId, {
      label: item.label,
      icon: item.icon,
      execute: item.execute,
    });
    model.add({
      command: item.commandId,
      category: item.category,
      rank: item.rank,
    });
  }
};
