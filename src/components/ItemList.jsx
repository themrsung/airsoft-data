import React from "react"
import { Item } from "./Item"
import { Rifle } from "./Rifle"

export class ItemList extends React.Component {
    render() {
        return (
            <>
                {this.props.items.map((i) => {
                    switch (this.props.componentToUseAsItem) {
                        case "Rifle":
                            return <Rifle key={i.id} item={i} />
                        default:
                            return <Item key={i.id} item={i} />
                    }
                })}
            </>
        )
    }
}
