const initialState = {
    isEdit: -1,
	list: [{
        id: 0,
        description: 'Замена стекла',
        price: 21000
    },
    {
        id: 1,
        description: 'Замена аккумулятора',
        price: 8000
    }]
}
let nextId = 2;
export default function reducer(state = initialState, action: any){
	switch(action.type){
		case 'ADD_ITEM': return {
			...state,
            list: [...state.list, {
                id: nextId++,
                description: action.payload.description,
                price: action.payload.price
            }]
		}
        case 'IS_EDIT': return {
            ...state,
            isEdit: action.payload.key
        }
        case 'GET_BY_ID': {
            const item = state.list.find((el)=> el.id === state.isEdit)
            console.log(item)
            return 123
        }
		default: return state
	}
}