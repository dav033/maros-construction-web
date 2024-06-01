import "../../../public/styles/questioItem.css";
import Arrow from "../../assets/icons/menu-arrow.icon";
import React from "react";

function QuestionItem({ question, isOpen, onClick }) {
  return (
    <div onClick={onClick} className={`questionItem ${isOpen ? "open" : ""}`}>
      <div>
        <h1 className="question">{question.question}</h1>
        <Arrow className={`icon ${isOpen ? "open" : ""}`} />
      </div>
      {isOpen && <span>{question.answer}</span>}
    </div>
  );
}

export default React.memo(QuestionItem);
