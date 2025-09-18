import React from "react";
import { Outlet } from "react-router";
import ProfileCard from "../components/ProfileCard";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] py-6 md:py-8 md:px-10">
      <Header />

      <div className="flex flex-col items-center md:flex-row md:items-start md:justify-start gap-6 mt-6">
        <div className="w-full max-w-xs md:w-auto">
          <ProfileCard />
        </div>

        <main
          className="
          w-full md:flex-1 px-4 md:px-10 
          pb-10 md:pb-0
        "
        >
          <Outlet />
        </main>

        <div className="w-full max-w-xs md:w-auto flex md:flex-col justify-center mt-4 md:mt-0">
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
