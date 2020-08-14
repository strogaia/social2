import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {getAuthUserData} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  
  componentDidMount(){
    this.props.getAuthUserData();
  }
  
  render() {
    return <Header{...this.props}/>
  }
}

const mapSateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});
export default connect(mapSateToProps, {getAuthUserData}) (HeaderContainer);