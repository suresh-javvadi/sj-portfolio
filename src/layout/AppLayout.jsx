import React from "react";
import { Outlet } from "react-router";
import ProfileCard from "../components/ProfileCard";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] py-8 px-10">
      <Header />
      <div className="flex flex-1">
        <ProfileCard />
        <main className="flex-1 px-10">
          <Outlet />
        </main>
        <main className="flex items-center">
          <NavBar />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
