import week from '../assets/weekendBites.png'


function Header() {
  return (
    <div className='flex flex-col'>
      <div className='w-full h-27 border-2 border-gray-300 bg-white shadow-md flex items-center justify-between px-4'>
        <img src={week} alt="Recefied Logo" className='h-32 flex flex-col justify-center items-center' />

        <div className='mr-4 hover:text-red-400 cursor-pointer'>
          About us
        </div>
        
      </div>
      
      
    
      
    </div>
  )
}

export default Header
      