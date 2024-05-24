import { useState, useCallback } from "react";
import QuestionItem from "./QuestionItem.jsx";
import "../../../public/styles/FrequentQuestions.css";
import staticData from "../../../public/static";

export default function FrequentQuestions() {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const generalQuestions = staticData.generalQuestions.map((item, index) => ({
    id: index + 1,
    ...item,
  }));

  const handleQuestionClick = useCallback((id) => {
    setOpenQuestionId((prevId) => (prevId === id ? null : id));
  }, []);

  return (
    <div className="frequentQuestions">
      <h1 className="title">Frequently asked questions</h1>
      {generalQuestions.map((question) => (
        <QuestionItem
          key={question.id}
          question={question}
          isOpen={question.id === openQuestionId}
          onClick={() => handleQuestionClick(question.id)}
        />
      ))}
    </div>
  );
}
