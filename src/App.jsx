import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./index.css";

function App() {
  return (
    <>
      <div class="flex">
        <aside class="h-screen fixed top-0 w-64 bg-gray-200 dark:bg-gray-800 dark:text-white">
          <Sidebar />
        </aside>
        <main className="w-full">
          <Navbar />
        </main>
      </div>
    </>
  );
}

export default App;
