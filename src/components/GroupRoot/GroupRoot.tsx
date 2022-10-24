import React from "react";
import Card from "../Card/Card";
import Div from "../Div/Div";

export default function GroupRoot(props: React.HTMLAttributes<HTMLDivElement>) {
    return <Div>
        <Card {...props}/>
    </Div>
}