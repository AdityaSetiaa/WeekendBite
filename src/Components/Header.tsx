import week from '../assets/weekendBites.png'
import regions from "../store"


function Header() {
  return (
    <div className='flex flex-col'>
      <div className='w-full h-27 border-2 border-gray-300 bg-white shadow-md flex items-center justify-between px-4'>
        <img src={week} alt="Recefied Logo" className='h-32 flex flex-col justify-center items-center' />
      </div>
      <div className='flex w-full h-auto bg-white  rounded-2xl shadow-md flex flex-row items-center justify-between p-4 overflow-x-auto whitespace-nowrap gap-4'>
        {
          regions.regions.map((region: any, index: number) => (
            <div key={index} className='flex w-fit items-center flex-row justify-between  px-4 py-2 border-b rounded-2xl gap-3 border-gray-200 border-2 hover:bg-gray-100 hover:border-red-400 cursor-pointer'>
              <img src={region.img} alt="" className='w-12 h-12 rounded-full object-cover' />
              <span className='text-lg font-semibold flex'>{region.name}</span>
              
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default Header
      