import React from 'react'
import { Component } from 'react'

import CommentBox from './comment-box'
import CommentList from './comment-list'

export default class App extends Component {
  render() {
    return (
      <div>
        <CommentBox />
        <CommentList />
      </div>
    )
  }
}
