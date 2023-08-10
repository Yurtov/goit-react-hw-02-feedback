import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { ButtonsList, Button } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  heandleBtnClick = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <p>Please leave feedback</p>

        <ButtonsList>
          <Button type="button" onClick={() => this.heandleBtnClick('bad')}>
            Bad
          </Button>
          <Button type="button" onClick={() => this.heandleBtnClick('neutral')}>
            Neutral
          </Button>
          <Button type="button" onClick={() => this.heandleBtnClick('good')}>
            Good
          </Button>
        </ButtonsList>
        <p>Statistics</p>
        <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
      
      </div>
    );
  }
}
