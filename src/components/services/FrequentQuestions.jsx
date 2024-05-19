import { useEffect, useState } from "react"
import QuestionItem from "./QuestionItem.jsx"
import "../../styles/FrequentQuestions.css"
import staticData from "../../static.js";

export default function FrequentQuestions() {
    const [openQuestionId, setOpenQuestionId] = useState(null);

    const [general, setGeneral] = useState(staticData.generalQuestions.map((item, index) => ({ id: index + 1, ...item })));


    const handleQuestionClick = (id) => {
        setOpenQuestionId(openQuestionId === id ? null : id);
    }

    return (
        <div className="frequentQuestions">

            <h1 className="title">Frequently asked questions</h1>
            {
                general.map((question, index) => (
                    <QuestionItem
                        key={question.id}
                        question={question}
                        isOpen={question.id === openQuestionId}
                        onClick={() => handleQuestionClick(question.id)}
                    />
                ))
            }



        </div>
    )
}
