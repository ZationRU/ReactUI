import React from "react";

export interface ToneDivProps extends React.ImgHTMLAttributes<HTMLElement> {
    sourceColor?: string
}


export default function ToneDiv(props: ToneDivProps) {
    return <div style={{
        background: props.sourceColor
    }}>

    </div>
}