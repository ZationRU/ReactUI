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
import { jsx as _jsx } from "react/jsx-runtime";
import './ThemeProvider.css';
var ThemeProvider = function (props) {
    var theme = props.theme || 'light';
    // useEffect(() => {
    //
    // }, [props.theme])
    return _jsx("div", __assign({ className: "ThemeProvider", "data-theme": theme }, { children: props.children }));
};
export default ThemeProvider;
