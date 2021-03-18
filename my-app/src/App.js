import React, { useState } from "react";
import css from "./scss/main.module.scss";
import jobPostcss from "./scss/jobPost.module.scss";

import Navbar from "./components/widgets/Navbar";
// import SignIn from "./SignIn";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faSearch,
   faBell,
   faEnvelope,
   faQuestion,
   faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
   apiKey: "AIzaSyBVQzqpkCJNFUeyah0q60JCESyfr_4kvcs",
   authDomain: "antlabor-2b524.firebaseapp.com",
   projectId: "antlabor-2b524",
   storageBucket: "antlabor-2b524.appspot.com",
   messagingSenderId: "665687381453",
   appId: "1:665687381453:web:37ae94b9e8ae89bbe62084",
   measurementId: "G-X07R2J9H2H",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
   const [selectedTab, setTab] = useState("ახალი");
   const [user] = useAuthState(auth);

   return user ? (
      <div className={css.main}>
         <div className={css.topbar}>
            <div className={css.search}>
               <span>
                  <FontAwesomeIcon icon={faSearch} />
               </span>
               <input type="text" placeholder="მოძიება" />
            </div>
            <span className={css.logo}>
               <img src="logo.png" />
            </span>
            <span className={css.li}>
               <FontAwesomeIcon icon={faQuestion} />
            </span>
            <span className={css.li}>
               <FontAwesomeIcon icon={faBell} />
            </span>
            <span className={css.li}>
               <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className={css.li}>
               <span className={css.profileIcon}></span>
            </span>
            <span className={css.li} onClick={SignOut}>
               <FontAwesomeIcon icon={faSignOutAlt} />
            </span>
         </div>
         <div className={css.mainFlex}>
            <Navbar selectedTab={selectedTab} onSelect={setTab} />
            <div className={css.side}>
               <JobPost
                  title="develop mvp app"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                  pay="5"
               />
            </div>
         </div>
      </div>
   ) : (
      <SignIn />
   );
}
export default App;

function SignIn() {
   const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
   };
   return (
      <div className={css.googleSignIn}>
         <div>
            <img src="logo.png" />
            <button onClick={signInWithGoogle}>Sign in with Google</button>
         </div>
      </div>
   );
}

function SignOut() {
   return auth.currentUser && auth.signOut();
}

function JobPost(props) {
   const { title, description, pay } = props;
   return (
      <div className={jobPostcss.jobPost}>
         <div className={jobPostcss.title}>{title}</div>
         <div className={jobPostcss.pay}>
            <span>Hourly: ₾{pay}</span> - beginner. 1 - 3 days
         </div>
         <div className={jobPostcss.description}>{description}</div>
      </div>
   );
}
