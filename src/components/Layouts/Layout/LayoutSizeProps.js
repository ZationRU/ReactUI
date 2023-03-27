export function buildSizeProps(props) {
    var _a, _b, _c, _d, _e, _f;
    return {
        height: (_a = props.h) !== null && _a !== void 0 ? _a : props.height,
        width: (_b = props.w) !== null && _b !== void 0 ? _b : props.height,
        maxHeight: (_c = props.maxH) !== null && _c !== void 0 ? _c : props.maxHeight,
        maxWidth: (_d = props.maxW) !== null && _d !== void 0 ? _d : props.maxWidth,
        minHeight: (_e = props.minH) !== null && _e !== void 0 ? _e : props.minHeight,
        minWidth: (_f = props.minW) !== null && _f !== void 0 ? _f : props.minWidth,
    };
}
