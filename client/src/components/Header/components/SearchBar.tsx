import {useState} from "react"
import { useAppDispatch } from "../../../hooks"
import { searchVideos } from "../../../features/youtube/youtubeSlice";
import { Link } from "react-router-dom";

const SearchBar = () => {
    const dispatch = useAppDispatch();
    let [searchInput, setSearchInput] = useState("")

    const handleFormSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            // console.log("Search submitted", searchInput)
            dispatch(searchVideos(searchInput))
        }

        const handleChange = (e: React.FormEvent) => {
            setSearchInput((e.target as HTMLInputElement).value)
    }
    
    return (
    <div 
        className="searchBarContainer"
        onSubmit={handleFormSubmit}
    >
        <input 
            className="searchInput"
            placeholder={"Search"}
            onChange={handleChange}
            />
        {
            searchInput
            ?  <Link 
                    to={`results?search_query=${searchInput}`}
                    className="searchDiv"
                >
                    <i className="fa-sharp fa-solid fa-magnifying-glass"/>
                </Link>
            : <div className="searchDiv"> 
                <i className="fa-sharp fa-solid fa-magnifying-glass"/>
            </div>
        }
    </div>
)}

export default SearchBar;