import React, { Component } from 'react';


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Ashok Reddy',
  lastName: 'Penamalli'
};




class App extends Component {
  render() {
  
      
    return (
      <div >
        <h1>
    Hello, {formatName(user)}!
  </h1>
      </div>
    );
  }
}

export default App;
