import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop_page/shop_page.component';
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import Header from './component/header/header.component';
import { auth, createUserProfile} from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super()


      this.state = {
        currentuser : null
      }
    
  }

  unSubscribeFromAuth = null;

  componentDidMount (){
   this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

    if(userAuth){
      const ref = await createUserProfile(userAuth)


        console.log(ref.data())

      if (ref.exists()) {
        this.setState({
          currentuser:{
          id: ref.id,
          ...ref.data()}
        })
      }
    }else{
      this.setState({currentuser: userAuth})
    }
  
    }) 
  }


  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }

  render(){
    return (
    
      <div>
       
      <Router>
      <Header currentuser={this.state.currentuser}/>
      <Routes>
        <Route path='/'
        element={<HomePage /> } 
        />
        <Route path='/shop' 
       element={<ShopPage/>} />
       <Route path='/signin' 
       element={<SignInAndSignOut/>} />
      </Routes>
    </Router>
      </div>
    );

  }
}

export default App;