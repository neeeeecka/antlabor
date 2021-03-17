import css from "../../scss/main.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faNewspaper,
   faCheckDouble,
   faHeart,
} from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
   const { onSelect, selectedTab } = props;
   return (
      <div className={css.navbar}>
         <Tab onSelect={onSelect} selectedTab={selectedTab} text={"ახალი"}>
            <FontAwesomeIcon icon={faNewspaper} style={{ color: "#fc9b40" }} />
            ახალი
         </Tab>
         <Tab
            onSelect={onSelect}
            selectedTab={selectedTab}
            text={"რეკომენდირებული"}
         >
            <FontAwesomeIcon icon={faHeart} style={{ color: "#ef196f" }} />
            რეკომენდირებული
         </Tab>
         <Tab onSelect={onSelect} selectedTab={selectedTab} text={"საუკეთესო"}>
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
   const { text, selectedTab, onSelect } = props;
   return (
      <button
         className={css.item + " " + (selectedTab == text ? css.selected : "")}
         onClick={() => onSelect(text)}
      >
         {props.children}
      </button>
   );
}
export default Navbar;
