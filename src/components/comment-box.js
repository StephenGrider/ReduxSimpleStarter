import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveComment } from '../actions'

class CommentBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comment: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({comment: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.saveComment(this.state.comment)
    this.setState({comment: ''})
  }

  render() {
    return (
      <form 
        onSubmit={this.handleSubmit}
        className="comment-box">
        <textarea 
          value={this.state.comment}
          onChange={this.handleChange} />
        <button action="submit">Submit Comment</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveComment: bindActionCreators(saveComment, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(CommentBox)
