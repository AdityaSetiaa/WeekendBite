import week from '../assets/weekendBites.png'
import regions from "../store"


function Header() {
  return (
    <div className='flex flex-col'>
      <div className='w-full h-27 border-2 border-gray-300 bg-white shadow-md flex items-center justify-between px-4'>
        <img src={week} alt="Recefied Logo" className='h-32 flex flex-col justify-center items-center' />
        
      </div>
      <div className=' w-full h-auto bg-white l shadow-md flex flex-row items-center overflow-x-auto  justify-between p-4 overflow- whitespace-nowrap gap-4 scroller-hidden scrollbar-custom'>
        {
          regions.regions.map((region: any, index: number) => (
            <div key={index} className="flex flex-row items-center justify-center min-w-max p-2 gap-x-2 border-2 border-gray-300 rounded-2xl cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-red-400 transition-all duration-300 ease-in-out whitespace-nowrap">
              <img src={region.img} alt="" className='w-12 h-12 rounded-full object-cover' />
              <span className='text-lg font-semibold flex'>{region.name}</span>
              
            </div>
          ))
        }
      </div>
      <div className='w-full h-10 flex flex-row items-center overflow-scroll whitespace-nowrap gap-4 scroller-hide justify-center scrollbar2'>
        {
          regions.filterTags.map((tags: any, index: number) => (
            <div key={index} className='flex 
                                        flex-row
                                        w-auto
                                        h-auto
                                        items-center
                                        rounded-2xl
                                        
                                        cursor-default
                                        justify-center
                                        text-gray-700
                                        '>
              
              |<span className='w-auto rounded-2xl p-2 hover:text-red-400'>{tags}</span> | 
            </div>
          ))
        }
      </div>
      
    
      
    </div>
  )
}

export default Header
      