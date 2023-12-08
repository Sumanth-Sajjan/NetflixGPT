import React, { useRef, useState } from "react";
import Header from "./Header";
import { loginValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isError, setIsError] = useState(null);
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();
  const name = useRef();

  const handleValidation = () => {
    const message = isSignIn
      ? loginValidation(
          email.current.value,
          password.current.value,
          null,
          isSignIn
        )
      : loginValidation(
          email.current.value,
          password.current.value,
          name.current.value,
          isSignIn
        );
    setIsError(message);
    if (message) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3Duser&psig=AOvVaw2w9JQZXVo_06LBBaQTtWUc&ust=1702028000169000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICT1sWC_YIDFQAAAAAdAAAAABAD",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/browse");
            })
            .catch((error) => {
              setIsError(error);
            });
        })
        .catch((error) => {
          setIsError(error.message);
          console.error("Signup error:", error);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // navigate("/browse");
        })
        .catch((error) => {
          setIsError(error.message);
          console.error("Login error:", error);
        });
    }
  };

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="Background"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg opacity-90"
      >
        <h1 className="font-bold text-3xl py-4 ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="p-2 my-3 w-full rounded-md bg-gray-800"
            type="text"
            placeholder="Enter Your Name"
            ref={name}
          />
        )}
        <input
          className="p-2 my-3 w-full rounded-md bg-gray-800"
          type="email"
          placeholder="Email Address"
          ref={email}
        />
        <input
          className="p-2 my-3 w-full rounded-md bg-gray-800"
          type="password"
          placeholder="Password"
          ref={password}
        />
        <button
          className="p-2 my-3 bg-red-600 w-full rounded-lg"
          onClick={handleValidation}
        >
          {isSignIn ? "Log In" : "Create Account"}
        </button>
        <p className="font-bold text-red-600">{isError}</p>
        <p onClick={toggleForm}>
          {isSignIn
            ? "New to Netflix ? Sign Up Now"
            : "Alreday have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
