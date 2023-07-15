import React from "react";
import { StyleProps, ZnUIComponent } from "./styled.types";
import { FunctionInterpolation } from "@emotion/styled";
import { LayoutBreakpoint } from "../adaptive/LayoutBreakpoint";
type StyleResolverProps = StyleProps & {
    currentBreakPoint: LayoutBreakpoint;
};
interface GetStyleObject {
    (options: {
        baseStyle?: StyleProps;
    }): FunctionInterpolation<StyleResolverProps>;
}
export declare const styledProps: {
    position: {
        property: "position" | "position"[];
    };
    top: {
        property: "top" | "top"[];
    };
    bottom: {
        property: "bottom" | "bottom"[];
    };
    left: {
        property: "left" | "left"[];
    };
    right: {
        property: "right" | "right"[];
    };
    positionVertical: {
        property: "left" | "right" | ("left" | "right")[];
    };
    positionHorizontal: {
        property: "top" | "bottom" | ("top" | "bottom")[];
    };
    padding: {
        property: "padding" | "padding"[];
    };
    paddingTop: {
        property: "paddingTop" | "paddingTop"[];
    };
    paddingBottom: {
        property: "paddingBottom" | "paddingBottom"[];
    };
    paddingLeft: {
        property: "paddingLeft" | "paddingLeft"[];
    };
    paddingRight: {
        property: "paddingRight" | "paddingRight"[];
    };
    paddingEnd: {
        property: "paddingBlockEnd" | "paddingBlockEnd"[];
    };
    paddingStart: {
        property: "paddingBlockStart" | "paddingBlockStart"[];
    };
    paddingHorizontal: {
        property: "paddingLeft" | "paddingRight" | ("paddingLeft" | "paddingRight")[];
    };
    paddingVertical: {
        property: "paddingTop" | "paddingBottom" | ("paddingTop" | "paddingBottom")[];
    };
    margin: {
        property: "margin" | "margin"[];
    };
    marginTop: {
        property: "marginTop" | "marginTop"[];
    };
    marginBottom: {
        property: "marginBottom" | "marginBottom"[];
    };
    marginLeft: {
        property: "marginLeft" | "marginLeft"[];
    };
    marginRight: {
        property: "marginRight" | "marginRight"[];
    };
    marginEnd: {
        property: "marginBlockEnd" | "marginBlockEnd"[];
    };
    marginStart: {
        property: "marginBlockStart" | "marginBlockStart"[];
    };
    marginHorizontal: {
        property: "marginLeft" | "marginRight" | ("marginLeft" | "marginRight")[];
    };
    marginVertical: {
        property: "marginTop" | "marginBottom" | ("marginTop" | "marginBottom")[];
    };
    width: {
        property: "width" | "width"[];
    };
    height: {
        property: "height" | "height"[];
    };
    minWidth: {
        property: "minWidth" | "minWidth"[];
    };
    minHeight: {
        property: "minHeight" | "minHeight"[];
    };
    maxWidth: {
        property: "maxWidth" | "maxWidth"[];
    };
    maxHeight: {
        property: "maxHeight" | "maxHeight"[];
    };
    overflow: {
        property: "overflow" | "overflow"[];
    };
    display: {
        property: "display" | "display"[];
    };
    direction: {
        property: "flexDirection" | "flexDirection"[];
    };
    warp: {
        property: "flexWrap" | "flexWrap"[];
    };
    flex: {
        property: "flex" | "flex"[];
    };
    gap: {
        property: "gap" | "gap"[];
    };
    background: {
        property: "background" | "background"[];
    };
    color: {
        property: "color" | "color"[];
    };
    opacity: {
        property: "opacity" | "opacity"[];
    };
};
export declare const isStyleProp: (prop: string) => boolean;
export declare const toCSSObject: GetStyleObject;
export declare function styled<T extends React.ElementType, P extends object = {}>(component: T): ZnUIComponent<T, P>;
export {};
