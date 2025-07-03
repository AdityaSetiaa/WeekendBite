import week from '../assets/weekendBites.png'
import regions from "../store"


function Header() {
  return (
    <div className='flex flex-col'>
      <div className='w-full h-27 border-2 border-gray-300 bg-white shadow-md flex items-center justify-between px-4'>
        <img src={week} alt="Recefied Logo" className='h-32 flex flex-col justify-center items-center' />
      </div>
      <div className=' w-full h-auto bg-white  rounded-2xl shadow-md flex flex-row items-center justify-between p-4 overflow- whitespace-nowrap gap-4 scroller-hide '>
        {
          regions.regions.map((region: any, index: number) => (
            <div key={index} className='flex
                                        flex-row
                                        w-full 
                                        items-center
                                        gap-2 
                                        gap-x-2
                                        justify-center
                                        text-gray-700'>
              <img src={region.img} alt="" className='w-12 h-12 rounded-full object-cover' />
              <span className='text-lg font-semibold flex'>{region.name}</span>
              
            </div>
          ))
        }
      </div>
      <div className='w-full h-auto  flex flex-row items-center  p-2 overflow- whitespace-nowrap gap-4 scroller-hide justify-center '>
        {
          regions.filterTags.map((tags: any, index: number) => (
            <div key={index} className='flex 
                                        flex-row
                                        items-center
                                        rounded-2xl
                                        p-2
                                        cursor-default
                                        justify-center
                                        text-gray-700'>
              
              |<span className='w-auto rounded-2xl p-2 hover:text-red-400'>{tags}</span> | 
            </div>
          ))
        }
      </div>
      
      <input type="text" />
      
    </div>
  )
}

export default Header
      