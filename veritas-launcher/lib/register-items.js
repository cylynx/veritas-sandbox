"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=register-items.js.map