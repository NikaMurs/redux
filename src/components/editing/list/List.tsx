import './list.css'
import ListItem from '../listItem/ListItem'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../../../types'

export default function List() {
    const dispatch = useDispatch()
    const { list, filter } = useSelector((state: StateType) => state.list)

    var re = new RegExp(filter.toLowerCase(),"g");
    const filterList = list.filter((item) => item.description.toLowerCase().match(re));

    function onEdit(id: number) {
        dispatch({
            type: 'IS_EDIT',
            payload: id
        })
    }

    function onDelete(id: number) {
        dispatch({
            type: 'DELETE',
            payload: id
        })
    }

    return (
        <ul className='List'>
            {filterList.map((el) => {
                return <ListItem item={el} key={el.id} onEdit={onEdit} onDelete={onDelete} />
            })}
        </ul>
    )
}