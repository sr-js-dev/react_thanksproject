import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Contact from '../components/Contact';
import Text from '../components/Text';

const mapStateToProps = state => {
  return {
  }};

const mapDispatchToProps = dispatch => ({
});

class App extends React.Component {
 
  render() {
      return (
            <div className="container">
                <h2 style={{marginTop:40}}>Loreum Ipsum</h2>
                <Switch>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/text" component={Text} />
                </Switch>
            </div>
      );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
