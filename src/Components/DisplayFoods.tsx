
import foods from "../store"


function DisplayFoods() {
  return (
    <div className="w-auto h-auto bg-gray-100 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5  items-center justify-center py-10">
      {
        foods.foods.map((food: any) =>(
            <div key={food.id} className='flex flex-col items-center justify-center w-auto h-full bg-gray-100 transition-transform duration-300 ease-in-out cursor-pointer '>
                <div className='flex flex-col items-center justify-center w-full mt-4 h-full hover:text-red-400 duration-200'>
                    <img src={food.image} alt={food.name} className="w-68 h-68 object-cover rounded-md " />
                    <h1 className=' text-lg mt-2 text-center '>{food.name}</h1>
                    <span>{food.Credits.map((credit: any, index: number) => (
                        <span key={index}>
                            <a href={credit.link} className='hover:text-red-400'>by {credit.name}</a>
                            {index < food.Credits.length - 1 && ', '}
                        </span>
                    ))}</span>
                </div>
                
            </div>
        ))
      }
    </div>
  )
}

export default DisplayFoods
