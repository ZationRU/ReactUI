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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import NavigationDrawerItem from "../../components/Widgets/NavigationDrawerItem/NavigationDrawerItem";
import { useState } from "react";
import Layout from "../../components/Layouts/Layout/Layout";
var CItem = function (props) {
    var _a = useState(props.initialOpen), open = _a[0], setOpen = _a[1];
    return _jsxs(_Fragment, { children: [_jsx(NavigationDrawerItem, __assign({ onClick: function () {
                    if (props.content != null) {
                        setOpen(!open);
                    }
                    else {
                        window.location.href = props.href.split('?')[0] + "/" + props.visibleName;
                    }
                }, badge: props.content != null ? '>' : '', selected: window.location.hash === '#' + (props.href.split('?')[0] + "/" + props.visibleName).split("#")[1] }, { children: props.visibleName })), open ? _jsx(Layout, __assign({ ml: 20 }, { children: props.content })) : null] });
};
export default function ComponentsListRenderer(props) {
    return _jsx(_Fragment, { children: props.items.map(function (it, i) { return _jsx(CItem, __assign({}, it), i); }) });
}
