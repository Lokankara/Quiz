import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizPage from './app/pages/QuizPage';
import QuestionPage from './app/pages/QuestionPage';
import ResultReviewPage from './app/pages/ResultReviewPage';
import ResultPage from './app/pages/ResultPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizPage />} />
        <Route path="/q/:id" element={<QuestionPage />} />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/review/:id" element={<ResultReviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}
