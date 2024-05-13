import { useState } from "react"
import "../../styles/questioItem.css"
import Arrow from "../../assets/icons/menu-arrow.icon"

export default function QuestionItem(props) {
    const { question, isOpen, onClick } = props;

    // No necesitas más el estado interno para rastrear si la pregunta está abierta o cerrada

    return (
        <div onClick={onClick} className={isOpen ? "questionItem open" : "questionItem"}>
            <div>
                <h1 class="question">
                    {question.question}
                </h1>

                <Arrow class={isOpen ? "icon open" : "icon"} />
            </div>

            {isOpen && (
                <span>
                    {question.answer}
                </span>
            )}

        </div>
    )
}
