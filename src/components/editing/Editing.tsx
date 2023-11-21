import './editing.css'
import AddNew from './addNew/AddNew'
import EditItem from './editItem/EditItem'
import List from './list/List'
import Filter from './filter/Filter'
import { useSelector } from 'react-redux'
import { StateType } from '../../types'

export default function Editing() {
    const { isEdit }: any = useSelector((state: StateType) => state.list)

    return (
        <div className='Editing'>
            {isEdit === -1 ? <AddNew /> : <EditItem />}
            <Filter />
            <List />
        </div>
    )
}