"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let GroupStyle = (...args) => {
    for (var i = 0; i < args.length; i++) {
        Object.assign(args[0], args[i]);
    }
    return args[0];
};
// TODO: Create Themes
//# sourceMappingURL=tooltip.themes.js.map