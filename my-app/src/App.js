import React, { Component } from "react";
import css from "./scss/main.module.scss";
import Navbar from "./components/widgets/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faSearch,
   faBell,
   faEnvelope,
   faQuestion,
} from "@fortawesome/free-solid-svg-icons";

class App extends Component {
   state = {
      selectedTab: "",
   };

   render() {
      return (
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
            </div>
            <div className={css.mainFlex}>
               <Navbar
                  selectedTab={this.state.selectedTab}
                  onSelect={(tab) => this.setState({ selectedTab: tab })}
               />
               <div className={css.side}></div>
            </div>
         </div>
      );
   }
}
export default App;
