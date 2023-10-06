import React, { useState } from "react";
import "./BlogsDetail.css";

const QuestionAnswer = () => {
  const [loop, setLoop] = useState(1);
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setLoop(loop + 1);
  };

  const handleInputChange = (index, e) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][e.target.name] = e.target.value;
    setQuestions(updatedQuestions);
  };

  return (
    <div className="questionAnswer">
      <div className="box">
        {Array.from({ length: loop }).map((_, index) => (
          <form key={index} action="">
            <label htmlFor={`question-${index}`} className="red">
              Question
            </label>
            <input
              type="text"
              name={`question-${index}`}
              placeholder="What is your name?"
              onChange={(e) => handleInputChange(index, e)}
            />

            <label htmlFor={`answer-${index}`} className="yellow">
              Correct Answer
            </label>
            <input
              type="text"
              name={`answer-${index}`}
              placeholder="Single line answer for above question"
              onChange={(e) => handleInputChange(index, e)}
            />
          </form>
        ))}
        <div className="btns">
          <button onClick={addQuestion}>Add More</button>
          <button>Publish</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;

// import React, { useState } from "react";
// import "./BlogsDetail.css";

// const QuestionAnswer = () => {
//   const [loop, setLoop] = useState(1);
//   return (
//     <div className="questionAnswer">
//       <div className="box">
//         <form action="">
//           <label htmlFor="" className="red">
//             Question
//           </label>
//           <input type="text" placeholder="What is your name?" />

//           <label htmlFor="" className="yellow">
//             Correct Answer
//           </label>
//           <input
//             type="text"
//             placeholder="Single line answer for above question"
//           />
//         </form>

//         <div className="btns">
//           <button>Add More</button>
//           <button>Publish</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionAnswer;
