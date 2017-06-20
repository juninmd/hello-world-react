import React, { Component } from 'react';
import batman from './batman.jpg';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={batman} className="App-logo" alt="logo" />
          <Welcome name={user.lastName}/>
        </div>
        <p className="App-spin">
         Tell me, do you bleed?  {formatName(user)}
        </p>
      </div>
    );
  }
}
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default About;
