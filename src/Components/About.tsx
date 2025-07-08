
function About() {
  return (
    <div className='m-8 '>
        <h1 className='text-3xl m-4 h-auto text-center'>About</h1>
        
        <div className='w-auto flex flex-wrap justify-center gap-8'>
           <div className="m-4">
             <p className='max-w-150 w-auto'>Welcome to Weekend Bites — your go-to destination for delicious, easy-to-make recipes perfect for relaxing weekends. Whether you're cooking for family, friends, or just yourself, our recipes are crafted to bring joy to your kitchen without the stress. From comfort food classics to creative new dishes, we’re here to inspire your weekend meals with flavor, simplicity, and heart. 
            </p>
            <h1 className="mt-8 bg-red-400 rounded-2xl hover:bg-red-500 duration-300 text-white px-4 py-3 w-fit"><a href="https://x.com/Adetia108">Contact us</a></h1>
           </div>
        <img src="https://i.pinimg.com/736x/58/dd/63/58dd6391d028266da2b5483556cc3775.jpg" alt="img" className='max-h-[500px] min-h-[400] flex' />
        </div>
    </div>
  )
}

export default About