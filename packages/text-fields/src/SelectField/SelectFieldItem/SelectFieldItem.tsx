import {Menu, MenuItemProps} from "@znui/menu"
import React, {ForwardedRef, useContext} from "react";
import {SelectFieldContext} from "../SelectField";

export type SelectFieldItemProps = Omit<MenuItemProps, 'closeOnClick'> & {
    value: string
}

const Check = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
</svg>

export const SelectFieldItem = React.forwardRef((props: SelectFieldItemProps, ref: ForwardedRef<HTMLDivElement>) => {
    const context = useContext(SelectFieldContext)
    if(context == null) throw new Error('SelectFieldItem component can be used only in SelectField')

    const {
        value,
        ...menuItemProps
    } = props

    return <Menu.Item trailingIcon={context.selected.includes(value) && Check}
                      {...menuItemProps} ref={ref}
                      closeOnClick={!context.multiple} children={menuItemProps.children}
                      onClick={() => context.select(value)} selected={context.selected.includes(value)}
    />
})