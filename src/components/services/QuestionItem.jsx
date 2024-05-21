import { useState } from "react"
import "../../styles/questioItem.css"
import Arrow from "../../assets/icons/menu-arrow.icon"

export default function QuestionItem(props) {
    const { question, isOpen, onClick } = props;

    return (
        <div onClick={onClick} className={isOpen ? "questionItem open" : "questionItem"}>
            <div>
                <h1 className="question">
                    {question.question}
                </h1>

                <Arrow className={isOpen ? "icon open" : "icon"} />
            </div>

            {isOpen && (
                <span>
                    {question.answer}
                </span>
            )}

        </div>
    )
}
