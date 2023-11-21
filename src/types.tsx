export type ListItemType = {
    id: number,
    description: string,
    price: number
}

export type StateType = {
    isEdit: number
    list: {
        list: Array<ListItemType>
    }
}

export type ListItemProps = {
    onEdit: CallableFunction,
    item: ListItemType
}



