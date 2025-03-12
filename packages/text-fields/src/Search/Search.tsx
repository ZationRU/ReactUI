import React, {ForwardedRef, ReactElement} from "react";
import {HStack, StackProps} from "@znui/layouts";
import {ThemeTokens} from "@znui/md3-themes";
import {componentWithProps} from "@znui/utils";
import {SearchInput} from "./SearchInput";
import {SearchTrailing} from "./SearchTrailing";

export interface SearchProps extends Omit<StackProps, "orientation"> {
    children: ReactElement
}

export const Search = componentWithProps(React.forwardRef((props: SearchProps, forwardedRef: ForwardedRef<HTMLDivElement>) => {

    const {
        children,
        ...other
    } = props

    return <HStack rounded={28} ref={forwardedRef} pos='relative'
                   bg={ThemeTokens.surfaceContainerHigh} c={ThemeTokens.onSurfaceVariant}
                   boxSizing='border-box'
                   ph={4} pv={4} spacing={4} h={48} alignItems='center' {...other}>
        {children}
    </HStack>
}), {
    Input: SearchInput,
    Trailing: SearchTrailing
})