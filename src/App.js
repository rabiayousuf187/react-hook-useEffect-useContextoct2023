// ******************* useContext Code

// import './App.css';
// import React, { createContext } from 'react';
// import User from './components/User';
// // import Navbar from './components/Navbar';

// export const UserContext = createContext();

// function App() {
//   let user = "Rabia";

//   return (
//     <UserContext.Provider value={user}>
//       {/* <Navbar/> */}
//       <User></User>
//     </UserContext.Provider>
//   );
// }

// export default App;


// ******************* End useContext Code


// ******************* useReducer Code
import './App.css';
import React from 'react';
import Todo from './components/Todo/Todo';

function App() {

  return (
    <div>
      <Todo></Todo>
    </div>
  );
}

export default App;
// ******************* End useReducer Code