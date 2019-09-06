import React from 'react';
// import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import {auth, createUserDocumentInFireStore} from './firebase/firebase.utils';//use brakets :)
// import { async } from 'q';

// import HomePage from './pages/homepage/homepage.component';
// import ShopPage from './pages/shopPage/shopPage.component';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    }
  }
  
  componentDidMount(){
    auth.onAuthStateChanged(async (userAuth) => {
      // console.log(userAuth);//obj rcvd frm onAuthChanged
      if(userAuth){   //if we are loggedIn and the return object is not null
        const userRef = await createUserDocumentInFireStore(userAuth);    //create user in firestore collection
        userRef.onSnapshot(snapShot =>{    //snapshot holds ID and snapShot.data() gives us the data
          this.setState({   //set user in the app + this.setState is asyn fun sometimes it takes time to update
            currentUser:{                                   //we  are using callback to check updated state
              id:snapShot.id,
              ...snapShot.data()
            }
          },()=>{
            console.log(this.state)
          });
        }) 
      }else{
        this.setState({currentUser:null});
        console.log("No user is signed in");
      }
    });
  }

  // unSunscribeUser = null; //does not make any sense
  // componentWillUnmount(){
  //   this.unSunscribeUser();
  // }

  handleSignOutState = ()=>{//byself... may cause error in future
    auth.signOut();
    this.setState({currentUser:null});
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} handleSignOutState={this.handleSignOutState}/>
      </div>
    );
  }
}

export default App;

/*<BrowserRouter >
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
</BrowserRouter >*/