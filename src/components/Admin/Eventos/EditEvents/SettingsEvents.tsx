import { useState } from "react"


export const SettingsEvents = () => {

    const [eventType, seteventType] = useState<boolean | any>(true);

    return (
        <div>
            <div className="mt-8">
                <h3 className="text-xl text-gray-800">Ajustes de presentación</h3>
                <div className="flex flex-row mt-8">
                    <input className="w-6 h-6 mt-3" type="checkbox" name="" id="" />
                    <div className="ml-4">
                        <p className="text-base">Mostrar número de entradas que quedan.</p>
                        <p className="text-sm">A los asistentes se les mostrará el número de entradas restantes.</p>
                    </div>
                </div>
                <div className="mt-10">
                    <h3 className="text-xl text-gray-800">Tipo de evento</h3>
                    <div className="flex flex-row mt-8">
                        <input className="w-4 h-4 mt-3 rounded-full" type="checkbox" value={eventType} onClick={() => seteventType(!eventType)} />
                        <div className="ml-4">
                            <p className="text-base">Eventos con venta de entradas.</p>
                            <p className="text-sm">p. ej.: Comprar entradas, Información de la entrada, Tipo de entrada.</p>
                        </div>
                    </div>
                    <div className="flex flex-row mt-8">
                        <input className="w-4 h-4 mt-3 rounded-full" type="checkbox" value={eventType} onClick={() => seteventType(!eventType)} />
                        <div className="ml-4">
                            <p className="text-base">Evento con registro.</p>
                            <p className="text-sm">p. ej.: Registrarse, Información del registro, Tipo de registro.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <h3 className="text-xl text-gray-800">Mostrar un mensaje después del fin de la venta de entradas</h3>
                    <p className="text-sm mt-4">Puedes añadir un mensaje en la parte superior de tu página del evento que se muestre una vez finalizada la venta de entradas.</p>
                    <textarea 
                        className="w-4/6 mt-5 h-40 border p-4" 
                        placeholder="Por ejemplo: la venta de estas entradas ha acabado. no te olvides de hechar un vistazo a nuestras sesiones futuras."
                    ></textarea>
                </div>

            </div>
        </div>
    )
}
