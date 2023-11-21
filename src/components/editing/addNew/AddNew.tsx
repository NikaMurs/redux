import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../../types'

import './addNew.css'

export default function AddNew() {
    const dispatch = useDispatch();
    const { list } = useSelector((state: StateType) => state.list)

    

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const description = formData.get('description');
        const price = formData.get('price');
        dispatch({
            type: 'ADD_ITEM',
            payload: {description, price}
        })
        
    }

    return (
        <form className='AddNew' onSubmit={onSubmit}>
            <i className="fa-solid fa-plus"></i>
            <input type="text" name='description' placeholder='Название'/>
            <input type="number" name='price' placeholder='Цена'/>
            <button>Добавить</button>
        </form>
    )
}