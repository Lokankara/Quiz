import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizPage from './app/pages/QuizPage';
import { RestartPage } from './app/pages/RestartPage';
import { ResultPage } from './app/pages/ResultPage';
import { StatisticsPage } from './app/pages/StatisticsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizPage />} />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/restart" element={<RestartPage />} />
      </Routes>
    </BrowserRouter>
  );
}
