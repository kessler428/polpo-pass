import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { Cards } from '../../components/HomePage/Cards'
import { ModalBill } from '../../components/ModalBuyEvent/ModalBill'

//images
import bgBanner from '../../images/BG_BANNER_02.png'
import innovation from '../../images/Innovation.png'

export const ViewEvent = () => {
    
    const [openModal, setOpenModal] = useState(false)
    const { id } = useParams();

    return (
        <>
            <Header />
            <div className="h-full w-full pb-60 bg-bgPrimary">
                <div>
                    <img className="bg-cover bg-no-repeat" src={bgBanner} alt="Imagen de fondo" />
                    <div className="ml-40 flex flex-row w-60 h-28 text-white -mt-28 ">
                        <div className="border-r-2 flex flex-col items-center justify-center w-1/3 bg-bgPrimary">
                            <span className="text-4xl">17</span>
                            <span>MAY</span>
                        </div>
                        <div className="flex flex-col items-center justify-center w-2/3 bg-bgPrimary">
                            <span className="text-4xl">8:30</span>
                            <span>A.M</span>
                        </div>
                    </div>
                </div>
                <div className="w-3/4 mx-auto gap-8 flex flex-row mt-16">
                    <div className="w-2/3 text-white">
                        <h3 className="text-3xl">Acerca de este evento</h3>
                        <p className="mt-6">
                            Entreprenuers’ Innovation Summit nace desde la visión de hacer empresa con mentalidad innovadora.
                            De la mano de Claro potencializamos el mensaje de transformación digital a través del
                            uso de tecnologías de punta como habilitadores de esta transformación.
                        </p>
                        <p className="mt-6 font-bold">
                            Cualquier consulta de como conseguir su entrada puede contactarnos al siguiente WhatsApp:
                            Realizar la consulta acá
                        </p>
                        <p className="mt-6">
                            Tracks del evento - Cada track es con invitación exclusiva.
                        </p>
                        <p className="mt-6">
                            Track 1: Transformando tu negocio hacia el éxito:
                            4 emprendedores exitosos nos mostrarán el arduo camino de escalar una
                            empresa al siguiente nivel.
                        </p>
                        <p className="mt-6">
                            Track 2: Liderando con mentalidad transformadora:
                            3 líderes apasionados nos inspirarán a ser agentes de cambios
                            de nuestras vidas y nuestro entorno.
                        </p>
                        <p className="mt-6">
                            Track 3: El impacto de transformación del Blockchain:
                            5 expertos regionales nos adentrará al mundo del blockchain.
                        </p>
                        <p className="mt-6">
                            Dirigido a ejecutivos intrigados por las tendencias tecnológicas
                            y las múltiples oportunidades de inversión del mundo digital.
                        </p>
                    </div>
                    <div className="w-1/3 flex flex-col justify-center">
                        <div className="w-72 mx-auto pb-6 border border-bgViolet rounded-3xl">
                            <img className="mt-5 rounded" src={innovation} alt="Innovation Img" />
                            <div className="text-white w-60 mx-auto">
                                <div className="mt-6">
                                    <span>Fecha y hora</span>
                                    <p>Martes 17 de mayo del 2022</p>
                                </div>
                                <div className="mt-6">
                                    <span>Hora:</span>
                                    <p>8:00 - 20:00</p>
                                    <p>Hora estandar central hora de Costa Rica</p>
                                </div>
                                <div className="mt-6">
                                    <span>Ubicacion</span>
                                    <p>San Jose, Costa Rica - Hotel Intercontinental</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center mt-4'>
                            <button
                                onClick={() => setOpenModal(true)}
                                className="border text-bgWhite border-bgViolet rounded-full px-4 py-2 hover:bg-bgViolet"
                            >
                                Adquirir entrada
                            </button>
                            {openModal && <ModalBill openModal={openModal} setOpenModal={setOpenModal}/>}
                        </div>
                    </div>
                </div>
                <div className='mt-10 w-5/6 mx-auto'>
                    <div className="text-3xl text-white font-bold mb-12">
                        <h3>Otros eventos que te podrian interesar</h3>
                    </div>
                    <Cards />
                </div>
            </div>
        </>
    )
}

export default ViewEvent;