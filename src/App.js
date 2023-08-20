import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/agiletransformation" element={<Transformation />} />
        <Route path="/agilecoaching" element={<Coaching />} />
        <Route path="/agiletraining" element={<Training />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/scrumquiz" element={<AgileQuiz />} />
        <Route path="/agilequizpage" element={<AgileQuizPage />} />
        <Route path="/quizpage" element={<QuizPage />} /> */}
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
