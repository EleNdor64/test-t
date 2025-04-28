import { Survey, SurveyState } from "../types/surveyTypes";
import Question from "./Question";
import SurveyControls from "./SurveyControls";

interface SurveyPageProps {
    survey: Survey;
    surveyState: SurveyState;
    onAnswerChange: (questionId: string, answer: string | string[]) => void;
    onNext: () => void;
    onPrevious?: () => void;
}

const SurveyPage = ({
    survey,
    surveyState,
    onAnswerChange,
    onNext,
    onPrevious,
}: SurveyPageProps) => {
    const currentQuestion = survey.questions[surveyState.currentQuestionIndex];
    const isLastQuestion =
        surveyState.currentQuestionIndex === survey.questions.length - 1;
    const selectedAnswers =
        surveyState.answers[currentQuestion.id] ||
        (currentQuestion.type === "single" ? "" : []);

    return (
        <div className="survey-page">
            <h1>{survey.title}</h1>

            <Question
                question={currentQuestion}
                selectedAnswers={selectedAnswers}
                onAnswerChange={(answer) =>
                    onAnswerChange(currentQuestion.id, answer)
                }
            />

            <SurveyControls
                currentQuestion={surveyState.currentQuestionIndex + 1}
                totalQuestions={survey.questions.length}
                onNext={onNext}
                onPrevious={onPrevious}
                isLastQuestion={isLastQuestion}
                selectedAnswers={selectedAnswers}
            />
        </div>
    );
};

export default SurveyPage;
