import './listItem.css'
import { ListItemProps } from '../../../types'


export default function ListItem(props: ListItemProps) {
    const {item, onEdit, onDelete} = props
    return (
        <li className='ListItem'>
            <div className='ListItemContent'>
                <p>{item.description + ' - ' + item.price + '₽'}</p>
                <div className='ListItemContentButtons'>
                    <button onClick={()=>{onEdit(item.id)}}><i className="fa-regular fa-pen-to-square"></i></button>
                    <button onClick={()=>{onDelete(item.id)}}><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>
        </li>
    )
}