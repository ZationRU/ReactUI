import React from "react";
import "./TextField.css";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import {HTMLZnUIProps} from "../../../styled/styled.types";
import {Body} from "../../Typography/Body/Body";
import classNames from "classnames";

export interface TextFieldProps extends HTMLZnUIProps<"input"> {
    label?: string
}

export const TextField = (props: TextFieldProps) => {
    const {
        label,
        ...inputProps
    } = props

    return <Layout minW={210} pt={6}>
        <Layout h={56} className={classNames(
            "TextField",
            {
                "TextField--labeled": label
            }
        )} overflow="visible">
            <Layout className="znui-body-large" as="input" {...inputProps}/>
            {label&&<Body className="label" size="large">{label}</Body>}
        </Layout>
    </Layout>
}