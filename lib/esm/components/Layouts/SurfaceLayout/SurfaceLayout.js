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
import { Layout } from "../Layout/Layout";
import classNames from "classNames";
import {StateLayer} from "../StateLayer/StateLayer";
import "./SurfaceLayout.css";
export function SurfaceLayout(props) {
    var _a = props.s, s = _a === void 0 ? 0 : _a, className = props.className, children = props.children, _b = props.color, color = _b === void 0 ? 'var(--znui-on-surface)' : _b, otherProps = __rest(props, ["s", "className", "children", "color"]);
    return _jsxs(Layout, __assign({}, otherProps, { color: color, className: classNames(className, "SurfaceLayout", "SurfaceLayout-" + s) }, { children: [_jsx(StateLayer, {}), children] }));
}
