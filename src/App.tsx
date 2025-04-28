import { useState } from "react";
import { SurveyState } from "./types/surveyTypes";
import SurveyPage from "./components/SurveyPage";
import { surveyData } from "./surveyData";
import FinishPage from "./components/FinishPage";

const App = () => {
    const [surveyState, setSurveyState] = useState<SurveyState>({
        currentQuestionIndex: 0,
        answers: {},
    });

    const handleAnswerChange = (
        questionId: string,
        answer: string | string[]
    ) => {
        setSurveyState((prev) => ({
            ...prev,
            answers: {
                ...prev.answers,
                [questionId]: answer,
            },
        }));
    };

    const handleNext = () => {
        setSurveyState((prev) => ({
            ...prev,
            currentQuestionIndex: prev.currentQuestionIndex + 1,
        }));
    };

    const handlePrevious = () => {
        if (surveyState.currentQuestionIndex > 0) {
            setSurveyState((prev) => ({
                ...prev,
                currentQuestionIndex: prev.currentQuestionIndex - 1,
            }));
        }
    };

    return (
        <div className="app">
            {surveyState.currentQuestionIndex < surveyData.questions.length ? (
                <SurveyPage
                    survey={surveyData}
                    surveyState={surveyState}
                    onAnswerChange={handleAnswerChange}
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                />
            ) : (
                <FinishPage />
            )}
        </div>
    );
};

export default App;
