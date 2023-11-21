import './addNew.css'

export default function AddNew(){
    
    function onSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
    }

    return (
        <form className='AddNew' onSubmit={onSubmit}>
            <input type="text" />
            <input type="number" />
            <button>Сохранить</button>
        </form>
    )
}