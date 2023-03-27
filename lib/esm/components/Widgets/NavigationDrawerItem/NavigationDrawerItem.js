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
import {StateLayer} from "../../Layouts/StateLayer/StateLayer";
import "./NavigationDrawerItem.css";
import classNames from "classNames";
import { Label } from "../../Typography/Label/Label";
export function NavigationDrawerItem(props) {
    var children = props.children, className = props.className, badge = props.badge, _a = props.selected, selected = _a === void 0 ? false : _a, otherProps = __rest(props, ["children", "className", "badge", "selected"]);
    return _jsxs("div", __assign({}, otherProps, { className: classNames(className, classNames({
            "NavigationDrawerItem": true,
            "NavigationDrawerItem--selected": selected
        })) }, { children: [_jsx(StateLayer, {}), _jsxs("div", __assign({ className: "inner" }, { children: [_jsx(Label, __assign({ size: "large", className: "text" }, { children: children })), badge && _jsx(Label, __assign({ size: "large", className: "badge" }, { children: badge }))] }))] }));
}
