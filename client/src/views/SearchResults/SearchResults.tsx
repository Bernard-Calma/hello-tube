import { useSearchParams } from "react-router-dom";
import "./Styles.css"

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search_query");
    
    console.log(searchQuery)
    
    return(
        <div className="searchResultContainer">
            <p style={{paddingTop: 100}}>Search Results</p>

        </div>
    )
}

export default SearchResults;