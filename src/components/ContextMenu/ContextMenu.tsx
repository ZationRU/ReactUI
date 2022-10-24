import React, {useCallback, useState} from "react";
import Card from "../Card/Card";

export interface ContextMenuInterface {
    dismiss: () => void
}

export interface ContextMenuProps extends React.HTMLAttributes<HTMLDivElement> {
    menu: (menu: ContextMenuInterface) => JSX.Element
}

export default function ContextMenu(props: ContextMenuProps) {
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
    const [show, setShow] = useState(false);

    const handleContextMenu = useCallback(
        (event) => {
            event.preventDefault();
            setAnchorPoint({ x: event.targetX+event.target.width, y: event.targetY+event.target.height });
            setShow(true);
        },
        [setAnchorPoint, setShow]
    );

    return <>
        <div onClick={handleContextMenu}>{props.children}</div>
        {show&&<Card style={{
            position: "absolute",
            marginTop: anchorPoint.y,
            marginLeft: anchorPoint.x,
            border: "black 1px solid"
        }}>
            {props.menu({
                dismiss: () => setShow(false)
            })}
        </Card>}
    </>
}