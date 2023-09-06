import {useState} from "react"
import { useAppDispatch } from "../../../hooks"
import { searchVideos } from "../../../features/youtube/youtubeSlice";
import { Link } from "react-router-dom";
import { changeViewSearch } from "../../../features/views/viewSlice";

const SearchBar = () => {
    const dispatch = useAppDispatch();
    let [searchInput, setSearchInput] = useState("")

    const handleFormSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            // console.log("Search submitted", searchInput)
            dispatch(changeViewSearch())
            dispatch(searchVideos(searchInput))
        }

        const handleChange = (e: React.FormEvent) => {
            setSearchInput((e.target as HTMLInputElement).value)
    }
    
    return (
    <div 
        className="searchBarContainer"
    >
        <input 
            className="searchInput"
            placeholder={"Search"}
            onChange={handleChange}
            />
        {
            searchInput
            ?  <Link 
                    to={`results/${searchInput}`}
                    className="searchDiv"
                >
                    <i 
                        onClick={handleFormSubmit}
                        className="fa-sharp fa-solid fa-magnifying-glass"/>
                </Link>
            : <div className="searchDiv"> 
                <i className="fa-sharp fa-solid fa-magnifying-glass"/>
            </div>
        }
    </div>
)}

export default SearchBar;