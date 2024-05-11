import Header from './Header'
import Main from './Mains'
import Loader from './Loader'
import Error from './Error'
import StartScreen from './StartScreen'
import Question from './Question'
import NextButton from './NextButton'
import Progress from './Progress'
import FinishedScreen from './FinishedScreen'
import Footer from './Footer'
import Timer from './Timer'
import { useQuiz } from '../contexts/QuizContext'


export default function App() {
  const {questions, status, index, answer, points, highscore, secondsRemaining, numQuestions, maxPossiblePoints, dispatch} = useQuiz();
  
  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
        {status === 'active' && (
          <>
            <Progress 
              index={index} 
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question 
              question={questions[index]} 
              dispatch={dispatch} 
              answer={answer} 
              points={points}
            />
            <Footer>
              <Timer
                dispatch={dispatch}
                secondsRemaining={secondsRemaining}
              />

              <NextButton
                dispatch={dispatch}
                answer={answer}
                points={points}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}
        {status === 'finish' && (
          <FinishedScreen 
            points={points} 
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  )
}


