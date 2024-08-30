import Navbar from "./components/Navbar";
import ProductCompare from "./components/ProductCompare";
import ProductDetails from "./components/ProductDetails";
import Sidebar from "./components/Sidebar";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div class="flex">
          <aside class="h-screen fixed top-0 w-64 bg-gray-200 dark:bg-gray-800 dark:text-white">
            <Sidebar />
          </aside>
          <main className="w-full">
            <Navbar />
            <Routes>
              <Route path="/" element={<ProductDetails />} />
              <Route path="/product-compare" element={<ProductCompare />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
