import "./App.css";
import Input from "./components/Input";
import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { Comment } from "./pages/Comment";
import { About } from "./pages/About";
import { Funstuff } from "./pages/Funstuff";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const [username, setUsername] = useState("Yue Ying");
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{ username, setUsername }}>
          <Router>
            <div>
              <Link to="/"> Home </Link>
              <Link to="/comment"> Comment </Link>
              <Link to="/about"> About </Link>
              <Link to="/funstuff"> Fun stuff </Link>
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/comment" element={<Comment />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<h1>Page not found</h1>} />
              <Route path="/funstuff" element={<Funstuff />} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
      <Input />
    </div>
  );
}

export default App;
