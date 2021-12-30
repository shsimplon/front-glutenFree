import React, { useContext } from "react";
import Footer from "../components/Footer/Footer";
import Professionnels from "../components/Professionnels";
// import Auth from "../context/Auth";
import Profil from "./Profil";

const Professionnel = () => {
  //   const { isAuthenticated } = useContext(Auth);

  return (
    <div className="professionnel-page">
      {/* {isAuthenticated ? <Professionnels /> : <Profil />} */}
      <Professionnels />

      <Footer />
    </div>
  );
};

export default Professionnel;
