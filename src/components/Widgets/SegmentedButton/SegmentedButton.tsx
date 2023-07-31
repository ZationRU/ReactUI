import React, {createContext, useContext, useMemo} from "react";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import {Body} from "../../Typography/Body/Body";
import {FlexLayout} from "../../Basic/FlexLayout/FlexLayout";
import {Label} from "../../Typography/Label/Label";
import {StateLayer} from "../../Layouts/StateLayer/StateLayer";

export type SelectEventHandler = (id: string|string[]) => void

export interface SegmentedButtonProps extends Omit<LayoutProps, "onSelect"> {
    density?: number
    multiselect?: boolean
    selectedIds: string|string[]
    onSelect?: SelectEventHandler
}

interface SegmentedButtonContextInterface {
    selectedIds: string[]
    onSelect?: SelectEventHandler
    multiselect: boolean
}

const SegmentedButtonContext = createContext<SegmentedButtonContextInterface|null>(null)

/**
 * Not yet finished component
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
        onSelect,
        ...layoutRest
    } = props

    return <FlexLayout
        h={40 + (density * -4)}
        border="1px var(--znui-outline) solid"
        shapeScale="full"
        direction="row"
        wrap="wrap"
        {...layoutRest}>

        <SegmentedButtonContext.Provider value={useMemo(() => ({
            onSelect,
            selectedIds: Array.isArray(selectedIds)?selectedIds:[selectedIds],
            multiselect
        }), [onSelect, selectedIds])}>
            {children}
        </SegmentedButtonContext.Provider>
    </FlexLayout>
}

export interface SegmentedButtonSegmentProps extends LayoutProps {
    id: string
    disabled?: boolean
}

SegmentedButton.Segment = (props: SegmentedButtonSegmentProps) => {
    const {
        id,
        children,
        ...layoutRest
    } = props

    return <SegmentedButtonContext.Consumer>{
        (data) => {
            if(data==null) {
                throw new Error("Use SegmentedButton.Segment only in parent - SegmentButton")
            }

            const isSelected = data.selectedIds.includes(id)
            const selectedIds = data.selectedIds

            return <FlexLayout
                {...layoutRest}
                flex={1}
                c="var(--znui-on-secondary-container)"
                justify="center"
                align="center"
                borderRight="1px var(--znui-outline) solid"
                pos="relative"
                onClick={() => {
                    if(data.multiselect) {
                        const newArray = isSelected ?
                            selectedIds.filter(it => it !== id)
                            : [...selectedIds, id]

                        data.onSelect?.call(undefined, newArray)
                    }else{
                        data.onSelect?.call(undefined, id)
                    }
                }}
                bg={isSelected?"var(--znui-secondary-container)":undefined}
            >
                <StateLayer/>
                <Label size="large">{children}</Label>
            </FlexLayout>
        }
    }</SegmentedButtonContext.Consumer>
}