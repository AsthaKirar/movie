
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <>
    <div className='w-[20%] h-full overflow-auto border-r-2 border-zinc-400 p-10 '>
        <h1 className='text-2xl text-white font-bold'>
        <i class="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span className='text-2xl'>MovieApp</span>
        </h1>
        <nav className='flex flex-col text-xl text-zinc-300 gap-3'>
            <h1 className='text-white font-semi-bold text-xl mt-10 mb-5'>
                New Feeds</h1>
                <Link className='hover:bg-[rgb(101,86,205)] hover:text-white rounded-lg duration-300 p-2'> <i class="ri-fire-fill"></i>Trending</Link>
                <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-2'> <i class=" mr-2 ri-bard-fill"></i>Popular</Link>
                <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg  duration p-2'> <i class=" mr-2 ri-movie-fill"></i>Movie</Link>
                <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-2'> <i class=" mr-2 ri-tv-2-fill"></i>Tv show</Link>
                <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-2'> <i class=" mr-2 ri-team-line"></i>People</Link>
        </nav>
        <hr className='border-none h-1 bg-zinc-400' />
        <nav className='flex flex-col text-xl text-zinc-300 gap-3'>
            <h1 className='text-white font-semi-bold text-xl mt-10 mb-5'>
                Website Information</h1>
                <Link className='hover:bg-[rgb(101,86,205)] hover:text-white rounded-lg duration-300 p-2'><i class="ri-information-fill"></i> About</Link>
                <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-2'><i class="ri-phone-fill"></i> Contact</Link>
        </nav>
    </div>
    </>
  )
}

export default SideNav;