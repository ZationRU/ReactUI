import React from "react";
export interface GroupProps extends React.ImgHTMLAttributes<HTMLElement> {
    header?: JSX.Element | string;
}
export default function Group(props: GroupProps): JSX.Element;
