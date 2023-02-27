"use strict";
/*
 * Copyright 2018-2022 Elyra Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Launcher = exports.LauncherModel = exports.VeritasCategory = void 0;
const icons_1 = require("./icons");
const launcher_1 = require("@jupyterlab/launcher");
const algorithm_1 = require("@lumino/algorithm");
const React = __importStar(require("react"));
const CommandIDs = {
    newFile: "fileeditor:create-new",
    createNewPythonEditor: "script-editor:create-new-python-editor",
    createNewREditor: "script-editor:create-new-r-editor",
};
exports.VeritasCategory = "Veritas Toolkit";
class LauncherModel extends launcher_1.LauncherModel {
    /**
     * Return an iterator of launcher items, but remove unnecessary items.
     */
    items() {
        const items = [];
        let pyEditorInstalled = false;
        let rEditorInstalled = false;
        this.itemsList.forEach((item) => {
            if (item.command === CommandIDs.createNewPythonEditor) {
                pyEditorInstalled = true;
            }
            else if (item.command === CommandIDs.createNewREditor) {
                rEditorInstalled = true;
            }
        });
        if (!pyEditorInstalled && !rEditorInstalled) {
            return new algorithm_1.ArrayIterator(this.itemsList);
        }
        // Dont add tiles for new py and r files if their script editor is installed
        this.itemsList.forEach((item) => {
            var _a, _b;
            if (!(item.command === CommandIDs.newFile &&
                ((pyEditorInstalled && ((_a = item.args) === null || _a === void 0 ? void 0 : _a.fileExt) === "py") ||
                    (rEditorInstalled && ((_b = item.args) === null || _b === void 0 ? void 0 : _b.fileExt) === "r")))) {
                items.push(item);
            }
        });
        return new algorithm_1.ArrayIterator(items);
    }
}
exports.LauncherModel = LauncherModel;
class Launcher extends launcher_1.Launcher {
    /**
     * Construct a new launcher widget.
     */
    constructor(options) {
        super(options);
        this._translator = this.translator.load("jupyterlab");
    }
    replaceCategoryIcon(category, icon) {
        const children = React.Children.map(category.props.children, (child) => {
            if (child.props.className === "jp-Launcher-sectionHeader") {
                const grandchildren = React.Children.map(child.props.children, (grandchild) => {
                    if (grandchild.props.className !== "jp-Launcher-sectionTitle") {
                        return React.createElement(icon.react, { stylesheet: "launcherSection" });
                    }
                    else {
                        return grandchild;
                    }
                });
                return React.cloneElement(child, child.props, grandchildren);
            }
            else {
                return child;
            }
        });
        return React.cloneElement(category, category.props, children);
    }
    /**
     * Render the launcher to virtual DOM nodes.
     */
    render() {
        // Bail if there is no model.
        if (!this.model) {
            return null;
        }
        // get the rendering from JupyterLab Launcher
        // and resort the categories
        const launcherBody = super.render();
        const launcherContent = launcherBody === null || launcherBody === void 0 ? void 0 : launcherBody.props.children;
        const launcherCategories = launcherContent.props.children;
        const categories = [];
        // Only load Notebook and our category
        const knownCategories = [
            exports.VeritasCategory,
            this._translator.__("Notebook"),
            // this._translator.__("Console"),
            // this._translator.__("Other"),
        ];
        // Assemble the final ordered list of categories
        // based on knownCategories.
        (0, algorithm_1.each)(knownCategories, (category, index) => {
            React.Children.forEach(launcherCategories, (cat) => {
                if (cat.key === category) {
                    if (cat.key === exports.VeritasCategory) {
                        cat = this.replaceCategoryIcon(cat, icons_1.toolKitIcon);
                    }
                    categories.push(cat);
                }
            });
        });
        // Wrap the sections in body and content divs.
        return (React.createElement("div", { className: "jp-Launcher-body" },
            React.createElement("div", { className: "jp-Launcher-content" },
                React.createElement("div", { className: "jp-Launcher-cwd" },
                    React.createElement("h3", null, this.cwd)),
                categories)));
    }
}
exports.Launcher = Launcher;
//# sourceMappingURL=launcher.js.map