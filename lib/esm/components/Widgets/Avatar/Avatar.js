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
import classNames from "classNames";
import "./Avatar.css";
export default function Avatar(props) {
    var image = props.image, text = props.text, _a = props.size, size = _a === void 0 ? 60 : _a, className = props.className, otherProps = __rest(props, ["image", "text", "size", "className"]);
    return _jsx("div", __assign({ className: classNames(className, classNames({
            'Avatar': true,
            'Avatar--text': text && !image,
        })), style: {
            width: size,
            height: size,
            fontSize: 22 / 60 * size
        } }, { children: text && !image ? text :
            _jsx("img", __assign({ src: image, alt: "" }, otherProps)) }));
}
