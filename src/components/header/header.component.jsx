import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.style.scss'
import {HeaderContainer,LogoContainer,OptionsContainer,OptionDiv,OptionLink} from './header.styles'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
const Header = ({currentUser,hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className="logo"/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to = "/shop">Shop</OptionLink>
            <OptionLink to = "/shop">Contact</OptionLink>
            {
                currentUser?
                <OptionDiv onClick={()=>auth.signOut()}>Sign Out</OptionDiv>
                :<OptionLink to = "/signin" className="option">Sign In</OptionLink>

            }
            <CartIcon/>
        </OptionsContainer>
        {/* {!hidden && <CartDropdown/>} */}
        {hidden?null:<CartDropdown/>}
        </HeaderContainer>
)
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})
export default connect(mapStateToProps)(Header)