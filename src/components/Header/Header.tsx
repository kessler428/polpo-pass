import { NavLink } from "react-router-dom";
import logo from "../../assets/polpoPass.svg";
import { BsSearch } from "react-icons/bs";
import HeaderMenu from "./HeaderMenu";

export const Header = () => {
  return (
    <div className="w-full bg-bgPrimary">
      <div className="w-11/12 mx-auto flex items-center pl-8">
        <div className="w-7/12 lg:w-1/12 py-4">
          <NavLink to="/">
            <img className="w-[180px]" src={logo} alt="Logo polpoevents" />
          </NavLink>
        </div>
        <div className="hidden lg:block lg:w-5/12 px-4 py-4">
          <BsSearch className="absolute ml-4 top-7" />
          <input
            className="w-8/12 bg-bgGray rounded-full h-8 pl-12"
            placeholder="Buscar evento"
            type="text"
          />
        </div>
        <div className="w-6/12 justify-end lg:w-6/12 flex items-center h-full">
          <div className="hidden lg:block lg:w-3/12 h-[72px] text-white items-center">
            <div className="flex cursor-pointer h-full text-center items-center justify-center">
              <NavLink to="/login">Cree su evento</NavLink>
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-[0_0_auto text-white] h-[72px] items-center justify-end">
            <HeaderMenu title="Organizar" />
            <HeaderMenu title="Ayuda" />
          </div>
          <div className="w-2/12 h-[72px] text-center text-white items-center">
            <div className="flex cursor-pointer h-full items-center justify-center">
              <NavLink to="/login" className='bg-bgVioletButton px-4 py-2 rounded-full'>Ingresar</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
