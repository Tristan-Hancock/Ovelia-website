import placeholder from '../assets/placeholder_logo.png'

const Navbar = () => {
  return (
    <header className='px-4 flex items-center justify-around w-full border-b-2 sticky top-0 z-30 bg-white'>
        <div>
            <img src={placeholder} alt="placeholder_logo" className='h-[70px] w-[150px]'/>
        </div>
        <div className='flex mx-3 '>
            <button className='md:hidden cursor-pointer text-xl'>
                &#9776;
            </button>
            <ul className='md:flex md:flex-row space-x-4 cursor-pointer font-semibold text-xl hidden items-center'>
                <li className='hover:bg-gray-300 py-1 px-3 rounded-lg'>Product</li>
                <li className='hover:bg-gray-300 py-1 px-3 rounded-lg'>About Us</li>
                <li className='hover:bg-gray-300 py-1 px-3 rounded-lg'>Blog</li>
                <li className='bg-purple-500 text-white py-1 px-3 rounded-lg'>Request Demo</li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar