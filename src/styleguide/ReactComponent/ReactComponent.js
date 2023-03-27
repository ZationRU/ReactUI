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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Headline } from "../../components/Typography/Headline/Headline";
import { Body } from "../../components/Typography/Body/Body";
export default function ReactComponent(props) {
    var _a = props.component, name = _a.name, description = _a.props.description;
    console.log(props);
    return _jsxs("div", { children: [_jsx(Headline, __assign({ size: "small" }, { children: name })), _jsx(Body, __assign({ size: "large" }, { children: description })), (props.description || props.docs) && (_jsxs("div", { children: [props.description, props.docs] })), props.tabButtons && (_jsxs("div", { children: [_jsx("div", { children: props.tabButtons }), _jsx("div", { children: props.tabBody })] })), props.examples] });
}
