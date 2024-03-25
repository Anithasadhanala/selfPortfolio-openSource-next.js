import floatingItemsList from "@/data/floatingItemsList";
import NavItemMobile from "../NavItemMobile";




const MobileNavbar = () => {



    return (
      <nav className="bg-gray-800 md:hidden z-50 text-white p-4 fixed rounded-t-xl bottom-0 w-full sm:relative sm:bg-transparent  sm:bottom-auto">          
        <ul className="flex justify-between items-center">
              {floatingItemsList.map((each)=>
                <NavItemMobile details={each} key={each.id}/>
              )}
        </ul> 
      </nav>
    );
};



export default MobileNavbar

