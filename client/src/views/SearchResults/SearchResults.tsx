import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { useEffect } from "react"

import "./Styles.css"
import { VideoList } from "../Main/components";
import { searchVideos } from "../../features/youtube/youtubeSlice";


const SearchResults = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search_query");
    useEffect(() => {
        if (searchQuery) {
            dispatch(searchVideos(searchQuery))
        } 
    }, [searchQuery])
    return(
        <div className="searchResultContainer">
            <VideoList />
        </div>
    )
}

export default SearchResults;