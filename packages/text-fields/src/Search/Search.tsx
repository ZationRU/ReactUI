import React, {ForwardedRef, ReactElement} from "react";
import {SelectFieldProps} from "../SelectField/SelectField";
import {Center, HStack, Layout} from "@znui/layouts";
import {StateLayer} from "@znui/ripple";
import {css, StyleProps, znui} from "@znui/base";
import {ThemeTokens} from "@znui/md3-themes";
import {IconWrapper} from "@znui/md3-utils";

export interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * An icon on the left side.
     */
    leading?: ReactElement
    /**
     * An icon on the right side.
     */
    trailing?: ReactElement
    /**
     * An avatar on the right side after trailing icon.
     */
    avatar?: ReactElement
}

const font = ThemeTokens.typeScales.body.large

const fontStyles: StyleProps = {
    fontFamily: font.fontFamilyName,
    fontWeight: font.fontWeight,
    fontStyle: font.fontFamilyStyle,
    fontSize: font.fontSize,
    lineHeight: font.lineHeight,
    letterSpacing: font.letterSpacing,
}

export const Search = React.forwardRef((props: SearchProps, forwardedRef: ForwardedRef<HTMLDivElement>) => {

    const {
        leading,
        trailing,
        avatar,
        ...inputProps
    } = props

    return <Layout rounded={28} ref={forwardedRef} pos='relative' bg={ThemeTokens.surfaceContainerHigh} c={ThemeTokens.onSurfaceVariant} boxSizing='border-box'>
        <HStack ph={4} pv={4} spacing={4} h={48} alignItems='center'>
            {leading}

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
            }} {...inputProps}/>

            <Center pl={8} gap={4} pr={avatar ? 12 : undefined}>
                {trailing}
                {avatar}
            </Center>
        </HStack>
    </Layout>

})