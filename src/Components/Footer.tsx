

function Footer() {
  return (
    <div className='w-full h-20 bg-red-400 shadow-md flex cursor-default flex-col items-center justify-center gap-2 '>
        <p className='text-white'>built by <a href="https://github.com/Adetiasetiaa" className=" text-white">Adetia</a> <i className="fa-solid text-white fa-heart"></i></p>
        <div className='flex flex-row items-center justify-center gap-4 cursor-default'>
          <span className='text-white text-sm'>Follow us on
            <a href="https://x.com/Adetia108"> <i className="fa-brands fa-x-twitter text-white"></i></a>
          </span>
        </div>
    </div>
  )
}

export default Footer