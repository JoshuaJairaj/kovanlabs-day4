function Footer(){
    return(
        <footer className='w-full bg-gray-300 pt-3 '>
          <div className='w-[80%] border-t-2 border-gray-500 mx-auto pt-5 mt-5 pb-20 flex flex-row'>
            <div className='w-2/4 text-2xl pb-6 font-semibold'>
              Created By Joshua.
            </div>
            <div className='w-2/4 flex flex-col justify-between'>
              <p className='text-lg font-semibold'>Quick links</p>
              <div className='lg:w-[50%] flex md:flex-row justify-between md:w-[100%] sm:flex-col'>
                <a href="/">Home</a>
                <a href="/trending">Trending</a>
                <a href="/create">Create</a>
                <a href="/about">About</a>
              </div>
            </div>
          </div>
        </footer>
    )
}

export default Footer;