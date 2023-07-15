import { ChangeEventHandler, ReactNode } from "react";
import "./Switch.css";
export interface SwitchProps {
    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: boolean;
    icon?: ReactNode;
    disabled?: boolean;
}
export declare function Switch(props: SwitchProps): JSX.Element;
