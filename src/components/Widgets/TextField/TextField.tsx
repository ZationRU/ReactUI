import React from "react";
import "./TextField.css";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import {HTMLZnUIProps} from "../../../styled/styled.types";
import {Body} from "../../Typography/Body/Body";

export interface TextFieldProps extends HTMLZnUIProps<"input"> {
    label?: string
}

export const TextField = (props: TextFieldProps) => {
    const {
        label,
        ...inputProps
    } = props

    return <Layout minW={210}>
        <Layout h={56} className="TextField">
            <Layout className="znui-body-large" as="input" {...inputProps}/>
            {/*{label&&<Body className="label" size="large">{label}</Body>}*/}
        </Layout>
    </Layout>
}