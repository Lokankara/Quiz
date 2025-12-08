import { BrowserRouter, useRoutes } from 'react-router-dom';
import QuizPage from './app/pages/QuizPage';
import { RestartPage } from './app/pages/RestartPage';
import { ResultPage } from './app/pages/ResultPage';
import { StatisticsPage } from './app/pages/StatisticsPage';

export default function App() {
  return (
    <BrowserRouter>
       <AppRoutes />
    </BrowserRouter>
  );
}

export function AppRoutes() {
  let routes = useRoutes([
    { path: "/", element: <QuizPage /> },
    { path: "/results", element: <ResultPage /> },
    { path: "/restart", element: <RestartPage /> },
    { path: "/statistics", element: <StatisticsPage /> },
  ]);
  return routes;
}
