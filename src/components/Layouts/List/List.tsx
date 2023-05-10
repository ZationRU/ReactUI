import { Virtuoso } from 'react-virtuoso'
import {Layout, LayoutProps} from "../Layout/Layout";


export interface ListProps extends LayoutProps {

}

export abstract class ListAdapter<T> {
    count: number = 0
    getItemType(index: number): number {
        return 0
    }
}

export default function List(props: ListProps) {
    const {

        ...layoutProps
    } = props

    return <Layout {...layoutProps}>
        <Virtuoso
            style={{ height: "400px" }}
            totalCount={200}
            itemContent={(index) => <div>Item {index}</div>}
        />
    </Layout>
}