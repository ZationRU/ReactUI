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
import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
import "./Flexible.css";
export function Flexible(props) {
    var _a = props.direction, direction = _a === void 0 ? 'column' : _a, _b = props.reverse, reverse = _b === void 0 ? false : _b, _c = props.warp, warp = _c === void 0 ? true : _c, className = props.className, style = props.style, otherProps = __rest(props, ["direction", "reverse", "warp", "className", "style"]);
    return _jsx("div", __assign({}, otherProps, { className: classNames(className, 'Flexible'), style: __assign(__assign({}, style), { flexDirection: direction + (reverse ? '-reverse' : ''), flexWrap: warp || 'nowrap' }) }));
}
