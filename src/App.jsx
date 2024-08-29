import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./index.css";

function App() {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div class="flex">
        <aside class="h-screen fixed top-0 w-64 bg-gray-200">
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
