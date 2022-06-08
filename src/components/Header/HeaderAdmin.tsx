import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/polpoPass.svg";
import { RiArrowDownSLine } from 'react-icons/ri'
import { BsSearch} from 'react-icons/bs'
import { AiOutlinePlus, AiOutlineHeart} from 'react-icons/ai'
import { ImTicket } from 'react-icons/im'

const HeaderAdmin = () => {
    const [email, setEmail] = useState(false)

    const handleClick = () =>{
      setEmail(!email);
    }

  return (
    <div className="w-full flex items-center pl-8 bg-bgPrimary fixed">
      <div className="w-6/12 lg:w-1/12 py-4">
        <Link to="/">
          <img className="w-[110px]" src={logo} alt="Logo polpoevents" />
        </Link>
      </div>
      <div className="hidden lg:block lg:w-5/12 px-4 py-4">
        <BsSearch className="absolute ml-4 top-8 text-icons" />
        <input
          className="w-8/12 bg-gray-200 h-12 pl-12"
          placeholder="Buscar evento"
          type="text"
        />
      </div>
      <div className="w-8/12 justify-end lg:w-6/12 flex items-center h-full">
        <div className="flex flex-col mr-6 text-white hover:bg-bgVioletHover py-4 px-3">
            <Link 
              to="/create_event"
            >
                <AiOutlinePlus className="ml-8 h-6 w-6" />
                <div className="">
                    Crea un evento
                </div>
            </Link>
        </div>

        <div className="flex flex-col mr-6 text-white hover:bg-bgVioletHover p-4">
          <Link to="/home_admin">
              <AiOutlineHeart className="ml-6 h-6 w-6" />
              <div className="">
                  Me gustan
              </div>
          </Link>
        </div>

        <div className="flex flex-col mr-6 text-white hover:bg-bgVioletHover p-4">
          <Link to="/home_admin">
              <ImTicket className="ml-4 h-6 w-6" />
              <div className="">
                  Entradas
              </div>
          </Link>
        </div>

        <div onClick={handleClick} className="flex cursor-pointer hover:bg-bgVioletHover p-5 items-center justify-center">
          <div className="bg-bgViolet rounded-full py-3 px-3 mr-2 text-white text-xs">Ke</div>
          <button className="text-white">ktorres@gmail.com</button>
          <RiArrowDownSLine className="relative left-2"/>
        </div>
        {
          email && (
            <div className="container absolute z-40 bg-bgPrimary text-bgWhite top-20 shadow-lg w-auto overflow-x-hidden">
              <div className="flex-col">
                <Link
                  to="/"
                  className="flex hover:bg-bgVioletHover px-8 py-3"
                >
                  <p className="text-lg">Descubrir eventos</p>
                </Link>

                <Link
                  to="/events"
                  className="flex hover:bg-bgVioletHover px-8 py-3"
                >
                  <p className="text-lg">Gestionar mis eventos</p>
                </Link>

                <hr />

                <Link
                  to="/"
                  className="flex hover:bg-bgVioletHover px-8 py-3"
                >
                  <p className="text-lg">Entradas</p>
                </Link>

                <Link
                  to="/"
                  className="flex hover:bg-bgVioletHover px-8 py-3"
                >
                  <p className="text-lg">Créditos</p>
                </Link>
                <Link
                  to="/"
                  className="flex hover:bg-bgVioletHover px-8 py-3"
                >
                  <p className="text-lg">Me han gustado</p>
                </Link>

                <Link
                  to="/"
                  className="flex hover:bg-bgVioletHover px-8 py-3"
                >
                  <p className="text-lg">Siguiendo</p>
                </Link>
                <Link
                  to="/"
                  className="flex hover:bg-bgVioletHover px-8 py-3"
                >
                  <p className="text-lg">Intereses</p>
                </Link>

                <hr/>

                <Link
                  to="/"
                  className="flex hover:bg-bgVioletHover px-8 py-3"
                >
                  <p className="ml-2 text-lg">Ajustes de la cuenta</p>
                </Link>

                <Link
                  to="/"
                  className="flex hover:bg-bgVioletHover px-8 py-3"
                >
                  <p className="ml-2 text-lg">Cerrar sesion</p>
                </Link>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default HeaderAdmin