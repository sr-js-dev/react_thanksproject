import React from 'react';
import '../css/style.css'; 
import { connect } from 'react-redux';
import { Form,Row,Col, Button} from 'react-bootstrap';
import DatePicker from 'react-date-picker';
import { Link } from 'react-router-dom'
import {
  SETTINGS_SAVED
} from '../constants/actionTypes';

const mapStateToProps = state => ({
  ...state.settings,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onContacttext: item =>
    dispatch({ type: SETTINGS_SAVED, payload: item })
});
class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      value: {
        first: 'More than one',
        second: 'Non-mail',
        date:new Date()
      }
    }
  }
  onChange = date => {
    const valuestate = Object.assign({}, this.state.value)
    valuestate["date"]=date;
    this.setState({value: valuestate})
  }
  handleChange1(event){
    const valuestate = Object.assign({}, this.state.value)
    valuestate[event.target.name] = event.target.value
    this.setState({value: valuestate})
  }
  handleClickbutton(event){
    this.props.onContacttext(this.state.value)
  }
  render() {
    return (
      <div className="settings-page">
        <div className="container page">
              <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <p style={{marginTop:30,fontSize:20}}>Number of People</p> 
                        <fieldset>
                              <Form.Group as={Row}>
                                <Col sm={10}>
                                  <Form.Check
                                    type="radio"
                                    label="One"
                                    name="first"
                                    value="One"
                                    id="one"
                                    onChange={this.handleChange1.bind(this)}
                                  />
                                  <Form.Check
                                    type="radio"
                                    label="more"
                                    name="first"
                                    value="More than one"
                                    defaultChecked
                                    id="more"
                                    onChange={this.handleChange1.bind(this)}
                                  />
                                </Col>
                              </Form.Group>
                          </fieldset>
                          <p style={{marginTop:50}}>When are you submitting the claim</p>
                          <DatePicker
                            onChange={this.onChange}
                            value={this.state.value.date}
                          />
                    </div> 
                    <div className="col-md-6 col-xs-12">
                        <p style={{marginTop:30,fontSize:20}}>Type of mal</p> 
                        <fieldset>
                              <Form.Group as={Row}>
                                <Col sm={10}>
                                  <Form.Check
                                    type="radio"
                                    label="Mal"
                                    name="second"
                                    value="Mal"
                                    id="mal"
                                    onChange={this.handleChange1.bind(this)}
                                  />
                                  <Form.Check
                                    type="radio"
                                    label="Non mal"
                                    name="second"
                                    defaultChecked
                                    value="Non-mal"
                                    id="non"
                                    onChange={this.handleChange1.bind(this)}
                                  />
                                </Col>
                              </Form.Group>
                          </fieldset>
                    </div>
                    <div style={{padding:60,margin:"auto"}}>
                        <Link to="/text" params={{ testvalue: "sdfs" }}>
                          <Button onClick={this.handleClickbutton.bind(this)} variant="primary" size="lg" active>
                            View deadline
                          </Button>
                        </Link>
                    </div>
              </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);