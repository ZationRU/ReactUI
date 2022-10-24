import React, { EventHandler } from "react";
import { Property } from "csstype";
export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
    dismiss: EventHandler<undefined>;
    direction?: Property.FlexDirection | undefined;
    basis?: Property.FlexBasis<object> | undefined;
    alignContent?: Property.AlignContent | undefined;
    alignItems?: Property.AlignItems | undefined;
}
export default function Flex(props: FlexProps): JSX.Element;
