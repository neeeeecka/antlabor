import React, { useState, useEffect } from "react";
import css from "../../scss/widgets/modal.module.scss";

var hasRendered = false;

function Modal(props) {
   useEffect(() => {
      hasRendered = true;
   });
   return (
      <div
         className={
            (hasRendered ? css[props.visible] : css.initial) + " " + css.main
         }
         onClick={props.onClick}
      >
         <div>
            <div
               className={css.modal}
               onClick={(e) => {
                  e.stopPropagation();
               }}
            >
               {props.children}
            </div>
         </div>
      </div>
   );
}

export default Modal;
