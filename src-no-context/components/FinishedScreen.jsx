import React from 'react'

export default function FinishedScreen({points, maxPossiblePoints, highscore, dispatch}) {
const percentage = Math.ceil((points/maxPossiblePoints) * 100)

  return (
    <>
      <p className='result'>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} ({percentage}%)
      </p>
      <p className="highscore">(HighScore: {highscore} points)</p>
      <button className='btn btn-ui' onClick={()=>dispatch({type: 'restart'})}>
        Restart quiz
      </button>
    </>
  )
}
