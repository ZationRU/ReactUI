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
import ThemeProvider from "../../components/ThemeProvider/ThemeProvider";
import Layout from "../../components/Layouts/Layout/Layout";
import Flexible from "../../components/Layouts/Flexible/Flexible";
import NavigationDrawer from "../../components/Widgets/NavigationDrawer/NavigationDrawer";
import SurfaceLayout from "../../components/Layouts/SurfaceLayout/SurfaceLayout";
export default function StyleGuideRenderer(props) {
    var title = props.title, version = props.version, children = props.children, toc = props.toc, hasSidebar = props.hasSidebar;
    return _jsx(ThemeProvider, { children: _jsx(Layout, __assign({ bg: "var(--znui-background)", color: "var(--znui-on-background)" }, { children: _jsxs(Flexible, __assign({ direction: 'row' }, { children: [_jsx(Layout, __assign({ w: 360 }, { children: _jsx("div", __assign({ style: {
                                position: "fixed",
                                width: "inherit"
                            } }, { children: _jsx(NavigationDrawer, __assign({ style: {
                                    height: "100vh",
                                    overflow: 'auto',
                                }, h: "100vh", pr: 0, pt: 0 }, { children: _jsxs(SurfaceLayout, __assign({ s: 1, style: {
                                        overflow: 'auto',
                                    }, pr: 12, pt: 20 }, { children: [_jsx("img", { src: "https://i.ibb.co/HXYdZgf/Type-Full.png", alt: "Zation UI", style: {
                                                height: 50,
                                                marginBottom: 12
                                            } }), toc] })) })) })) })), _jsx(Layout, __assign({ pl: 20, style: {
                            flex: 1,
                        } }, { children: children }))] })) })) });
}
