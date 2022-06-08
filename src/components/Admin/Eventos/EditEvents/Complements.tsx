import { GiCutDiamond } from 'react-icons/gi'

export const Complements = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-20'>
        <GiCutDiamond className='h-40 w-40 bg-gray-200 rounded-full' />
        <div className='flex flex-col items-center'>
            <span className='font-bold text-lg'>¿Algo más?</span>
            <p className='w-2/5 text-center'>
                Vende artículos adicionales para tu evento, como aparcamiento,
                artículos promocionales o plazas de camping. <a className='text-blue-600' href="/"> Más información</a>
            </p>
        </div>
        <button className='mt-12 bg-bgButton hover:bg-bgButtonHover px-6 py-3 text-white font-bold rounded-md'>
            Crear Complemento
        </button>
    </div>
  )
}
