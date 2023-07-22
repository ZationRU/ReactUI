import {background, BackgroundProps} from "./background";
import {border, BorderProps} from "./border";
import {colors, ColorsProps} from "./colors";
import {effect, EffectProps} from "./effect";
import {flex, FlexProps} from "./flex";
import {grid, GridProps} from "./grid";
import {layout, LayoutCSSProps} from "./layout";
import {margin, MarginProps} from "./margin";
import {padding, PaddingProps} from "./padding";
import {position, PositionProps} from "./position";
import {transform, TransformProps} from "./transform";
import {typography, TypographyProps} from "./typography";
import {interactivity, InteractivityProps} from "./interactivity";
import {list, ListProps} from "./list";
import {scroll, ScrollProps} from "./scroll";
import {textDecoration, TextDecorationProps} from "./textDecoration";
import {transition, TransitionProps} from "./transition";
import {FilterProps} from "./filter";

export * from "./colors"
export * from "./flex"
export * from "./layout"
export * from "./margin"
export * from "./padding"
export * from "./position"
export * from "./transform"
export * from "./grid"
export * from "./typography"
export * from "./border"
export * from "./background"
export * from "./effect"
export * from "./filter"
export * from "./interactivity"
export * from "./list"
export * from "./scroll"
export * from "./textDecoration"
export * from "./transition"
export * from "../config"

export const cssConfig = {
    ...background,
    ...border,
    ...colors,
    ...effect,
    ...flex,
    ...grid,
    ...layout,
    ...margin,
    ...padding,
    ...position,
    ...transform,
    ...typography,
    ...interactivity,
    ...list,
    ...scroll,
    ...textDecoration,
    ...transition,
    ...transform,
}

export type CSSProps = ColorsProps &
    FlexProps &
    LayoutCSSProps &
    MarginProps &
    PaddingProps &
    PositionProps &
    GridProps &
    TransformProps &
    TypographyProps &
    BorderProps &
    EffectProps &
    BackgroundProps &
    FilterProps &
    InteractivityProps &
    ListProps &
    ScrollProps &
    TextDecorationProps &
    TransitionProps ;