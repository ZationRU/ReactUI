import {znui} from "../znui";
import {HTMLZnUIProps} from "../../../styled/styled.types";

export type FlexLayoutProps = HTMLZnUIProps<"div">

export const FlexLayout = znui("div", {
    display: "flex"
})

export const Spacer = znui("div", {
     flex: "1 0 0%",
     placeSelf: 'stretch'
})