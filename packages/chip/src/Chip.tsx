import React, {ForwardedRef, ReactElement, ReactNode, useMemo} from "react";
import {ThemeTokens} from "@znui/md3-themes";
import {HStack, Layout, LayoutProps} from "@znui/layouts";
import {Label} from "@znui/typography";
import {IconWrapper} from "@znui/md3-utils";
import {StateLayer, Tappable} from "@znui/ripple";
import {znui, ZnUIStyleObject} from "@znui/base";

export interface ChipProps extends LayoutProps {
    /**
     * The component to display on the left.
     */
    leading?: ReactElement
    /**
     * The component to display on the left as avatar.
     */
    avatar?: ReactElement
    /**
     * The component to display on the right.
     */
    trailing?: ReactElement
    /**
     * The handler to be called when the trailing component is clicked.
     */
    trailingOnClick?: React.MouseEventHandler<HTMLDivElement>
    /**
     * The content of the chip.
     */
    children: ReactNode
    /**
     * Whether the chip is an assist chip.
     * @default false
     */
    assist?: boolean
    /**
     * Variant of Chip
     * @default outline
     */
    variant?: 'outline' | 'tonal' | 'filled'
    /**
     * Whether the chip is selected (filled and has a leading check icon).
     * @default false
     */
    selected?: boolean
    /**
     * Whether the chip is disabled.
     */
    disabled?: boolean
}

const variantBackgrounds: Record<keyof ChipProps['variant'], string> = {
    'outline': 'transparent',
    'filled': ThemeTokens.secondaryContainer,
    'tonal':  ThemeTokens.onSurfaceVariant
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
            trailing,
            trailingOnClick,
            avatar,
            assist = false,
            selected,
            disabled = false,
            variant = 'outline',
            ...otherProps
        } = props

        const finalVariant = useMemo(() => selected ? 'filled' : variant, [selected, variant]);
        const finalLeading = selected ? (
            <znui.svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
            >
                <path d="M 7.4 11 L 10 13.6 L 16.6 7 L 18 8.4 L 10 16.4 L 10 16.4 L 6 12.4 L 7.4 11" fill={disabled ? ThemeTokens.onSurface : ThemeTokens.primary} />
            </znui.svg>
        ) : leading


        return <HStack
            pos='relative'
            ref={ref}
            onClick={onClick}
            cursor={onClick ? "pointer" : undefined}
            clip={true}
            rounded={avatar ? 30 : 8}
            pl={avatar ? 4 : finalLeading ? 8 : 16}
            pr={trailing ? 8 : 16}
            boxSizing='border-box'
            h='32px'
            border={variant != 'filled' ? 'solid 1px' : undefined}
            alignItems='center'
            borderColor={disabled && variant != 'outline' ? 'transparent' : ThemeTokens.outlineVariant}
            spacing={8}
            bg={`color-mix(in srgb, ${disabled && finalVariant != 'outline' ? ThemeTokens.onSurfaceVariant : variantBackgrounds[finalVariant]} ${finalVariant == 'tonal' || disabled ? 12 : 100}%, transparent)`}
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
            {...otherProps}
        >
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

            {trailing &&
                <Tappable zIndex={1} disabled={trailingOnClick == null} onClick={trailingOnClick} layoutSize={18}>
                    <IconWrapper oc={disabled ? 0.38 : 1} c={disabled ? ThemeTokens.onSurface : (variant == 'filled' ? ThemeTokens.onSecondaryContainer : ThemeTokens.onSurfaceVariant)} size={18}>
                        {trailing}
                    </IconWrapper>
                </Tappable>}
        </HStack>
    }
)

Chip.displayName = 'Chip'