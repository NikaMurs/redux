import './listItem.css'
type ListItemProps = {
    item: {
        description: string,
        price: number
    }
}

export default function ListItem(props: ListItemProps) {
    return (
        <li className='ListItem'>
            <div className='ListItemContent'>
                <p>{props.item.description + ' - ' + props.item.price + '₽'}</p>
                <div className='ListItemContentButtons'>
                    <button><i className="fa-regular fa-pen-to-square"></i></button>
                    <button><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>
        </li>
    )
}