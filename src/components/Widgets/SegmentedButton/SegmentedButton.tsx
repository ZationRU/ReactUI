import React, {createContext, useMemo} from "react";
import {LayoutProps, FlexLayout, HStack} from "../../Basic";
import {Label} from "../../Typography";
import {StateLayer} from "../../Layouts";
import {IconWrapper} from "../../Utils";
import {ThemeTokens} from "../../../theme";

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
export const SegmentedButton = (props: SegmentedButtonProps) => {
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

SegmentedButton.Segment = (props: SegmentedButtonSegmentProps) => {
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
                {...layoutRest}
                flex={1}
                c={isSelected ? ThemeTokens.onSecondaryContainer: ThemeTokens.onSurface}
                justify="center"
                align="center"
                borderRight="1px var(--znui-outline) solid"
                pos="relative"
                cursor="pointer"
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