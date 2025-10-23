import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import Loader from "../components/Loader";

const Root = () => {
  return (
    <div className="">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Suspense fallback={<Loader></Loader>}>
          <Outlet></Outlet>
        </Suspense>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <Toaster />
    </div>
  );
};

export default Root;
