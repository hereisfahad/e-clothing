// this component setCurrentUser by using contextApi
import React from "react";

import Header from "./components/header/header.component";
import { auth, createUserDocumentInFireStore } from "./firebase/firebase.utils"; //use brakets :)

import UserContext from "./context/user/user.context";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    // const { setCurrentUser } = this.props;
    auth.onAuthStateChanged(async userAuth => {
      // console.log(userAuth);//obj rcvd frm onAuthStateChanged
      if (userAuth) {
        //if we are loggedIn and the return object is not null
        const userRef = await createUserDocumentInFireStore(userAuth); //create user in firestore collection
        userRef.onSnapshot(snapShot => {
          //snapshot holds ID and snapShot.data() gives us the data
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
        console.log("No user is signed in");
      }
    });
  }

  // unSunscribeUser = null; //does not make any sense
  // componentWillUnmount(){
  //   this.unSunscribeUser();
  // }

  render() {
    return (
      <div>
        <UserContext.Provider value={this.state.currentUser}>
          <Header />
        </UserContext.Provider>
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
