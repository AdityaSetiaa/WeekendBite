
import { useParams } from 'react-router-dom'
import { foods } from '../Foods/food'



function RecipePage() {


   
    const { id } = useParams();
    const item = foods.find(f => Number(id) === f.id );

    if (!item) return <p>Item not found</p>;
  return (
   <div className="m-4 flex flex-wrap justify-center items-center">
  <div className="max-w-4xl w-full mx-auto flex flex-col bg-gray-50 p-7 shadow-2xl rounded-3xl items-center">
    <div className="w-full flex flex-col space-y-4 p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h1 className="text-2xl sm:text-3xl text-red-400 underline">
          {item.name}
        </h1>
        <i className="text-sm sm:text-base text-gray-600">
          (in {item.Steps.length} steps)
        </i>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        <div className="flex-1 space-y-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl object-cover"
          />

          <div className="bg-gray-100 p-4 rounded-3xl">
            <h2 className="text-xl sm:text-2xl text-red-400 mb-3">
              Description
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>

        <div className="flex-1 bg-gray-100 p-4 sm:p-6 lg:p-7 rounded-3xl">
          <h2 className="text-xl sm:text-2xl text-red-400 underline mb-4">
            Ingredients
          </h2>

          <ul className="space-y-2 mb-6">
            {item.ingredients.map((ingredient, i) => (
              <li
                key={i}
                className="text-sm sm:text-base list-disc list-inside"
              >
                {ingredient}
              </li>
            ))}
          </ul>

          <div className="border-t pt-4">
            {item.Credits.map((credit, i) => (
              <div key={i} className="text-sm sm:text-base">
                <a
                  href={credit.link}
                 
                >
                  Recipe by -{" "}
                  <i className="hover:text-red-400">{credit.name}</i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="mt-4 w-full bg-gray-100 p-4 sm:p-6 lg:p-7 rounded-3xl">
      <h2 className="text-2xl sm:text-3xl text-red-400 underline mb-4">
        Steps
      </h2>

      <div className="space-y-4">
        {item.Steps.map((step: any, index: number) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm"
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl text-red-400 font-semibold mb-2 sm:mb-3">
              {index + 1}. {step.name}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed ml-0 sm:ml-4 text-gray-700">
              {step.process}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-red-50 border-l-4 border-red-400 p-4 sm:p-5 rounded-r-2xl">
        <h4 className="text-lg sm:text-xl lg:text-2xl text-red-400 underline mb-2 sm:mb-3">
          Tip:
        </h4>
        <p className="text-sm sm:text-base leading-relaxed ml-0 sm:ml-4 text-gray-700">
          {item.Tip}
        </p>
      </div>
    </div>
  </div>
</div>
  )
}

export default RecipePage
