import React from "react";
import { Outlet } from "react-router";
import ProfileCard from "../components/ProfileCard";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-[#FEF6DD] dark:bg-[#1E1E1E] dark:text-white text-black px-10 py-6">
      <Header />
      <div className="flex flex-1">
        <ProfileCard />
        <main className="flex-1 px-10">
          <Outlet />
        </main>
        <NavBar />
      </div>
    </div>
  );
};

export default AppLayout;
