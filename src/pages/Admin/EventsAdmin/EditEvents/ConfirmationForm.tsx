import SideBar from '../../../../components/SideBar'
import { SideEditEvents } from '../../../../components/SideBar/SideEditEvents'
import HeaderManager from '../../../../components/Header/HeaderManager'

const ConfirmationForm = () => {

    let correo = 'kesslertorres497@gmail.com'
    
    return (
        <>
            <HeaderManager />
            <div className="flex flex-row">
                <SideBar />
                <SideEditEvents />
            </div>
            <div className='container ml-auto mr-40 w-7/12 mt-24 mb-16'>
                <div className="pb-6 border-b-2">
                    <h1 className='text-4xl font-bold text-titleTextColor'>Confirmación del pedido</h1>
                    <p className="mt-3">
                        Ve y edita la página de confirmación de solicitud que los asistentes ven después de hacer su pedido
                    </p>
                </div>
                <div className='mt-4'>
                    <div>
                        <h1 className='text-3xl font-bold text-titleTextColor'>Personalizar página web</h1>
                        <div className='my-4'>
                            <p className='text-gray-700'>
                                Tras registrarse en tu evento, los asistentes verán un mensaje en pantalla
                                hasta que abandonen la página. Aquí puedes incluir instrucciones especiales
                                u otro tipo de información útil, pero añade la información importante también
                                en la sección de personalizar correo electrónico para que los asistentes puedan
                                consultarla en otro momento.
                            </p>
                            <span>Mensaje Para La Página De Confirmación De Pedido (No Se Permiten Etiquetas Html)</span>
                            <textarea className='w-full h-60 border rounded mt-2 outline-blue-600 p-4'></textarea>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold text-titleTextColor'>Personalizar correo electrónico</h1>
                        <p className='text-sm mt-3'>
                            Los asistentes también recibirán un correo electrónico de confirmación del pedido después
                            de registrarse. Añade instrucciones importantes o información útil al mensaje para que
                            los asistentes tengan acceso a ella en todo momento.
                        </p>
                        <div>
                            <p className='mt-3'>Dirección De Correo Electrónico De Responder A Predeterminada:</p>
                            <input className='w-1/2 border py-2 px-4 mt-3' type="text" value={correo} />
                        </div>
                        <div>
                            <p className='mt-3'>Mensaje De Correo Electrónico Y PDF Para Imprimir (Si Se Incluye)</p>
                            <textarea 
                                className='w-full h-60 border p-4 outline-blue-600' 
                                placeholder='Informa a los asistentes de lo que pueden llevar al evento e incluye 
                                informacion sobre la politica de devoluciones. Si se trata de un evento online, puedes 
                                promocionar instrucciones sobre el seminario web en esta seccion.'>
                            </textarea>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-3xl font-bold text-titleTextColor my-2'>Ajustes adicionales</h1>
                        <p>Configura si deseas que los asistentes reciban un PDF para imprimir cuando se registren.</p>
                        <select className='w-full p-4 border mt-4 outline-blue-600'>
                            <option value="">Mismos ajustes para todos los tipos de entrada</option>
                            <option value="">Ajustes personalizados para cada tipo de entrada</option>
                        </select>
                        <h5 className='mt-4'>Entradas Para Imprimir</h5>
                        <div className='flex flex-row mt-4'>
                            <input type="checkbox" className='w-5 h-5' checked={true}/>
                            <p className='ml-2'>Incluir entradas para imprimir en todos los pedidos</p>
                        </div>
                    </div>
                </div>
                <button className='bg-bgButton hover:bg-bgButtonHover px-4 py-2 font-bold text-white mt-6 rounded'>
                    Guardar Ajustes
                </button>
            </div>
        </>
    )
}

export default ConfirmationForm;