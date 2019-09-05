import React from 'react';
// import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import {auth} from './firebase/firebase.utils';//use brakets :)

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
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ currentUser: user})
        console.log(this.state);
      } else {
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