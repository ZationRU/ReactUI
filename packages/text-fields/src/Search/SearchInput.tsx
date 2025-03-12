import {HTMLZnUIProps, StyleProps, znui} from "@znui/base";
import React from "react";
import {ThemeTokens} from "@znui/md3-themes";

const font = ThemeTokens.typeScales.body.large

const fontStyles: StyleProps = {
    fontFamily: font.fontFamilyName,
    fontWeight: font.fontWeight,
    fontStyle: font.fontFamilyStyle,
    fontSize: font.fontSize,
    lineHeight: font.lineHeight,
    letterSpacing: font.letterSpacing,
}

export function SearchInput(props: HTMLZnUIProps<'input'>) {
    return (
        <znui.input pseudos={{
            '&::-ms-reveal, &::-ms-clear': {
                display: 'none'
            },
            '&': {
                background: 'none',
                border: 'none',
                outline: 'none',
                padding: 0,
                width: '100%',
                ...fontStyles
            }
        }} {...props} />
    )
}