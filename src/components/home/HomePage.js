import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1> Pluralsight Administration </h1>
        <Link to="about" className="btn btn-primary btn-lg"> Learn more </Link>
        <p> React, Redux and React Router in ES6 for ultra-responsive web apps. </p>
      </div>
    );
  }
}

export default HomePage;
