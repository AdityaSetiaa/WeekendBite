
import foods from "../store"


function DisplayFoods() {
  return (
    <div className="w-full h-auto bg-gray-100 grid grid-cols-5 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center justify-center">
      {
        foods.foods.map((food: any) =>(
            <div key={food.id} className='flex flex-col items-center justify-center w-auto h-auto bg-white rounded-2xl shadow-md m-4 p-2 hover:scale-105 transition-transform duration-300 ease-in-out '>
                <div className='flex flex-col items-center justify-center w-full mt-2 p-4 h-full hover:text-red-400'>
                    <img src={food.image} alt={food.name} className="w-52 h-52  object-cover rounded-md " />
                    <h1 className=' text-lg mt-2 text-center '>{food.name}</h1>
                </div>
                
            </div>
        ))
      }
    </div>
  )
}

export default DisplayFoods
