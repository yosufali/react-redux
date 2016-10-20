// This component handles the App template used on every page.
import React, {PropTypes} from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <p> Header here ... </p>
        {this.props.children}
      </div>
    );
  }
}

App.PropTypea = {
  children: PropTypes.object.isRequred
};

export default App;
