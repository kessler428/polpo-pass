import { title } from "../../interfaces/HeaderMenu";
 
function HeaderMenu({
    title,
}: title) {
  return (
    <div className="flex cursor-pointer text-white h-full items-center px-8">
        {title}
    </div>
  );
}

export default HeaderMenu;
