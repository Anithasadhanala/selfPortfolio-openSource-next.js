import floatingItemsList from "@/data/floatingItemsList";
import NavItemMobile from "../NavItemMobile";




const MobileNavbar = () => {


    return (
      <nav className="bg-gray-800 md:hidden z-50 text-white pr-2 pl-2 h-[60px] pt-[18px] fixed rounded-t-2xl bottom-0 w-full sm:relative sm:bg-transparent  sm:bottom-auto">          
        <ul className="flex justify-between items-center mr-2 ml-2">
              {floatingItemsList.map((each)=>
                <NavItemMobile details={each} key={each.id}/>
              )}
        </ul> 
      </nav>
    );
};



export default MobileNavbar

