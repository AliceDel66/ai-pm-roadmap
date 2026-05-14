import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { GlossaryPage } from "./pages/GlossaryPage";
import { HomePage } from "./pages/HomePage";
import { LearnHome } from "./pages/LearnHome";
import { LessonDetail } from "./pages/LessonDetail";
import { ProjectDetail } from "./pages/ProjectDetail";
import { SearchPage } from "./pages/SearchPage";
import { StageDetail } from "./pages/StageDetail";
import { TemplatesPage } from "./pages/TemplatesPage";

function App() {
  const [darkMode, setDarkMode] = useState(() => window.localStorage.getItem("ai-pm-roadmap-theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem("ai-pm-roadmap-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((value) => !value)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn" element={<LearnHome />} />
        <Route path="/learn/:stageSlug" element={<StageDetail />} />
        <Route path="/learn/:stageSlug/:lessonSlug" element={<LessonDetail />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/templates/:templateSlug" element={<TemplatesPage />} />
        <Route path="/glossary" element={<GlossaryPage />} />
        <Route path="/glossary/:termSlug" element={<GlossaryPage />} />
        <Route path="/projects/:projectSlug" element={<ProjectDetail />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
