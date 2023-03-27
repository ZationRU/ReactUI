import ReactComponentProps from 'react-styleguidist/lib/client/rsg-components/ReactComponent';
import {Headline} from "../../components/Typography/Headline/Headline";
import {Body} from "../../components/Typography/Body/Body";

export default function ReactComponent(props: ReactComponentProps) {
    const {
        component: {
            name,
            props: {
                description
            },
        }
    } = props

    console.log(props)
    return <div>
        <Headline size="small">{name}</Headline>
        <Body size="large">{description}</Body>

        {(props.description || props.docs) && (
            <div>
                {props.description}
                {props.docs}
            </div>
        )}

        {props.tabButtons && (
            <div>
                <div>{props.tabButtons}</div>
                <div>{props.tabBody}</div>
            </div>
        )}
        {props.examples}
    </div>
}