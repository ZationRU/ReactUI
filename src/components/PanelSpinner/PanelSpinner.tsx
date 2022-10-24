import React from "react";
import "./PanelSpinner.css"
import Spinner from "../Spinner/Spinner";

export default function PanelSpinner(props: React.HTMLAttributes<HTMLDivElement>) {
    return <div {...props} className="PanelSpinner">
        <Spinner/>
    </div>
}