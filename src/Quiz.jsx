import React, {useState} from 'react';

function Quiz({ item, selected }) {
    const [selectAns, setselectAns] = useState(item.answers);
    return (
        <div className="questionBox">
            <div className="question">
                { item.question }
            </div>
            {
                selectAns.map((ans, index) => {
                    return (
                        <button onClick={() => {
                            setselectAns([ans]);
                            selected(ans, item.correct);
                        }} 
                        className="answerBtn" key={index}>
                            { ans }
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Quiz;
