import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import {
  IMG_Logo,
  LOGOUT_Image,
  SUPPORTED_LANGUAGES,
} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

export default function Header() {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        // navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user.uid;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className=" flex absolute px-8 py-2 z-30 bg-gradient-to-b from-black w-full justify-between">
      <img className="w-44" src={IMG_Logo} alt="Logo" />
      {user && (
        <div className="flex p-2">
          {showGptSearch ? (
            <select
              className="m-4 p-3 bg-gray-800 text-white rounded-md"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          ) : (
            " "
          )}
          <button
            className="m-4 p-2 bg-purple-800 text-white rounded-lg "
            onClick={handleGPTSearch}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img className="w-12 h-12" src={LOGOUT_Image} alt="user icon" />
          <button className=" text-white h-10 my-4" onClick={logoutUser}>
            (Signout)
          </button>
        </div>
      )}
    </div>
  );
}
