import React from "react";
import "./TextField.css";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import {HTMLZnUIProps} from "../../../styled/styled.types";

export interface TextFieldProps extends HTMLZnUIProps<"input"> {

}

export const TextField = (props: TextFieldProps) => {
    const {
        ...inputProps
    } = props

    return <Layout minW={210}>
        <Layout h={56} className="TextField">
            <Layout className="znui-body-large" as="input" {...inputProps}/>
        </Layout>
    </Layout>
}