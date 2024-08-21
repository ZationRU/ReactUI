import React, {createContext, ForwardedRef, useMemo} from "react";
import {IconWrapper} from "@znui/md3-utils";
import {ThemeTokens} from "@znui/md3-themes";
import {FlexLayout, HStack, LayoutProps} from "@znui/layouts";
import {StateLayer} from "@znui/ripple";
import {Label} from "@znui/typography";

export type SelectEventHandler = (id: string|string[]) => void

export interface SegmentedButtonProps extends Omit<LayoutProps, "onSelect"> {
    /**
     * Height density
     *
     * @default 0
     */
    density?: number

    /**
     * Support of multiselect
     *
     * @default false
     */
    multiselect?: boolean

    /**
     * Current selected Segment id's
     */
    selectedIds: string|string[]

    /**
     * Minimal count of selected elements.
     * Works only in multiselect mode
     *
     * @default 1
     */
    minSelected?: number

    /**
     * Select of Segment handler
     *
     * @default undefined
     */
    onSelect?: SelectEventHandler

    /**
     * Enable select Segment icon on select
     *
     * @default true
     */
    selectIcon?: boolean
}

interface SegmentedButtonContextInterface {
    selectedIds: string[]
    onSelect?: SelectEventHandler
    multiselect: boolean
    minSelected: number
    selectIcon: boolean
}

const SegmentedButtonContext = createContext<SegmentedButtonContextInterface|null>(null)

/**
 * Segmented buttons help people select options, switch views, or sort elements
 *
 * @param props
 * @constructor
 */
export const SegmentedButton = React.forwardRef(
    (props: SegmentedButtonProps, ref: ForwardedRef<HTMLDivElement>) => {
        const {
            children,
            density = 0,
            multiselect = false,
            selectedIds,
            minSelected = 1,
            selectIcon = true,
            onSelect,
            ...layoutRest
        } = props

        return <FlexLayout
            h={40 + (density * -4)}
            ref={ref}
            border="1px var(--znui-outline) solid"
            shapeScale="full"
            direction="row"
            wrap="wrap"
            userSelect="none"
            clip={true}
            {...layoutRest}>

            <SegmentedButtonContext.Provider value={useMemo(() => ({
                onSelect,
                selectedIds: Array.isArray(selectedIds)?selectedIds:[selectedIds],
                multiselect,
                minSelected,
                selectIcon
            }), [minSelected, multiselect, onSelect, selectIcon, selectedIds])}>
                {children}
            </SegmentedButtonContext.Provider>
        </FlexLayout>
    }
) as React.ForwardRefExoticComponent<React.PropsWithoutRef<SegmentedButtonProps> & React.RefAttributes<HTMLDivElement>> & {
    Segment: React.ForwardRefExoticComponent<React.PropsWithoutRef<SegmentedButtonSegmentProps> & React.RefAttributes<HTMLButtonElement>>
}

SegmentedButton.displayName = 'SegmentedButton'

export interface SegmentedButtonSegmentProps extends LayoutProps {
    id: string
    disabled?: boolean
    icon?: React.ReactNode
}

const SelectedIcon = <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
    <path
        d="M4.24914 8.12738L1.12164 4.99988L0.0566406 6.05738L4.24914 10.2499L13.2491 1.24988L12.1916 0.192383L4.24914 8.12738Z"
        fill="currentColor"/>
</svg>

SegmentedButton.Segment = React.forwardRef(
    (
        props: SegmentedButtonSegmentProps,
        ref: ForwardedRef<HTMLButtonElement>
    ) => {
        const {
            id,
            children,
            icon,
            ...layoutRest
        } = props

        return <SegmentedButtonContext.Consumer>{
            (data) => {
                if(data==null) {
                    throw new Error("Use SegmentedButton.Segment only in parent - SegmentButton")
                }

                const isSelected = data.selectedIds.includes(id)
                const selectedIds = data.selectedIds
                const selectIcon = data.selectIcon

                return <FlexLayout
                    as='button'
                    {...layoutRest}
                    flex={1}
                    ref={ref}
                    outline='none'
                    c={isSelected ? ThemeTokens.onSecondaryContainer: ThemeTokens.onSurface}
                    justify="center"
                    align="center"
                    pos="relative"
                    cursor="pointer"
                    borderColor={ThemeTokens.outline}
                    borderWidth={0}
                    borderRightWidth={1}
                    borderRightStyle='solid'
                    _last={{
                        borderRight: 'none'
                    }}
                    clip={true}
                    onClick={() => {
                        if(data.multiselect) {
                            const newArray = isSelected ?
                                selectedIds.filter(it => it !== id)
                                : [...selectedIds, id]

                            if(isSelected&&data.minSelected!==0&&selectedIds.length-1<=data.minSelected) {
                                return
                            }

                            data.onSelect?.call(undefined, newArray)
                        }else{
                            data.onSelect?.call(undefined, id)
                        }
                    }}
                    p={0}
                    bg={isSelected?"var(--znui-secondary-container)":'none'}
                >
                    <StateLayer/>
                    <HStack ph={12} pv={10} clip={true}>
                        <IconWrapper
                            clip={true}
                            size={18}
                            to={{
                                baseDuration: 300,
                                maxW: selectIcon&&isSelected ? 18: 0,
                                minW: selectIcon&&isSelected ? 18: 0,
                                mr: selectIcon&&isSelected ? 8: 0
                            }}
                        >
                            {SelectedIcon}
                        </IconWrapper>

                        <IconWrapper
                            clip={true}
                            size={18}
                            to={{
                                baseDuration: 300,
                                maxW: icon ? 18: 0,
                                minW: icon ? 18: 0,
                                mr: icon&&children ? 8: 0
                            }}
                        >
                            {icon}
                        </IconWrapper>

                        <Label
                            clip={true}
                            size="large"
                            overflow="hidden"
                            whiteSpace="nowrap"
                            textOverflow="ellipsis"
                        >{children}</Label>
                    </HStack>
                </FlexLayout>
            }
        }</SegmentedButtonContext.Consumer>
    }
)

SegmentedButton.Segment.displayName = 'SegmentedButton.Segment'