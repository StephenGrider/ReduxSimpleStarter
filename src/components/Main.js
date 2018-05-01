import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userlist} from '../actions/index';
import { Link } from 'react-router-dom';

class Main extends Component{

  componentWillMount(){
    this.props.userlist();
  }
  list(val){
    const icons = val.symbol.toLowerCase();
    const llink = "https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/32/icon/";
    return(
      <div key ={val.name} >
      <Link to = {`/details/${val.id}`} >
          {val.symbol}
        <img height="32" width="32" src={llink + icons + ".png"} />
        </Link>

 </div>
    );
  }
  render(){
    return (
      <div className = "user-list">
        <h2> Users List </h2>
        {this.props.users.map(this.list)}
     </div>
    );
  }
}
function mapStateToProps(state){
return{
  users: state.users
}
}

export default connect(mapStateToProps, {userlist})(Main);


