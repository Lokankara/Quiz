import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizPage from './app/pages/QuizPage';
import ResultPage from './app/pages/ResultPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizPage />} />
        <Route path="/results" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}
