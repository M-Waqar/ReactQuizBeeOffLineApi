import React from 'react';

function Result({ score, total, replay }) {
    return (
        <div className="score-board">
            <div className="score">
                You Scored { score } Out Of {total}
            </div>

            <button className="playBtn" onClick={replay}>Replay</button>
        </div>
    )
}

export default Result;
