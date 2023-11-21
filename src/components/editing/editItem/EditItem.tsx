import { useDispatch } from 'react-redux'
import './editItem.css'

export default function EditItem(){
    const dispatch = useDispatch();
    dispatch({
        type: 'GET_BY_ID',
    })

    return (
        <form className='EditItem'>
            <input type="text" name='description' />
            <input type="number" name='price' />
            <button>Сохранить</button>
            <button>Отмена</button>
        </form>
    )
}