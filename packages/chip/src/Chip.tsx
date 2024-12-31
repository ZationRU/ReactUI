import React, {ForwardedRef, ReactElement, ReactNode, useMemo} from "react";
import {ThemeTokens} from "@znui/md3-themes";
import {HStack, Layout, LayoutProps} from "@znui/layouts";
import {Label} from "@znui/typography";
import {IconWrapper} from "@znui/md3-utils";
import {StateLayer, Tappable} from "@znui/ripple";
import {znui, ZnUIStyleObject} from "@znui/base";

export interface ChipProps extends LayoutProps {
    mode?: 'outlined' | 'elevated' | 'filled'
    leading?: ReactElement
    avatar?: ReactElement
    trailingIcon?: ReactElement
    trailingOnClick?: React.MouseEventHandler<HTMLDivElement>
    children: ReactNode
    /**
     * @default false
     */
    assist?: boolean
    /**
     * @default outline
     */
    variant?: 'outline' | 'tonal' | 'filled'
    /**
     * Whether the chip is selected (filled and has a leading check icon).
     * @default false
     */
    selected?: boolean
    disabled?: boolean
}

const variantStyles: Record<keyof ChipProps['variant'], ZnUIStyleObject> = {
    'outline': {},
    'filled': {
        bg: ThemeTokens.secondaryContainer,
        borderColor: undefined,
        border: undefined
    },
    'tonal': {
        bg: ThemeTokens.onSurfaceVariant
    }
}

/**
 * Checkbox buttons let people select one option from a set of options
 */
export const Chip = React.forwardRef(
    (props: ChipProps, ref: ForwardedRef<HTMLDivElement>) => {
        const {
            onClick,
            children,
            leading,
            trailingIcon,
            trailingOnClick,
            avatar,
            assist = false,
            selected,
            disabled = false,
            variant = 'outline',
            ...otherProps
        } = props

        const finalVariant = useMemo(() => selected ? 'filled' : variant, [selected])
        const finalLeading = useMemo(() => selected ? <znui.svg
            xmlns="http://www.w3.org/2000/svg"
            width={24} height={24} viewBox="0 0 24 24" fill="none"
        >
            <path d="M 7.4 11 L 10 13.6 L 16.6 7 L 18 8.4 L 10 16.4 L 10 16.4 L 6 12.4 L 7.4 11" fill={disabled ? ThemeTokens.onSurface : ThemeTokens.primary} />
        </znui.svg> : leading, [selected, disabled])

        return <HStack
            pos='relative'
            ref={ref}
            onClick={onClick}
            cursor={onClick ? "pointer" : undefined}
            clip={true}
            rounded={avatar ? 30 : 8}
            pl={avatar ? 4 : finalLeading ? 8 : 16}
            pr={trailingIcon ? 8 : 16}
            boxSizing='border-box'
            h='32px'
            border='solid 1px'
            alignItems='center'
            borderColor={disabled && variant != 'outline' ? 'transparent' : ThemeTokens.outlineVariant}
            spacing={8}
            pseudos={{
                '&:focus-visible > .state-layer': {
                    oc: 0.12,
                    bg: 'currentColor'
                },
                '&:hover > .state-layer': {
                    oc: 0.08,
                    bg: 'currentColor'
                },
            }}
            {...variantStyles[finalVariant]}
            bg='transparent'
            {...otherProps}
        >
            <Layout pos='absolute' top={0} left={0} bg={disabled && finalVariant != 'outline' ? ThemeTokens.onSurfaceVariant : variantStyles[finalVariant]['bg']} oc={finalVariant == 'tonal' || disabled ? 0.12 : 1}
                    layoutSize='100%'/>
            {onClick && <StateLayer/>}
            {finalLeading && !avatar && <IconWrapper oc={disabled ? 0.38 : 1} zIndex={1} c={selected ? ThemeTokens.onSecondaryContainer : (disabled ? ThemeTokens.onSurface : ThemeTokens.primary)} size={18}>
                {finalLeading}
            </IconWrapper>}

            {avatar}

            <Label zIndex={1} textAlign='center' size='large'
                   oc={disabled ? 0.38 : 1}
                   c={assist || disabled ? ThemeTokens.onSurface : (finalVariant == 'filled' ? ThemeTokens.onSecondaryContainer : ThemeTokens.onSurfaceVariant)}>
                {children}
            </Label>

            {trailingIcon &&
                <Tappable zIndex={1} disabled={trailingOnClick == null} onClick={trailingOnClick} layoutSize={18}>
                    <IconWrapper oc={disabled ? 0.38 : 1} c={disabled ? ThemeTokens.onSurface : (variant == 'filled' ? ThemeTokens.onSecondaryContainer : ThemeTokens.onSurfaceVariant)} size={18}>
                        {trailingIcon}
                    </IconWrapper>
                </Tappable>}
        </HStack>
    }
)

Chip.displayName = 'Chip'