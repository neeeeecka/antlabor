import css from "../../scss/main.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faNewspaper,
   faCheckDouble,
   faHeart,
} from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
   return (
      <div className={css.navbar}>
         <Tab onSelect={props.onSelect} selected={true} text={"ახალი"}>
            <FontAwesomeIcon icon={faNewspaper} style={{ color: "#fc9b40" }} />
            ახალი
         </Tab>
         <Tab
            onSelect={props.onSelect}
            selected={false}
            text={"რეკომენდირებული"}
         >
            <FontAwesomeIcon icon={faHeart} style={{ color: "#ef196f" }} />
            რეკომენდირებული
         </Tab>
         <Tab onSelect={props.onSelect} selected={false} text={"საუკეთესო"}>
            <FontAwesomeIcon
               icon={faCheckDouble}
               style={{ color: "#1192ce" }}
            />
            საუკეთესო
         </Tab>
      </div>
   );
}
function Tab(props) {
   const str = props.text;
   return (
      <button
         className={css.item + " " + (props.selected ? css.selected : "")}
         onClick={() => props.onSelect(str)}
      >
         {props.children}
      </button>
   );
}
export default Navbar;
