import AddUsers from "./components/AddUsers";
import AllUsers from "./components/AllUsers";
import CodeforInterview from "./components/CodeforInterview";
import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CodeforInterview />} />
          <Route path="/all" element={<AllUsers />} />
          <Route path="/add" element={<AddUsers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
