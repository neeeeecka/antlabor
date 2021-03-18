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
   faCog,
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

   const jobsRef = firestore.collection("jobs");
   const query = jobsRef.orderBy("createdAt").limit(25);

   const [jobs] = useCollectionData(query, { idField: "id" });
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
               <FontAwesomeIcon icon={faCog} />
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
               {jobs && jobs.map((job) => <JobPost key={job.id} job={job} />)}
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
   const { title, description, pay } = props.job;
   return (
      <div className={jobPostcss.jobPost}>
         <div className={jobPostcss.title}>{title}</div>
         <div className={jobPostcss.pay}>
            <span>Hourly: ₾{pay}</span> - beginner. 1 - 3 days
         </div>
         <div className={jobPostcss.description}>{description}</div>
         <div className={jobPostcss.bottom}>
            <button>სერვისის შეთავაზება</button>
         </div>
      </div>
   );
}
