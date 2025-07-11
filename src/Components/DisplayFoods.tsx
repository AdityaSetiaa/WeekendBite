import regions from "../store"
import foods from "../store"
import { useState } from "react"
import weekendbites from "../store"

 



function DisplayFoods() {
  const [tag, setTag] = useState<string[]>([]);
  const handleTagClick = (selectedTag: string) => {
  setTag(prev =>
    prev.includes(selectedTag)
      ? prev.filter(t => t !== selectedTag) 
      : [selectedTag]              
  );
};
  

  const filteredFoods = tag.length === 0
  ? foods.foods
  : foods.foods.filter(food => tag.some(t => t && food.Tags.includes(t)))

  

  

  return (
  <>
  <div>
    <div className=' w-full h-auto bg-white l shadow-md flex flex-row items-center overflow-x-auto  justify-between p-4 overflow- whitespace-nowrap gap-4 scroller-hidden scrollbar-custom'>
{
  
  
  regions.regions.map((region: any, index: number) => (
    <div
      key={index}
      className={`flex flex-row items-center justify-center min-w-max p-2 gap-x-2 border-2 border-gray-300 rounded-2xl cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-red-400 transition-all duration-300 ease-in-out whitespace-nowrap ${
        tag.includes(region.name) ? "bg-gray-200 text-red-400" : ""
      }`}
      onClick={() => handleTagClick(region.name)}
    >
      <img src={region.img} alt="" className='w-12 h-12 rounded-full object-cover' />
      <span className='text-lg font-semibold flex'>{region.name}</span>
    </div>
  ))
}
          
      </div>
      <div className='w-full h-10 flex flex-row items-center overflow-scroll whitespace-nowrap gap-4 scroller-hide justify-center scrollbar2'>
        {
          foods.filterTags.map((tags: any, index: number) => (
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
              
              |<span className={`w-auto rounded-2xl p-2 hover:text-red-400 ${
        tag.includes(tags) ? " text-red-400" : ""
      }`} onClick={()=> handleTagClick(tags)}>{tags}</span> | 
            </div>
          ))
        }
      </div>
  </div>
  <div className="p-4">
    <img src={weekendbites.weekendbites} alt="" className=""/>
  </div>
    <div className="w-auto h-auto bg-white flex flex-wrap items-center justify-center py-10">
    
      { 
       filteredFoods.map((food: any) =>(
            <div key={food.id} className='flex flex-col items-center justify-center w-auto h-full bg-white transition-transform duration-300 ease-in-out cursor-pointer m-5 '>
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
  </>
  )
}

export default DisplayFoods
