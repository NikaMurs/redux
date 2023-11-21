const initialState = {
    isEdit: -1,
    filter: '',
	list: [{
        id: 0,
        description: 'Замена стекла',
        price: 21000
    },
    {
        id: 1,
        description: 'Замена аккумулятора',
        price: 8000
    },
    {
        id: 2,
        description: 'Красный чехол',
        price: 600
    },
    {
        id: 3,
        description: 'Синий чехол',
        price: 700
    }]
}
let nextId = 4;
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
            isEdit: action.payload
        }
        case 'SAVE_EDIT':  {
            state.list.map((el) => {
                if (el.id === state.isEdit){
                    el.description = action.payload.description
                    el.price = action.payload.price
                }
            })
            return {...state, isEdit: -1}
        }
        case 'DELETE': {
            for (let i = 0; i < state.list.length; i++){
                if (state.list[i].id === action.payload){
                    state.list.splice(i, 1)
                }
            }
            return {...state}
        }
        case 'ADD_FILTER': return {
            ...state,
            filter: action.payload
        }
		default: return state
	}
}