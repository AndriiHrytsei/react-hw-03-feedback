import React, { Component } from "react";
import Stats from "../Stats/Stats"
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions"
import Section from "components/Section/Section";


export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  addPositiveFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }))
  }
  addNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }))
  }
  addNegativeFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }))
  }
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round(100 * this.state.good / this.countTotalFeedback())
  }
  render(){
    const { good, neutral, bad } = this.state
    const feedback = {
      good: this.addPositiveFeedback,
      neutral: this.addNeutralFeedback,
      bad: this.addNegativeFeedback
    }
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={feedback}/>
          <Stats good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
        </Section>
      </>
    )
  }
}