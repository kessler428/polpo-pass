import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/polpoPass.svg";

import { RiArrowDownSLine, RiAccountCircleLine } from 'react-icons/ri'
import { HiOutlineSwitchHorizontal } from 'react-icons/hi'
import { BiLogOut } from 'react-icons/bi'
import { icons } from "../../interfaces/InterfacesHeader";


function HeaderManager() {

  const [email, setEmail] = useState(false);

  const handleClick = () =>{
    setEmail(!email);
  }

  return (
    <div>
      <div className="w-full flex fixed flex-row justify-between py-2 pl-8 bg-bgPrimary border-b">
        <div className="w-6/12 lg:w-1/12 py-4">
          <Link to="/">
            <img className="w-[110px]" src={logo} alt="Logo polpoevents" />
          </Link>
        </div>
          <div className=" w-auto h-[40px] mt-1 text-center items-center mr-4">
            <div onClick={handleClick} className="flex cursor-pointer items-center justify-center mr-4 pr-2 border-2 rounded-3xl bg-gray-200">
              <div className="bg-bgViolet rounded-full py-3 px-4 mr-2 text-white text-xs">ke</div>
              <button>kesslertorres467@gmail.com</button>
              <RiArrowDownSLine className="relative left-2"/>
            </div>
            {
              email && (
                <div className="container absolute z-40 bg-white right-2 top-auto mt-7 shadow-lg border-2 w-auto m-5 rounded-md overflow-x-hidden">
                  <div className="flex-col mx-3 my-2">
                    <Link
                      to="/"
                      className="flex my-3 hover:bg-gray-100 rounded-md p-2 w-full"
                    >
                      <IconSettings icon={<HiOutlineSwitchHorizontal size='20'/>}/>
                      <p className="ml-2 text-lg">Cambiar para asistir</p>
                    </Link>

                    <Link
                      to="/"
                      className="flex my-3 hover:bg-gray-100 rounded-md p-2 w-full"
                    >
                      <IconSettings icon={<RiAccountCircleLine size='20'/>}/>
                      <p className="ml-2 text-lg">Configuraciones de cuenta</p>
                    </Link>

                    <hr />
                    <div>
                      <div className="float-left mt-8"><IconSettings icon={<BiLogOut size='20'/>}/></div>
                      <div className="flex flex-col">
                        <p className="flex my-3 rounded-md px-2 w-full ml-2 text-lg">Configuraciones de cuenta</p>
                          <Link
                            to="/"
                            className="flex mb-3 hover:bg-gray-100 rounded-md px-2 w-full text-blue-500"
                          >
                          
                            <p className=" ml-2">kesslertorres467@gmail.com</p>
                          </Link>
                      </div>  
                    </div>
                  </div>
                </div>
              )
            }
        </div>
      </div>
    </div>
  );
}

const IconSettings = ({ icon }: icons) =>(
  <div className='relative top-1'>
    {icon}
  </div>
);

export default HeaderManager;
