var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classNames";
import "./FloatingActionButton.css";
import {StateLayer} from "../../Layouts/StateLayer/StateLayer";
export function FloatingActionButton(props) {
    var _a = props.size, size = _a === void 0 ? 'default' : _a, _b = props.appearance, appearance = _b === void 0 ? 'primary' : _b, text = props.text, className = props.className, otherProps = __rest(props, ["size", "appearance", "text", "className"]);
    return _jsxs("button", __assign({ className: classNames(className, 'FloatingActionButton', 'FloatingActionButton--' + size, 'FloatingActionButton--' + appearance, 'elevation-light-3') }, otherProps, { "aria-label": text }, { children: [_jsx(StateLayer, {}), _jsxs("div", __assign({ className: "inner" }, { children: [_jsx("div", { className: "icon" }), _jsx("div", __assign({ className: "text" }, { children: text }))] }))] }));
}
