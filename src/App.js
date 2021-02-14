import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import {Route,Switch,Redirect} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'
import { selectCurrentUser } from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect'
import Checkout from './pages/checkout/checkout.component'
class App extends React.Component{
  // constructor(){
  //   super()
  //   this.state = {
  //     currentUser:null
  //   }
  // }
  unsuscribrFromAuth = null;
  componentDidMount(){
    this.unsuscribrFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot( snapShot=>{
          this.props.setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          })
        })
        }
          this.props.setCurrentUser(userAuth)
      })
        
  }
  componentWillUnmount(){
    this.unsuscribrFromAuth();
  }
  render(){
    return(
      <div>
      <Header/>
      <Switch>
      <Route exact path = '/' component = {Homepage} />
      <Route path='/shop' component={ShopPage}/>
      <Route path='/checkout' component={Checkout} />
    <Route path='/signin' render={()=>this.props.currentUser?<Redirect to="/"/>:<SignInAndSignUpPage/> }/>
      </Switch>
      </div>
    )
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
