import {useState} from "react"

const SearchBar = () => {
    let [searchInput, setSearchInput] = useState("")

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
            console.log("Search submitted", searchInput)
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