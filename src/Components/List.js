import React,{useState} from 'react';
import Item from './Item'
const List=({data})=>{
    const [items,setItem]=useState(data);
    const removeItem=(e)=>{
        setItem((prevItem)=>{
            return (
                prevItem.filter((item)=>{
                    return item.id!==Number(e.target.id)
                })
            )
        })
    }
    return (
        <main className='container'>
            {
                items.map((item)=>{
                    return (
                        <Item key={item.id} deleteItem={removeItem} {...item} />
                    )
                })
            }
        </main>
    )
}

export default List;