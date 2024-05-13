import { useEffect, useState } from "react"
import QuestionItem from "./QuestionItem.jsx"
import "../../styles/FrequentQuestions.css"

export default function FrequentQuestions() {
    // State para rastrear la pregunta actualmente abierta
    const [openQuestionId, setOpenQuestionId] = useState(null);

    const [general, setGeneral] = useState([
        {
            question: "What services do you provide?",
            answer: "We provide a full range of construction services, we specializes in concrete restoration, home additions, and apartment renovations."
        },
        {
            question: "What areas do you serve?",
            answer: "Maros Construction proudly serves the vibrant communities of South Florida, including Miami-Dade County, Broward County, and West Palm Beach"
        },
        {
            question: "What types of materials do you use?",
            answer: "We use high-quality materials for all of our projects, including wood, metal, and stone."
        },
        {
            question: "Do you offer financing options?",
            answer: "Yes, we offer several financing options for our clients."
        },
        {
            question: "Do you provide warranties?",
            answer: "Yes, we provide a limited warranty on all of our projects."
        },
        {
            question: "Do you offer design services?",
            answer: "Yes, we have a team of experienced designers who can help you create the perfect space."
        },
        {
            question: "What is your timeline for completing projects?",
            answer: "We strive to complete all projects within the agreed-upon timeline."
        },
        {
            question: "Are your contractors insured?",
            answer: "Yes, all of our contractors are fully insured and bonded.  "
        }
    ].map((item, index) => ({ id: index + 1, ...item })));

    useEffect(() => {
        console.log(general)
    }, [])

    // Función para manejar el clic en una pregunta
    const handleQuestionClick = (id) => {
        setOpenQuestionId(openQuestionId === id ? null : id); // Si la pregunta ya está abierta, ciérrala, de lo contrario, ábrela.
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
