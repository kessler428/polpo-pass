import Switch from '../../../Switch'
import { DataFormTableBuyer } from './FormTableData'

export const TableForm = () => {

    return (
      <div className='mt-4'>
        <div className="grid grid-col-3 grid-flow-col gap-4">
            <div className='w-80 text-center flex justify-center'>
                <span>Detalles</span>
            </div>
            <div className='w-40 text-center flex justify-center'>
                <span>Incluir</span>
            </div>
            <div className='w-40 text-center flex justify-center'>
                <span>Obligatorio</span>
            </div>
        </div>
        {
            DataFormTableBuyer.map((item) => (
                <div className="grid grid-col-3 grid-flow-col gap-4 w-full border-b-2 pb-2 mt-5">
                    <div className='w-80'>
                        <span>{item.detail}</span>
                    </div>
                    <div className='w-40 text-center flex justify-center'>
                        <Switch toggle={item.add} setToggle={!item.add}  />
                    </div>
                    <div className='w-40 text-center flex justify-center'>
                        <Switch toggle={item.Obligatorio} setToggle />
                    </div>
                </div>
            ))
        }
      </div>
    )
}