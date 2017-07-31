import React, { Component } from 'react';
import TitleBar from './title_bar';
import QuestionArea from '../container/question_area'

export default class Home extends Component {
  render() {
    return (
      <div>
        <TitleBar />
        <QuestionArea />
      </div>
    );
  }
}
