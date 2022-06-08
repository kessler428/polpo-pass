import { CgNotes } from 'react-icons/cg'
import { GoGraph } from 'react-icons/go'
import { AiOutlineBank } from 'react-icons/ai'
import {BsCalendarDate, BsGearFill } from 'react-icons/bs';

import '../../index.css'
import { NavLink } from 'react-router-dom'
import { iconsSideBar } from '../../interfaces/InterfacesSideBar';

const SideBar = () => {
  return (
    <div className='fixed mt-[76px] top-0 left-0 h-screen w-16 m-0 flex flex-col bg-bgPrimary text-black border-r'>
        <NavLink 
          to="/events"
          className={ ({isActive}) => isActive ? 'bg-bgViolet mt-6 mb-4 p-4 text-white rounded mx-1' : 'mt-4 mb-4 p-4 text-white hover:bg-bgVioletHover'} 
        >
          <SideBarIcon icon={<BsCalendarDate size="20" />} text="Eventos"/>
        </NavLink>
        <NavLink 
          to="/pedidos"
          className={ ({isActive}) => isActive ? 'bg-bgViolet mt-6 mb-4 p-4 text-white rounded mx-1' : 'mt-4 mb-4 p-4 text-white hover:bg-bgVioletHover'} 
        >
          <SideBarIcon icon={<CgNotes size="20"/>} text="Pedidos" />
        </NavLink>
        <NavLink 
          to="/reportes"
          className={ ({isActive}) => isActive ? 'bg-bgViolet mt-6 mb-4 p-4 text-white rounded mx-1' : 'mt-4 mb-4 p-4 text-white hover:bg-bgVioletHover'} 
        >
          <SideBarIcon icon={<GoGraph size="20"/>} text="Reportes" />
        </NavLink>
        <NavLink 
          to="/finanzas"
          className={ ({isActive}) => isActive ? 'bg-bgViolet mt-6 mb-4 p-4 text-white rounded mx-1' : 'mt-4 mb-4 p-4 text-white hover:bg-bgVioletHover'} 
        >
          <SideBarIcon icon={<AiOutlineBank size="20"/>} text="Finanzas" />
        </NavLink>
        <NavLink 
          to="/Configuraciones"
          className={ ({isActive}) => isActive ? 'bg-bgViolet mt-6 mb-4 p-4 text-white rounded mx-1' : 'mt-4 mb-4 p-4 text-white hover:bg-bgVioletHover'} 
        >
          <SideBarIcon icon={<BsGearFill size="20"/>} text="Ajustes de organización"/>
        </NavLink>
    </div>
  )
}

const SideBarIcon = ({ icon, text }: iconsSideBar) =>(
  <div className='sideBarIcon group'>
    {icon}
    <span className='sideBar-Tooltip group-hover:scale-100'>
      {text }
    </span>
  </div>
);

export default SideBar;