import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Statistics = ({good, neutral, bad}) => {
  return (
    <>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={good + neutral + bad} />
      <Statistic text="average" value={(good - bad)/(good + neutral + bad)} />
      <Statistic text="positive" value={''.concat((good/(good + neutral + bad) * 100), ' %')} />
    </>
  );
}

const Statistic = ({text, value}) => {
  return (
    <p>{text} {value}</p>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
       <h1>give feedback</h1>
       <Button onClick={() => setGood(good + 1)} text="good" />
       <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
       <Button onClick={() => setBad(bad + 1)} text="bad" />

      <h1>statistics</h1>
      {(good || neutral || bad ) 
        ? <Statistics good={good} neutral={neutral} bad={bad} />
        : <div> No feedback given </div> 
      }
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
