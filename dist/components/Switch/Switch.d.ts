import { ChangeEvent } from "react";
import "./Switch.css";
interface SwitchParams {
    onChecked?: (event: ChangeEvent<HTMLInputElement>) => void;
}
export default function Switch(params: SwitchParams): JSX.Element;
export {};
