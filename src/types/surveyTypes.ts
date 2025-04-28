export type AnswerOption = {
    id: string;
    text: string;
  };
  
  export type QuestionType = 'single' | 'multiple';
  
  export type Question = {
    id: string;
    title: string;
    type: QuestionType;
    options: AnswerOption[];
  };
  
  export type Survey = {
    title: string;
    questions: Question[];
  };
  
  export type SurveyState = {
    currentQuestionIndex: number;
    answers: Record<string, string | string[]>;
  };