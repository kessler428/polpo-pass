import { GrFormDown } from "react-icons/gr";
import { title } from "../../interfaces/HeaderMenu";
 
function HeaderMenu({
    title,
}: title) {
  return (
    <div className="flex cursor-pointer text-white h-full items-center px-8">
        {title} <GrFormDown className="ml-2 font-bold text-white" />
    </div>
  );
}

export default HeaderMenu;
