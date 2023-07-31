import React from "react";
import "./TextField.css";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import {HTMLZnUIProps} from "../../../styled/styled.types";
import {Body} from "../../Typography/Body/Body";
import classNames from "classnames";
import {AnimatedVisibility} from "../../Animation/AnimatedVisibility/AnimatedVisibility";

export interface TextFieldProps extends HTMLZnUIProps<"input"> {
    label?: string
    error?: boolean
    supportingText?: string
}

export const TextField = (props: TextFieldProps) => {
    const {
        label,
        disabled,
        error = false,
        supportingText,
        ...inputProps
    } = props

    return <Layout minW={210} pt={6} oc={disabled?0.32:1} className={classNames({
        "TextField-Container--error": error
    })}>
        <Layout as="fieldset" h={64} className={classNames(
            "TextField",
            {
                "TextField--labeled": label,
            }
        )} overflow="visible">
            <Layout className="znui-body-large" as="input" disabled={disabled} {...inputProps}/>
            {label&&<Body className="label" size="large">{label}</Body>}
            <legend className="legend">{label}</legend>
        </Layout>

        {supportingText&&<AnimatedVisibility ph={16} pt={4}>
            <Body size="small">{supportingText}</Body>
        </AnimatedVisibility>}
    </Layout>
}