import { Item } from "./Item"

export class Rifle extends Item {
    render() {
        return (
            <div>
                {this.props.item.id} - {this.props.item.name} -{" "}
                {this.props.item.upperReceiverId}
            </div>
        )
    }
}
