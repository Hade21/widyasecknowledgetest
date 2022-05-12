import React from "react";
import { useSelector } from "react-redux";
import Body from "../../components/body";
import Header from "../../components/header";

const Home = () => {
  const authUser = useSelector((state) => state.register.setAuth);
  return (
    <section className="relative">
      <Header />
      <div className="body absolute top-20 bg-web-sec bg-cover bg-fixed w-full">
        <span className="px-20 py-52 text-6xl bg-slate-900 bg-opacity-70 font-righteous font-bold text-white text-left flex">
          <span className="w-2/5"></span>
          <span className="w-3/5 flex flex-col">
            <span className=" text-3xl font-merriewether">
              Selamat Datang di
            </span>
            <span>
              <span className="text-blue-500">widya</span>{" "}
              <span className="text-red-500">SECURITY</span>
            </span>
            <span className="font-commisioner text-2xl font-medium">
              Feel Safe with us
            </span>
          </span>
        </span>
        {authUser ? <Body /> : null}
      </div>
    </section>
  );
};

export default Home;
