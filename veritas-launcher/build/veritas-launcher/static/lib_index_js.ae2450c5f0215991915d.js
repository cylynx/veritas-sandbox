"use strict";
(self["webpackChunkveritas_launcher"] = self["webpackChunkveritas_launcher"] || []).push([["lib_index_js"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./style/index.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/index.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".jp-LabShell {\n    background: var(--jp-layout-color3);\n}", "",{"version":3,"sources":["webpack://./style/index.css"],"names":[],"mappings":"AAAA;IACI,mCAAmC;AACvC","sourcesContent":[".jp-LabShell {\n    background: var(--jp-layout-color3);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./lib/icons.js":
/*!**********************!*\
  !*** ./lib/icons.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Icons taken from https://github.com/bytedance/IconPark
// Apache 2.0 License
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.assessmentIcon = exports.diagnosisIcon = exports.creditScoringIcon = exports.customerMarketingIcon = exports.infoIcon = exports.toolKitIcon = void 0;
const ui_components_1 = __webpack_require__(/*! @jupyterlab/ui-components */ "webpack/sharing/consume/default/@jupyterlab/ui-components");
exports.toolKitIcon = new ui_components_1.LabIcon({
    name: "veritas:toolkit",
    svgstr: `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 25V38C8 39.6569 9.34315 41 11 41H37C38.6569 41 40 39.6569 40 38V25" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 15C5 13.8954 5.89543 13 7 13H41C42.1046 13 43 13.8954 43 15V23C43 24.1046 42.1046 25 41 25H7C5.89543 25 5 24.1046 5 23V15Z" fill="#2F88FF" stroke="#333" stroke-width="4" stroke-linejoin="round"/><path d="M31 13V9C31 7.89543 30.1046 7 29 7H19C17.8954 7 17 7.89543 17 9V13" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 23V29" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M33 23V29" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
`,
});
exports.infoIcon = new ui_components_1.LabIcon({
    name: "veritas:info",
    svgstr: `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 11C25.3807 11 26.5 12.1193 26.5 13.5C26.5 14.8807 25.3807 16 24 16C22.6193 16 21.5 14.8807 21.5 13.5C21.5 12.1193 22.6193 11 24 11Z" fill="#333"/><path d="M24.5 34V20H23.5H22.5" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 34H28" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
`,
});
exports.customerMarketingIcon = new ui_components_1.LabIcon({
    name: "veritas:customer-marketing",
    svgstr: `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z" fill="#2F88FF" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M33 8C33 8 35.25 12.5 33 18" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M40 4C40 4 44.5 12.1 40 22" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 40.8V42H34V40.8C34 36.3196 34 34.0794 33.1281 32.3681C32.3611 30.8628 31.1372 29.6389 29.6319 28.8719C27.9206 28 25.6804 28 21.2 28H16.8C12.3196 28 10.0794 28 8.36808 28.8719C6.86278 29.6389 5.63893 30.8628 4.87195 32.3681C4 34.0794 4 36.3196 4 40.8Z" fill="#2F88FF" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
`,
});
exports.creditScoringIcon = new ui_components_1.LabIcon({
    name: "veritas:credit-scoring",
    svgstr: `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 13V9C14 7.89543 14.8954 7 16 7H42C43.1046 7 44 7.89543 44 9V27C44 28.1046 43.1046 29 42 29H40" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="4" y="19" width="30" height="22" rx="2" fill="#2F88FF" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 28L34 28" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 23L34 35" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 23L4 35" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 34L19 34" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M25 34L27 34" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
`,
});
exports.diagnosisIcon = new ui_components_1.LabIcon({
    name: "veritas:diagnosis",
    svgstr: `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34 10L42 18" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 10L34 18" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 30L37 38L33 34" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 10H4V18H26V10Z" fill="#2F88FF" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 30H4V38H26V30Z" fill="#2F88FF" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
});
exports.assessmentIcon = new ui_components_1.LabIcon({
    name: "veritas:assessment",
    svgstr: `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40 27V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H21" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 12L31 12" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 20L31 20" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 28H23" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M37 37C37 38.3807 36.4404 39.6307 35.5355 40.5355C34.6307 41.4404 33.3807 42 32 42C29.2386 42 27 39.7614 27 37C27 34.2386 29.2386 32 32 32C34.7614 32 37 34.2386 37 37Z" fill="#2F88FF"/><path d="M39 44L35.5355 40.5355M35.5355 40.5355C36.4404 39.6307 37 38.3807 37 37C37 34.2386 34.7614 32 32 32C29.2386 32 27 34.2386 27 37C27 39.7614 29.2386 42 32 42C33.3807 42 34.6307 41.4404 35.5355 40.5355Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
});


/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const application_1 = __webpack_require__(/*! @jupyterlab/application */ "webpack/sharing/consume/default/@jupyterlab/application");
const apputils_1 = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
const launcher_1 = __webpack_require__(/*! @jupyterlab/launcher */ "webpack/sharing/consume/default/@jupyterlab/launcher");
const mainmenu_1 = __webpack_require__(/*! @jupyterlab/mainmenu */ "webpack/sharing/consume/default/@jupyterlab/mainmenu");
const translation_1 = __webpack_require__(/*! @jupyterlab/translation */ "webpack/sharing/consume/default/@jupyterlab/translation");
const ui_components_1 = __webpack_require__(/*! @jupyterlab/ui-components */ "webpack/sharing/consume/default/@jupyterlab/ui-components");
const algorithm_1 = __webpack_require__(/*! @lumino/algorithm */ "webpack/sharing/consume/default/@lumino/algorithm");
const launcher_2 = __webpack_require__(/*! ./launcher */ "./lib/launcher.js");
const icons_1 = __webpack_require__(/*! ./icons */ "./lib/icons.js");
const register_items_1 = __webpack_require__(/*! ./register-items */ "./lib/register-items.js");
__webpack_require__(/*! ../style/index.css */ "./style/index.css");
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
                commandId: "veritas:assessment",
                label: "Veritas Assessment Tool",
                icon: icons_1.assessmentIcon,
                category: launcher_2.VeritasCategory,
                rank: 13,
                execute: () => {
                    // To-do change this to get fix route instead of port
                    window.open(`http://${window.location.hostname}:8001`, "_blank");
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
exports["default"] = extension;


/***/ }),

/***/ "./lib/launcher.js":
/*!*************************!*\
  !*** ./lib/launcher.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Launcher = exports.LauncherModel = exports.VeritasCategory = void 0;
const icons_1 = __webpack_require__(/*! ./icons */ "./lib/icons.js");
const launcher_1 = __webpack_require__(/*! @jupyterlab/launcher */ "webpack/sharing/consume/default/@jupyterlab/launcher");
const algorithm_1 = __webpack_require__(/*! @lumino/algorithm */ "webpack/sharing/consume/default/@lumino/algorithm");
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
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


/***/ }),

/***/ "./lib/register-items.js":
/*!*******************************!*\
  !*** ./lib/register-items.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerItems = void 0;
const registerItems = (commands, model, items) => {
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
exports.registerItems = registerItems;


/***/ }),

/***/ "./style/index.css":
/*!*************************!*\
  !*** ./style/index.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./style/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);
//# sourceMappingURL=lib_index_js.ae2450c5f0215991915d.js.map