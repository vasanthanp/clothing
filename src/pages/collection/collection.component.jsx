import React from 'react'
import {connect} from 'react-redux'

import './collection.style.scss'
import {selectCollection} from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'
const CollectionPage = ({collection}) => {
    const {title,items} = collection
    return(
    <div className='collection-page'>
        <div className='title'>{title}</div>
    <div className='items'>
        {items.map(item=><CollectionItem key={item.id} item={item}/>)}
    </div>
    </div>
)}
const mapStateToProps = (state,ownprops) =>({
    collection:selectCollection(ownprops.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage)