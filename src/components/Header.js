import Navbar from "./Navbar";
import SearchBar from "./SearchBar"; 

export default function Header ({setSelectedCategoryId, selectedCategoryId}){
    return(
        <header className="w-full">
        <SearchBar/>
        <div className="banner-bg w-full h-20"></div>
        <Navbar setSelectedCategoryId={setSelectedCategoryId} selectedCategoryId={selectedCategoryId}/>
        </header>
    )
};