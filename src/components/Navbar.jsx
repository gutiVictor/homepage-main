import burgerMenu from"../assets/images/icon-menu.svg"
export const Navbar = () => {
  return (

    <>
    <ul className="bg-blue-400 hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center" >
        <li>
            <a href="#">Home</a>
        </li>
        <li><a href="#"></a>New</li>
        <li><a href="#"></a>Popular</li>
        <li><a href="#"></a>Trending</li>
        <li><a href="#"></a>Categories</li>
    </ul>

    <img  className="w-10 h-4 cursor-pointer sm:hidden " src={burgerMenu} alt="icon-menu" />
    </>
  )
}

 
