import React, { Component } from 'react';
import './questioning.css';

class Questioning extends Component {
  answerText = function(question) {
    if (this.props.juror.answeredQuestions.includes(question.number)) {
      let juror =  this.props.juror.answers.filter(answer => {
        return answer.number === question.number
      })[0]
      return juror.text
    } else {
      return ""
    }
  }

  showAnswer = function(question) {
    if (this.props.juror.answeredQuestions.includes(question.number)) {
      return "answer"
    } else {
      return "hiddenQuestion"
    }
  }

  render() {
    return (
      <div className="root">
        <div className="questionPrompt">You are questioning <b>{this.props.juror.name}</b></div>

        <div className="flex">
          <img src={this.props.juror.picture} className="jurorPic"/>
          <ol className="questions">
          {this.props.questions.map((question, i) => (
            <li key={`question-${i}`} className="question"
            onClick={()=> this.props.answerQuestionCallback(question, this.props.juror)}>
            <div>{question.text}</div>
            <div className={this.showAnswer(question)}>{this.answerText(question)}</div>
            </li>
          ))}
          </ol>
        </div>

      </div>
    );
  }
}

export default Questioning;
