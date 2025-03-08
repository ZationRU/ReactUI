import React, {ReactNode} from "react";
import {LayoutProps, VStack} from "@znui/layouts";

export interface ListItemContentProps extends LayoutProps {
    children: ReactNode
}

export const ListItemContent = React.forwardRef<HTMLDivElement, ListItemContentProps>
((props, ref) => {

    const hasHeading = React.Children.toArray(props.children).some(
        (child) => React.isValidElement(child) && !(typeof child.type == 'string')
            && 'displayName' in child.type
            && child.type.displayName === 'ListItem.Heading'
    )

    const hasSupportText = React.Children.toArray(props.children).some(
        (child) => React.isValidElement(child) && !(typeof child.type == 'string')
            && 'displayName' in child.type
            && child.type.displayName === 'ListItem.SupportText'
    )

    return (
      <VStack
          flex={1}
          minW={0}
          justify={hasHeading && !hasSupportText ? 'center' : 'start'}
          {...props}
          ref={ref}
      />
    )
})