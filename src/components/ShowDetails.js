import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {showdetails} from '../actions/index';

class ShowDetails extends Component{
  
    

  render(){
    const {coins} = this.props
    const { details } = this.props;
      console.log(details[0])
    return (  
      <div>
      <Link to = "/" >
      Back
      </Link>

      <h2> gr </h2> 
    </div>
    );
  }
}
function mapStateToProps({users}){
  return {
    details: users
  }
}

export default connect(mapStateToProps,{showdetails} )(ShowDetails);