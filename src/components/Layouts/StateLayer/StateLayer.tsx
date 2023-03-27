import React from 'react';
import "./StateLayer.css";

export interface StateLayerProps extends React.HTMLAttributes<HTMLDivElement> {

}

export function StateLayer(props: React.HTMLAttributes<HTMLDivElement>) {
    return <div className="state-layer"/>
}