import { Launcher as JupyterlabLauncher, LauncherModel as JupyterLauncherModel, ILauncher } from "@jupyterlab/launcher";
import { IIterator } from "@lumino/algorithm";
import * as React from "react";
export declare const VeritasCategory = "Veritas Toolkit";
export declare class LauncherModel extends JupyterLauncherModel {
    /**
     * Return an iterator of launcher items, but remove unnecessary items.
     */
    items(): IIterator<ILauncher.IItemOptions>;
}
export declare class Launcher extends JupyterlabLauncher {
    /**
     * Construct a new launcher widget.
     */
    constructor(options: ILauncher.IOptions);
    private replaceCategoryIcon;
    /**
     * Render the launcher to virtual DOM nodes.
     */
    protected render(): React.ReactElement<any> | null;
    private _translator;
}
