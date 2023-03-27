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
export function Layout(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var 
    /*
     * Colors
     */
    style = props.style, bg = props.bg, color = props.color, opacity = props.opacity, 
    /*
     * Margins
     */
    m = props.m, ml = props.ml, mr = props.mr, mb = props.mb, mt = props.mt, ms = props.ms, me = props.me, mv = props.mv, mh = props.mh, 
    /*
     * Paddings
     */
    p = props.p, pl = props.pl, pr = props.pr, pb = props.pb, pt = props.pt, ps = props.ps, pe = props.pe, pv = props.pv, ph = props.ph, 
    /*
     * Sizes
     */
    w = props.w, width = props.width, h = props.h, height = props.height, maxW = props.maxW, maxWidth = props.maxWidth, minW = props.minW, minWidth = props.minWidth, maxH = props.maxH, maxHeight = props.maxHeight, minH = props.minH, minHeight = props.minHeight, otherProps = __rest(props, ["style", "bg", "color", "opacity", "m", "ml", "mr", "mb", "mt", "ms", "me", "mv", "mh", "p", "pl", "pr", "pb", "pt", "ps", "pe", "pv", "ph", "w", "width", "h", "height", "maxW", "maxWidth", "minW", "minWidth", "maxH", "maxHeight", "minH", "minHeight"]);
    return _jsx("div", __assign({}, otherProps, { style: __assign(__assign({}, style), { 
            /*
             * Paddings
             */
            paddingLeft: (_a = pl !== null && pl !== void 0 ? pl : ph) !== null && _a !== void 0 ? _a : p, paddingRight: (_b = pr !== null && pr !== void 0 ? pr : ph) !== null && _b !== void 0 ? _b : p, paddingTop: (_c = pt !== null && pt !== void 0 ? pt : pv) !== null && _c !== void 0 ? _c : p, paddingBottom: (_d = pb !== null && pb !== void 0 ? pb : pv) !== null && _d !== void 0 ? _d : p, paddingInlineStart: ps, paddingInlineEnd: pe, 
            /*
             * Colors
             */
            background: bg, color: color, opacity: opacity, 
            /*
             * Margins
             */
            marginLeft: (_e = ml !== null && ml !== void 0 ? ml : mh) !== null && _e !== void 0 ? _e : m, marginRight: (_f = mr !== null && mr !== void 0 ? mr : mh) !== null && _f !== void 0 ? _f : m, marginTop: (_g = mt !== null && mt !== void 0 ? mt : mv) !== null && _g !== void 0 ? _g : m, marginBottom: (_h = mb !== null && mb !== void 0 ? mb : mv) !== null && _h !== void 0 ? _h : m, marginInlineStart: ms, marginInlineEnd: me, 
            /*
             * Sizes
             */
            height: h !== null && h !== void 0 ? h : height, width: w !== null && w !== void 0 ? w : height, maxHeight: maxH !== null && maxH !== void 0 ? maxH : maxHeight, maxWidth: maxW !== null && maxW !== void 0 ? maxW : maxWidth, minHeight: minH !== null && minH !== void 0 ? minH : minHeight, minWidth: minW !== null && minW !== void 0 ? minW : minWidth }) }));
}
