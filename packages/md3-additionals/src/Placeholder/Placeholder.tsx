import React, {ForwardedRef, ReactNode} from "react";
import {VStack} from "@znui/layouts";
import {Body, Display, Title} from "@znui/typography";
import {IconWrapper} from "@znui/md3-utils";
import {ThemeTokens} from "@znui/md3-themes";

export interface PlaceholderProps {
    /**
     * The title element.
     */
    title?: ReactNode
    /**
     * The description element.
     */
    description?: ReactNode
    /**
     * The icon element.
     */
    icon?: ReactNode
    /**
     * The size of icon element.
     * @default 32
     */
    size?: number
    /**
     * The variant of the component.
     */
    variant?: 'medium' | 'large'
    /**
     * The actions element.
     */
    actions?: ReactNode
}

export const Placeholder = React.forwardRef((props: PlaceholderProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
        title,
        description,
        icon,
        actions,
        size = 32,
        variant = 'medium'
    } = props

    return <VStack ref={ref} alignItems='center' spacing='1rem'>
        {icon && <IconWrapper size={size}>
            {icon}
        </IconWrapper>}

        <VStack spacing={variant == 'medium' ? '0.5rem' : '1.25rem'} alignItems='center'>
            {variant == 'medium' ? <Title size='large'>
                {title}
            </Title> : <Display size='medium'>
                {title}
            </Display>}
            {variant == 'medium' ? <Body size='medium' c={ThemeTokens.palettes.neutral['80']}>
                {description}
            </Body> : <Title size='medium'>
                {description}
            </Title>}
        </VStack>

        {actions}
    </VStack>
})