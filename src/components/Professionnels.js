import React from "react";
import UploadPatisserie from "./UploadPatisserie";
import UploadRestaurant from "./UploadRestaurant";

const Professionnels = () => {
  return (
    <div className="profil-page professionnel-componnent">
      <h1> Veuillez entrer votre établissement sans gluten 💕</h1>
      <div className="add-etablissement">
        <h2 value="restaurant">Mettez vos restaurants sans gluten en ligne</h2>
        <img src="./img/RESTO.webp" />
        <UploadRestaurant />
        <h2 value="patisserie"> Mettez vos patisseries sans gluten en ligne</h2>
        <img src="./img/pat.webp" />
        <UploadPatisserie />
      </div>
    </div>
  );
};

export default Professionnels;
