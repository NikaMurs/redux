export type ListItemType = {
    id: number,
    description: string,
    price: number
}

export type StateType = {
    list: {
        isEdit: number,
        filter: string,
        list: Array<ListItemType>
    }
}

export type ListItemProps = {
    onDelete: CallableFunction
    onEdit: CallableFunction,
    item: ListItemType
}



