import { JupyterFrontEndPlugin } from "@jupyterlab/application";
import { ILauncher } from "@jupyterlab/launcher";
import "../style/index.css";
/**
 * Initialization data for the theme extension.
 */
declare const extension: JupyterFrontEndPlugin<ILauncher>;
export default extension;
