import React from 'react';
import ReactExample from "react-styleguidist/lib/client/rsg-components/ReactExample/ReactExample";
import PreviewParent from "react-styleguidist/lib/client/rsg-components/Preview/Preview";
import {Layout} from "../../components/Basic/Layout/Layout";

interface PreviewProps {
    code: string;
    evalInContext(code: string): () => any;
}

class Preview extends PreviewParent {
    componentDidUpdate(prevProps: PreviewProps) {
        if (this.props.code !== prevProps.code && this.state.error) {
            this.setState({
                error: null,
            });
        }
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidMount() {}
    componentWillUnmount() {}

    render() {
        const {
            code,
        } = this.props;
        const { error } = this.state;

        if (!this.state.error) {
            console.clear();
        }

        const example = <ReactExample
            code={code}
            evalInContext={this.props.evalInContext}
            onError={(error) => {
                console.log(error)
            }}/>

        return (
            <Layout>
                {example}
            </Layout>
        );
    }
}

export default Preview;