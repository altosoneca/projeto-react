import React, {useState } from "react";
import Main from './routes';


function App() {

  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  //   function requireAuth(nextState, replace){
  //   console.log("called"); // => Is not triggered at all 
  //   if (!isLoggedIn()) {
  //     replace({
  //       pathname: '/front'
  //     })
  //   }
  // }
  
  return (
    <div className="App">
      <Main/>
  </div>
  );
}

export default App;
