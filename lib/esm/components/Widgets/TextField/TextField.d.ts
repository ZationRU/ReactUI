/// <reference types="react" />
import "./TextField.css";
interface TextFieldProps {
    style?: "outline" | "filled";
    defaultValue?: string | undefined | null;
    hint?: string | undefined | null;
    label?: string | undefined | null;
}
export declare const TextField: (props: TextFieldProps) => JSX.Element;
export {};
