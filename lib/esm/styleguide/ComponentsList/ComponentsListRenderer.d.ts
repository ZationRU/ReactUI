/// <reference types="react" />
type TOC = {
    heading: boolean;
    visibleName: string;
    href: string;
    content: string;
    shouldOpenInNewTab: string;
    selected: boolean;
    initialOpen: boolean;
};
interface ComponentsListRendererProps {
    items: TOC[];
}
export default function ComponentsListRenderer(props: ComponentsListRendererProps): JSX.Element;
export {};
