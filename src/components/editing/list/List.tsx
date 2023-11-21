import './list.css'
import ListItem from '../listItem/ListItem'

const list = [
    {
        description: '123',
        price: 100
    },
    {
        description: '456',
        price: 200
    }
]

export default function List() {

    return (
        <ul className='List'>
            {list.map((el) => {
                return <ListItem item={el} />
            })}
        </ul>
    )
}