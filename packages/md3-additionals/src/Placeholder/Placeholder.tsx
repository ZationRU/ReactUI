import React, {ForwardedRef, ReactNode} from "react";
import {LayoutProps, VStack} from "@znui/layouts";
import {Body, Display, Title} from "@znui/typography";
import {IconWrapper} from "@znui/md3-utils";
import {ThemeTokens} from "@znui/md3-themes";

export interface PlaceholderProps extends Omit<LayoutProps, 'title'> {
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
    variant?: 'small' | 'medium' | 'large'
    /**
     * The actions element.
     */
    actions?: ReactNode
}

const SmallSize = ({title, description}: Pick<PlaceholderProps, 'description' | 'title'>) => {
    return <>
        <Title size='medium'>
            {title}
        </Title>

        <Body size='medium' c={ThemeTokens.onSurfaceVariant}>
            {description}
        </Body>
    </>
}

const MediumSize = ({title, description}: Pick<PlaceholderProps, 'description' | 'title'>) => {
    return <>
        <Title size='large'>
            {title}
        </Title>

        <Body size='medium' c={ThemeTokens.onSurfaceVariant}>
            {description}
        </Body>
    </>
}

const LargeSize = ({title, description}: Pick<PlaceholderProps, 'description' | 'title'>) => {
    return <>
        <Display size='medium'>
            {title}
        </Display>

        <Title size='medium'>
            {description}
        </Title>
    </>
}

export const Placeholder = React.forwardRef((props: PlaceholderProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
        title,
        description,
        icon,
        actions,
        size = 32,
        variant = 'medium',
        ...rest
    } = props

    return <VStack ref={ref} alignItems='center' spacing='1rem' {...rest}>
        {icon && <IconWrapper size={size}>
            {icon}
        </IconWrapper>}

        <VStack spacing={variant != 'large' ? '0.5rem' : '1.25rem'} alignItems='center'>
            {variant == 'small' && <SmallSize title={title} description={description} />}
            {variant == 'medium' && <MediumSize title={title} description={description} />}
            {variant == 'large' && <LargeSize title={title} description={description} />}
        </VStack>

        {actions}
    </VStack>
})