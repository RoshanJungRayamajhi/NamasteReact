import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { FaImage } from "react-icons/fa6";
import { auth } from "../utilis/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import appstore from "../utilis/store";
import { adduser, removeuser } from "../utilis/userSlice";
import { ImgUrl, language } from "../utilis/constant";
import { tooglegptsearchview } from "../utilis/GptSlice";
import { addlanguages } from "../utilis/languageSlice";

const Browseheader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showgpt, setshowgpt] = useState(false);
  const user = useSelector((store) => store.user);
 
  const changehandlerforselect = (e) => {
    dispatch(addlanguages(e.target.value));
  };

  const handlesgptsearch = () => {
    dispatch(tooglegptsearchview());
  };
  const gptresult = useSelector((store) => store.Gpt.showGptsearch);

  const handlesinout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          adduser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        dispatch(removeuser());
        navigate("/");
        // User is signed out
        // ...
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      <div className="h-fit fixed z-[99999] md:z-[999] top-0 left-0 w-full  md:h-[15vh] bg-gradient-to-b from-black flex flex-col  md:flex-row items-center md:justify-between flex-shrink-0 p-4 overflow-hidden bg-white">
        <img src={ImgUrl} alt="netflix logo" className="w-24 sm:w-40"></img>
        <div className=" flex items-center gap-8">
          <button
            onClick={handlesgptsearch}
            className={`px-3 py-2 ${
              gptresult ? "bg-green-300" : "bg-purple-400"
            } text-white`}
          >
            {gptresult ? "Homepage" : "GPT search"}
          </button>
          {gptresult && (
            <select
              className=" rounded-md p-2"
              onChange={changehandlerforselect}
            >
              {language.map((Langauge, i) => (
                <option key={i} value={Langauge.identifier}>
                  {Langauge.name}
                </option>
              ))}
            </select>
          )}
          {!gptresult &&( <> { user && (
            <>
              {" "}
              <h3 className=" text-xl text-white hidden md:block ">{user.displayName}</h3>
              <img
                className="w-7 h-8 rounded-full  hidden md:block "
                src={user.photoURL}
                alt=""
              />
            </>
          )}
          <button
            onClick={handlesinout}
            className="px-3 py-2 bg-red-400 rounded-md "
          >
            Sin out
          </button></>)}
        </div>
      </div>
    </>
  );
};

export default Browseheader;
