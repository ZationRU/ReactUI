import {HStack} from "../../Basic";
import React, {ForwardedRef} from "react";
import {ScrollLayout, ScrollLayoutProps} from "../ScrollLayout/ScrollLayout";

export interface TabsProps extends ScrollLayoutProps {

}

export const Tabs = React.forwardRef(
    (props: TabsProps, ref: ForwardedRef<HTMLDivElement>) => {
        const {
            ...rest
        } = props

        return <ScrollLayout
            orientation='horizontal'
            ref={ref}
            {...rest}
        >
            <HStack>

            </HStack>
        </ScrollLayout>
    }
)