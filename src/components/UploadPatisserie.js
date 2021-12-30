import React, { useState } from "react";
import api from "../services/AuthApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
const UploadPatisserie = (props) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState();
  const [place, setPlace] = useState();
  const [description, setDescription] = useState();
  const [lien, setLien] = useState();
  const [data, setData] = useState();
  const onSubmit = async (event, restaurant) => {
    event.preventDefault();
    const token = localStorage.getItem("jwt");
    if (!description || !place || !name) {
      toast.error("Veuillez valider tous les champs", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    const imgData = new FormData();
    imgData.append("name", name);
    imgData.append("place", place);
    imgData.append("description", description);
    imgData.append("avatar", avatar);
    imgData.append("lien", lien);

    try {
      const response = await api.post(`/api/patisseries`, imgData);
      setData([response.data]);
      toast.success("La patisserie a été ajouté avec succès", {
        position: toast.POSITION.TOP_CENTER,
      });
      setTimeout(function () {
        window.location.reload(1);
      }, 5000);
    } catch (error) {
      //   console.log("ccc", error.response.data.message);
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <div>
      <form
        action="/uploadfile"
        enctype="multipart/form-data"
        className="update-container"
      >
        <div className="update-recette form-recette">
          <textarea
            className="textarea-form"
            name="name"
            type="text"
            rows="2"
            placeholder="Nom de la patisserie"
            onChange={(event) => {
              const { value } = event.target;
              setName(value);
            }}
          />
          <br />
          <textarea
            className="textarea-form"
            name="Description"
            type="text"
            maxLength="280"
            placeholder="description"
            rows="12"
            onChange={(event) => {
              const { value } = event.target;
              setDescription(value);
            }}
          />
          <br />
          <textarea
            className="textarea-form"
            name="place"
            type="text"
            placeholder="Place"
            rows="4"
            onChange={(event) => {
              const { value } = event.target;
              setPlace(value);
            }}
          />
          <br />
          <br />
          <textarea
            className="textarea-form"
            name="lien"
            type="text"
            placeholder="Lien"
            rows="4"
            onChange={(event) => {
              const { value } = event.target;
              setLien(value);
            }}
          />
          <br />
          <button onClick={onSubmit} type="submit">
            {" "}
            + Ajouter Patisserie
          </button>{" "}
        </div>
        <div className="profil-page">
          <div className="left-part">
            <input
              type="file"
              id="file-upload"
              name="file"
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadPatisserie;
