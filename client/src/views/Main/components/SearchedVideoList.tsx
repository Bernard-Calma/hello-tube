import {useEffect} from "react";
import { useAppDispatch } from "../../../hooks";
import VideoList from "./VideoList";
import { searchVideos } from "../../../features/youtube/youtubeSlice";
import { videoSearchProps } from "../../../features/youtube/types";


const SearchedVideoList = () => {
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     dispatch(searchVideos(props.searchQuery))
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [props.searchQuery])
    return(
        <div className="searchResultContainer">
            <VideoList />
        </div>
    )
}

export default SearchedVideoList;