// this component setCurrentUser by using redux

import React from 'react';
import './App.css';

import Header from './components/header/header.component';
import {auth, createUserDocumentInFireStore} from './firebase/firebase.utils';//use brakets :)
import { setCurrentUser } from './redux/user/user-actions';

import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount(){
    const { setCurrentUser } = this.props;
    auth.onAuthStateChanged(async (userAuth) => {
      // console.log(userAuth);//obj rcvd frm onAuthStateChanged
      if(userAuth){   //if we are loggedIn and the return object is not null
        const userRef = await createUserDocumentInFireStore(userAuth);    //create user in firestore collection
        userRef.onSnapshot(snapShot =>{    //snapshot holds ID and snapShot.data() gives us the data
          setCurrentUser({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          });
        }) 
      }else{
        setCurrentUser(userAuth);
        console.log("No user is signed in");
      }
    });
  }

  // unSunscribeUser = null; //does not make any sense
  // componentWillUnmount(){
  //   this.unSunscribeUser();
  // }

  render(){
    return (
      <div>
        <Header handleSignOutState={this.handleSignOutState}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);



/*<BrowserRouter >
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
</BrowserRouter >*/