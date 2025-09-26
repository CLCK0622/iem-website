import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer className="flex justify-center items-end h-[500px] bg-black text-white p-10">
        <span>Copyright IEM @2025</span>
      </footer>
    </>
  );
}

export default Layout;
