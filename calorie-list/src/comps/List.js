import { useState } from 'react'
import deleteIcon from '../assets/delete.svg'
import editIcon from '../assets/edit.svg'
import saveIcon from '../assets/save.svg'

const List = ({ item, id, items, setItems }) => {
    
    const [isEditing, setIsEditing] = useState(false)
    const [editData, setEditData] = useState({
        name: item.name,
        calorie: item.calorie
    })

    const deleteItem = id => setItems(items.filter((item, idx) => idx !== id))
  
    const editItem = (e) => {
        const name = e.target.name
        const calorie = e.target.value
        setEditData(prevData => ({
            ...prevData,
            [name]: calorie
        }))
    }

    const saveItem = (e) => {
        const updatedItems = items.map((item, idx) => {
            if(idx === id) {
                return {
                    ...item,
                    name: editData.name,
                    calorie: editData.calorie
                }
            }
            else {
                return item
            }
        })
        setItems(updatedItems)
        setIsEditing(false)
    }

        return (
            <>
                <div className='cards'>
                    <div className='inputs'>
                        {isEditing ? (
                            <>
                                <input
                                    type='text'
                                    placeholder='Edit Food name'
                                    name='name'
                                    value= { editData.name }
                                    onChange={ editItem }
                                    required 
                                />
                                <input
                                    type='number'
                                    placeholder='Edit calorie count'
                                    name='calorie'
                                    value= { editData.calorie }
                                    onChange={ editItem }
                                    required
                                />  
                            </>
                        ) : (
                            <>
                                <h2 className='name'>{ item.name }</h2>
                                <p className='calorie'>This contains { item.calorie } calories</p>
                            </>
                        )}
                    </div>
                    <div className='icons'>
                        <img className='edit-btn' src={ editIcon } alt="editIcon" onClick = { e => setIsEditing(!isEditing) }/>
                        <img className='save-btn' src={ saveIcon } alt="saveIcon" onClick = { e => saveItem() }/>
                        <img className='del-btn' src={ deleteIcon } alt='deleteIcon' onClick = { e => deleteItem(id) }/>
                    </div>
                </div>
            </>
        );
}
 
export default List;