import React, {useState, useEffect} from 'react';
import './App.css';
import Quiz from './Quiz';
import QueService from './quizservice/index';
import Result from './Result';


function App() {
  const [queList, setqueList] = useState([]);
  const [response,setResponse] = useState(0);
  const [score,setScore] = useState(0);

  useEffect(() => {
    getQuestions();
  }, [])

  const getQuestions = () => {
    QueService().then((list) => {
      setqueList(list);
    });
  }

  const replay = () => {
    getQuestions();
    setScore(0);
    setResponse(0);
  }

  const ansClick = (ans,correct) => {
    if(ans === correct){
      setScore(prev => prev + 1);
    }

    setResponse(resp => resp + 1);
  }

  return (
    <div className="container">
      <header className="title">
        Quiz App React
      </header>
      {
        response < queList.length
        ?
          queList.length > 0 && 
          queList.map((question) => {
            return (
              <Quiz key={question.questionId} item={question} selected={ansClick} />
            )
          })
        :
        <Result score={score} total={queList.length} replay={() => {replay()}} />
      }
    </div>
  );
}

export default App;
