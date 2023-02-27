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
export declare const registerItems: (commands: CommandLinker.IOptions["commands"], model: LauncherModel, items: GridItem[]) => void;
