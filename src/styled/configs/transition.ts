import * as CSS from "csstype";
import {Adaptive} from "../../adaptive/Adaptive";
import {asCSSProp} from "./config";

export const transition = {
    transition: asCSSProp("transition"),
    transitionProperty: asCSSProp("transitionProperty"),
    transitionTimingFunction: asCSSProp("transitionTimingFunction"),
    transitionDuration: asCSSProp("transitionDuration"),
    transitionDelay: asCSSProp("transitionDelay"),
    animation: asCSSProp("animation"),
    willChange: asCSSProp("willChange"),
}

export interface TransitionProps {
    /**
     * The CSS `transition` property
     */
    transition?: Adaptive<CSS.Property.Transition>

    /**
     * The CSS `transition-property` property
     */
    transitionProperty?: Adaptive<CSS.Property.TransitionProperty>

    /**
     * The CSS `transition-timing-function` property
     */
    transitionTimingFunction?: Adaptive<CSS.Property.TransitionTimingFunction>

    /**
     * The CSS `transition-duration` property
     */
    transitionDuration?: Adaptive<CSS.Property.TransitionDuration>

    /**
     * The CSS `transition-delay` property
     */
    transitionDelay?: Adaptive<CSS.Property.TransitionDelay>

    /**
     * The CSS `animation` property
     */
    animation?: Adaptive<CSS.Property.Animation>

    /**
     * The CSS `will-change` property
     */
    willChange?: Adaptive<CSS.Property.WillChange>
}