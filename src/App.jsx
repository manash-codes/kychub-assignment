import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./index.css";

function App() {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <Navbar />
      <Sidebar />
    </>
  );
}

export default App;
