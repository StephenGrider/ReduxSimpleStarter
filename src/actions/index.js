export const FETCH_QUESTIONS = "fetch_questions";

//fetch all of the questions for the harry potter quiz
export function fetchQuestions(){
  return {
    type: FETCH_QUESTIONS
  };
}
