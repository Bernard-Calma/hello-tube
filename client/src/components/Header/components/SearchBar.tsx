import {useState} from "react"
import { useAppDispatch } from "../../../hooks"
import { searchVideos } from "../../../features/youtube/youtubeSlice";

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
    <form 
        className="searchBarContainer"
        onSubmit={handleFormSubmit}
    >
        <input 
            className="searchInput"
            placeholder={"Search"}
            onChange={handleChange}
            />
        
        <button className="searchDiv">
            <i className="fa-sharp fa-solid fa-magnifying-glass"/>
        </button>
    </form>
)}

export default SearchBar;