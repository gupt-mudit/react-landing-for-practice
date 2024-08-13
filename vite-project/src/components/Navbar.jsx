import Logo from '../assets/brand_logo.png'
const Navbar = () => {
    return(
        <nav className="flex py-2 mx-0 my-auto justify-content-space-between">
            <div className="mx-auto py-6">
                <img src={Logo} alt="logo"/>
            </div>
            <ul className=" mx-auto flex  py-6 pr-80">
                <li href="#" className="px-7">Menu</li>
                <li href="#" className="px-7">Location</li>
                <li href="#" className="px-7">About</li>
                <li href="#" className="px-7">Contact</li>
            </ul>
            <div className="py-3">
            <button type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-7 py-3 me-2 mb-5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Login
            </button>
            </div>
        </nav>
    )
}

export default Navbar;