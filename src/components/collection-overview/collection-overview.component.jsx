import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'


import './collection-overview.style.scss'
import PreViewCollection from '../collection-preview/collection-preview.component'

const CollectionsOverview = ({collections}) => {
    return(
    <div className="collections-overview">
        {collections.map(({id,...otherCollectionProps})=>
        <PreViewCollection key = {id} {...otherCollectionProps}/>
        )}
        
    </div>
)}
const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview)