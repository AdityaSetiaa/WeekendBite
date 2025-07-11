
import { useParams } from 'react-router-dom'
import { foods } from '../Foods/food'



function RecipePage() {


   
    const { id } = useParams();
    const item = foods.find(f => Number(id) === f.id );

    if (!item) return <p>Item not found</p>;
  return (
    <div className='m-4 flex flex-wrap justify-center  items-center '>
        <div className=' min-w-auto max-w-250 bg-gray-50 p-7 shadow-2xl rounded-3xl'>
        <div className='flex flex-wrap'> 
        <h1 className='text-3xl text-red-400 underline'>{item.name} </h1> <i className='justify-center'>  (in {item.Steps.length} steps)</i>
        <div className='w-auto h-auto flex gap-10 m-10'>
            <div><img src={item.image} alt={item.name} className='max-w-100 rounded-2xl' />

            <h2 className='w-auto h-auto max-w-100 mt-5 bg-gray-100 p-4 rounded-3xl'>
                <h1 className='text-2xl text-red-400'> Description </h1>
                {item.description}
            </h2>
             </div>
            <div className='bg-gray-00 p-7 bg-gray-100  rounded-3xl h-auto m-auto'>
                <p className='text-2xl text-red-400 underline'>
                    Ingredients
                </p>
                <div className='flex flex-col mt-4 '>
                    {item.ingredients.map((e,i) =>
                    <li key={i}>{e}</li>)}
                </div>
                <h1 className='m-5'>{
                    item.Credits.map((e,i)=>
                    <h1 key={i}><a href={e.link}>Recipe by -<i className='hover:text-red-400'>{e.name}</i></a></h1>
                    )
                    }</h1>
            </div>
        </div>
        
        </div>
        <div className='mt-3 border-transparent bg-gray-100  p-7 rounded-3xl'>
            <p className='text-3xl text-red-400 underline'>Steps</p>
            <div className='m-2'>
                {
                    item.Steps.map((step: any, index: number) => <div key={index} className='p-3 m-3 rounded-3xl'>
                       <h1 className='text-2xl  text-red-400 '>{index + 1}. {step.name}</h1>
                       <div>
                        <p className='m-3 ml-6'>{step.process}</p>
                       </div>
                        
                    </div>)
                }
            </div>
            <div className=' rounded-3xl m-3 py-2 px-3'>
                <p className='underline text-2xl text-red-400 '>Tip:</p>
                <h1 className='m-4 ml-8'>{item.Tip}</h1>
            </div>
        </div>
        </div>
    </div>
  )
}

export default RecipePage
