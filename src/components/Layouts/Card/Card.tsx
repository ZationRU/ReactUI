import React from "react";
import {LayoutProps} from "../Layout/Layout";
import {SurfaceLayout} from "../SurfaceLayout/SurfaceLayout";
import "./Card.css";

export interface CardProps extends LayoutProps {

}

export default function Card(props: CardProps) {
    const {
        ...otherProps
    } = props

    return <SurfaceLayout className="Card" {...otherProps}/>
}