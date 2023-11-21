import { useDispatch } from 'react-redux'
import './filter.css'

export default function Filter() {
    const dispatch = useDispatch()

    function onChange(e: React.FormEvent<HTMLInputElement>){
        dispatch({
            type: 'ADD_FILTER',
            payload: e.currentTarget.value
        })
    }

    return (
        <div className='Filter'>
            <label htmlFor="filter"><i className="fa-solid fa-magnifying-glass"></i></label>
            <input onChange={onChange} type="text" name='filter' placeholder='Поиск...'/>
        </div>
    )
}