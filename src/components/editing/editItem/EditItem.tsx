import { useDispatch, useSelector } from 'react-redux'
import './editItem.css'
import { StateType } from '../../../types';

export default function EditItem() {
    const dispatch = useDispatch()
    const item = useSelector((state: StateType) => state.list.list.find((el) => el.id === state.list.isEdit));

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const description = formData.get('description');
        const price = formData.get('price');
        dispatch({
            type: 'SAVE_EDIT',
            payload: {description, price}
        })
    }

    function onCancel(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault()
        dispatch({
            type: 'IS_EDIT',
            payload: -1
        })
    }

    return (
        <form className='EditItem' onSubmit={onSubmit}>
            <input type="text" name='description' defaultValue={item?.description} />
            <input type="number" name='price' defaultValue={item?.price} />
            <button type='submit'>Сохранить</button>
            <button onClick={onCancel}>Отмена</button>
        </form>
    )
}