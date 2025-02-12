import React, {ForwardedRef, useMemo} from "react";
import {Adaptive, CSSProps, HTMLZnUIProps, useAdaptiveValue, znui} from "@znui/base";
import {ThemeTokens, ZnUITextType, ZnUITypeScales} from "@znui/md3-themes";

export interface TypescaleProps extends HTMLZnUIProps<'p'> {
    /**
     * The size of the text.
     */
    scale?: Adaptive<keyof ZnUITextType>
    /**
     * The type scale to use for the text.
     */
    type?: Adaptive<keyof ZnUITypeScales>
}

export const propsFromRequiredTypeScale = (
    type: Adaptive<keyof ZnUITypeScales>,
    scale: Adaptive<keyof ZnUITextType>
): CSSProps => {
    const {
        fontSize,
        fontWeight,
        fontFamilyName,
        fontFamilyStyle,
        letterSpacing,
        lineHeight
    } = ThemeTokens.typeScales[useAdaptiveValue(type, 'body')][useAdaptiveValue(scale, 'medium')]

    return {
        fontSize: fontSize,
        fontWeight: fontWeight,
        fontFamily: fontFamilyName,
        fontStyle: fontFamilyStyle,
        letterSpacing: letterSpacing,
        lineHeight: lineHeight,
        ms: 0,
        mr: 0,
        me: 0,
        marginInlineEnd: 0,
        marginInlineStart: 0,
        overflow: 'unset'
    }
}

export const Typescale = React.forwardRef((
    props: TypescaleProps,
    ref: ForwardedRef<HTMLParagraphElement>
) => {
    const {
        scale,
        type,
        ...rest
    } = props

    const styles = useMemo(() => propsFromRequiredTypeScale(type, scale), [type, scale])

    return <znui.p
        ref={ref}
        {...styles}
        {...rest}
    />
})

Typescale.displayName = 'Typescale'