import { Editor, EditorState } from 'draft-js'

import SideBar from "../../../../components/SideBar"
import { SideEditEvents } from "../../../../components/SideBar/SideEditEvents"
import { useState } from "react"
import HeaderManager from '../../../../components/Header/HeaderManager'

const WaitList = () => {

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    const [showSettings, setShowSettings] = useState(false)
    const [handleWaitList, setHandleWaitList] = useState(false)
    
    return (
        <>
            <HeaderManager />
            <div className="flex flex-row">
                <SideBar />
                <SideEditEvents />
            </div>
            <div className='container ml-auto mr-40 w-7/12 mt-24 mb-16'>
                <div className="pb-6 border-b-2">
                    <h1 className='text-4xl font-bold text-titleTextColor'>Ajustes de la lista de espera</h1>
                    <p className="mt-3">
                        Deja que la gente se una a una lista de espera si las entradas se agotan o tu evento alcanza su capacidad
                    </p>
                </div>
                <div className="mt-6">
                    <h6 className="text-lg">Habilitar lista de expera:</h6>
                    <div className="flex flex-row">
                        <input className="mt-1" type="checkbox" onChange={() => setShowSettings(true)} checked={showSettings} />
                        <p className="ml-4">Habilitar</p>
                    </div>
                    <div className="flex flex-row">
                        <input className="mt-1" type="checkbox" onChange={() => setShowSettings(false)} checked={!showSettings} />
                        <p className="ml-4">Deshabilitar</p>
                    </div>
                </div>
                {
                    showSettings && (
                        <>
                            <div className="mt-6">
                                <h6 className="text-lg">Disparador De Lista De Espera:</h6>
                                <div className="flex flex-row">
                                    <input className="mt-1" type="checkbox" onChange={() => setHandleWaitList(true)} checked={handleWaitList} />
                                    <p className="ml-4">Cuando "Ingreso General" se agote</p>
                                </div>
                                <div className="flex flex-row">
                                    <input className="mt-1" type="checkbox" onChange={() => setHandleWaitList(false)} checked={!handleWaitList} />
                                    <p className="ml-4">Cuando se sobrepasa la capacidad de evento total</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <label className="flex flex-col text-lg">Tamaño De Lista De Espera Máximo: 
                                    <input className="border w-40 px-4 py-2" type="number" />
                                </label>
                            </div>
                            <div className="mt-6">
                                <h6 className="text-lg">Información De Asistentes Que Recopilar:</h6>
                                <div className="flex flex-row">
                                    <input className="mt-1 w-5 h-5" type="checkbox" defaultChecked={true} />
                                    <p className="ml-4">Nombre completo (Obligatorio)</p>
                                </div>
                                <div className="flex flex-row">
                                    <input className="mt-1 w-5 h-5" type="checkbox"  defaultChecked={true} />
                                    <p className="ml-4">Dirección de correo electrónico (Obligatorio)</p>
                                </div>
                                <div className="flex flex-row">
                                    <input className="mt-1 w-5 h-5" type="checkbox"/>
                                    <p className="ml-4">Número de teléfono</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h6 className="text-lg">Tiempo Para Responder:</h6>
                                <div className="flex flex-row gap-4">
                                    <div className="border rounded ">
                                        <input className="h-full py-4 px-2 outline-none " type="number" />
                                        <label>Dias</label>
                                    </div>
                                    <div className="border rounded">
                                        <input className="h-full py-4 outline-none" type="number" />
                                        <label>horas/s</label>
                                    </div>
                                    <div className="border rounded">
                                        <input className="h-full py-4 outline-none" type="number" />
                                        <label>minutos</label>
                                    </div>
                                </div>
                                <p>Plazo de tiempo asignado para que los asistentes reclamen su entrada</p>
                            </div>
                            <Editor editorState={editorState} onChange={setEditorState} />
                        </>
                    )
                }
                <button className="mt-5 bg-bgButton hover:bg-bgButtonHover text-white font-bold px-6 py-3 rounded-lg">
                    Guardar
                </button>
            </div>
        </>
    )
}

export default WaitList;