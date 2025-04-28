import { Question } from "../types/surveyTypes";

interface QuestionProps {
    question: Question;
    selectedAnswers: string | string[];
    onAnswerChange: (answer: string | string[]) => void;
}

const QuestionComponent = ({
    question,
    selectedAnswers,
    onAnswerChange,
}: QuestionProps) => {
    const handleSingleSelect = (answerId: string) => {
        onAnswerChange(answerId);
    };

    const handleMultipleSelect = (answerId: string, isChecked: boolean) => {
        const currentAnswers = Array.isArray(selectedAnswers)
            ? selectedAnswers
            : [];

        const updatedAnswers = isChecked
            ? [...currentAnswers, answerId]
            : currentAnswers.filter((id) => id !== answerId);

        onAnswerChange(updatedAnswers);
    };
    
    return (
        <div className="question">
            <h2>{question.title}</h2>
            <div className="options">
                {question.options.map((option) => (
                    <div key={option.id} className="option">
                        {question.type === "single" ? (
                            <label>
                                <input
                                    type="radio"
                                    name={question.id}
                                    value={option.id}
                                    checked={selectedAnswers === option.id}
                                    onChange={() =>
                                        handleSingleSelect(option.id)
                                    }
                                />
                                {option.text}
                            </label>
                        ) : (
                            <label>
                                <input
                                    type="checkbox"
                                    name={question.id}
                                    value={option.id}
                                    checked={
                                        Array.isArray(selectedAnswers) &&
                                        selectedAnswers.includes(option.id)
                                    }
                                    onChange={(e) =>
                                        handleMultipleSelect(
                                            option.id,
                                            e.target.checked
                                        )
                                    }
                                />
                                {option.text}
                            </label>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestionComponent;
