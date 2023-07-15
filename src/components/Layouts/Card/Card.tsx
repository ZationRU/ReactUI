import React from "react";
import {SurfaceLayout, SurfaceLayoutProps} from "../SurfaceLayout/SurfaceLayout";
import "./Card.css";

export interface CardProps extends SurfaceLayoutProps {

}

export default function Card(props: CardProps) {
    const {
        ...otherProps
    } = props

    return <SurfaceLayout className="Card" {...otherProps}/>
}