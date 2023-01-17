import React from "react"

export class Item extends React.Component {
    render() {
        return (
            <div>
                {this.props.item.id} - {this.props.item.name}
            </div>
        )
    }
}
