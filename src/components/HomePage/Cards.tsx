import { NavLink } from "react-router-dom";

//components
import { eventsCards } from "./CardsInfo";

//images
import save from '../../assets/save.svg'

export const Cards = () => {
    return (
        <div className="flex flex-wrap sm:gap-4 lg:gap-2">
            {eventsCards.map((item) => {
                return (
                    <div className="flex border border-bgViolet rounded-2xl flex-wrap flex-[0_0_calc(100%)] mb-4 sm:flex-[0_0_calc(50%-1rem)] md:flex-[0_0_calc(33.33333%-1rem)] lg:mb-0 lg:flex-[0_0_calc(26%-2rem)] justify-center">
                        <img className="w-11/12 mt-3 rounded-2xl h-44" src={item.img} alt="Event banner" />
                        <div className="p-4 text-bgWhite">
                            <p className="font-bold mb-4">{item.title}</p>
                            <p className="mb-4">
                                {item.direction}
                            </p>
                            <div className="flex flex-row justify-between mt-14">
                                <NavLink to='/view_event' className="border border-bgViolet rounded-full px-4 py-2 hover:bg-bgViolet">
                                    Inscribirse ahora
                                </NavLink>
                                <img src={save} alt="" />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}