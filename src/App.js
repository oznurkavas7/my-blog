import AboutPage from './AboutPage';
import BlogPage from './BlogPage';
import BlogMorePage from './BlogMorePage';
import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<AboutPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/blog" element={<BlogPage  />}></Route>
          <Route path="/blogmore/:id" element={<BlogMorePage />}></Route>
      </Routes>
      </Router>
    </GlobalProvider>
  );

}

export default App;
