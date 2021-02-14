import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './directory.style.scss'
import MenuItem from '../menu-item/menu-item.component'
import {selectDirectorySections} from '../../redux/directory/directory.selectors'
// import { render } from '@testing-library/react'
const  Directory = ({sections}) => (
    <div className="directory-menu">
        {sections.map(({id,...otherprops})=>(
            <MenuItem key ={id} {...otherprops}/>
        ))}
    </div>
)
const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySections,
})
export default connect(mapStateToProps,null)(Directory)