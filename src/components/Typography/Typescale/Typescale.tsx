import {HTMLZnUIProps} from "../../../styled";
import {ZnUITextType, ZnUITypeScales} from "../../../theme/typescale";
import {znui} from "../../Basic";
import React from "react";
import {ThemeTokens} from "../../../theme";
import {Adaptive, useAdaptiveValue} from "../../../adaptive";

export interface TypescaleProps extends HTMLZnUIProps<'p'> {
    scale?: Adaptive<keyof ZnUITextType>
    type: Adaptive<keyof ZnUITypeScales>
}

export const Typescale = (props: TypescaleProps) => {
    const {
        scale,
        type,
        ...rest
    } = props

    const {
        fontSize,
        fontWeight,
        fontFamilyName,
        fontFamilyStyle,
        letterSpacing,
        lineHeight
    } = ThemeTokens.typeScales[useAdaptiveValue(type, 'body')][useAdaptiveValue(scale, 'medium')]

    return <znui.p
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontFamily={fontFamilyName}
        fontFamilyStyle={fontFamilyStyle}
        letterSpacing={letterSpacing}
        lineHeight={lineHeight}
        ms={0}
        me={0}
        overflow="unset"
        {...rest}
    />
}