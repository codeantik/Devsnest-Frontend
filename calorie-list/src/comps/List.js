import deleteIcon from '../assets/delete.svg'

const List = ({ id, item, deleteItem }) => {
    const { name, cal } = item
        return (
            <>
                <div className='cards'>
                    <div>
                        <h2>{ name }</h2>
                        <p>This contains { cal } calories</p>
                    </div>
                    <div>
                        <img className='del-btn' src={deleteIcon} alt='img' onClick = { (e) => deleteItem(id) }/>
                    </div>
                </div>
            </>
        );
}
 
export default List;