import React from 'react'
import './collection-preview.style.scss'
import CollectionItem from '../collection-item/collection-item.component'
const PreViewCollection = ({title,items}) => {
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((ele,index)=>index<4).map((item)=>(
                <CollectionItem  key = {item.id} item = {item}/>))}
            </div>
        </div>
    )
}
export default PreViewCollection