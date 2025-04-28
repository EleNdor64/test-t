import ProgressBar from "./ProgressBar";

interface SurveyControlsProps {
    currentQuestion: number;
    totalQuestions: number;
    onNext: () => void;
    onPrevious?: () => void;
    isLastQuestion: boolean;
    selectedAnswers: string | string[];
}

const SurveyControls = ({
    currentQuestion,
    totalQuestions,
    onNext,
    onPrevious,
    isLastQuestion,
    selectedAnswers,
}: SurveyControlsProps) => {
    return (
        <div className="survey-controls">
            <ProgressBar current={currentQuestion} total={totalQuestions} />
            <div className="buttons">
                {onPrevious && currentQuestion > 0 && (
                    <button onClick={onPrevious}>Назад</button>
                )}
                <button
                    onClick={onNext}
                    disabled={selectedAnswers.length === 0}
                >
                    {isLastQuestion ? "Завершить" : "Далее"}
                </button>
            </div>
        </div>
    );
};

export default SurveyControls;
