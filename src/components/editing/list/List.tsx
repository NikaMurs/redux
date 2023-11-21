import './list.css'
import ListItem from '../listItem/ListItem'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../../../types'

export default function List() {
    const dispatch = useDispatch()
    const {list} = useSelector((state: StateType)=>state.list)

    function onEdit(key: number){
        dispatch({
            type: 'IS_EDIT',
            payload: {key}
        })
    }

    return (
        <ul className='List'>
            {list.map((el) => {
                return <ListItem item={el} key={el.id} onEdit={onEdit}/>
            })}
        </ul>
    )
}