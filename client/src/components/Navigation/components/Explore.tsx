import { Icon } from "../../Common";

const Explore = () => {
    return(
        <div className="navExplore">
            <Icon 
                containerClass="navIcons"
                icon="fire"
                style="solid"
                text="Trending"
            />
            <div className="navIcons">
                <i className="fa-solid fa-bag-shopping"/> <span>Shopping</span>
            </div>
            <div className="navIcons">
                <i className="fa-solid fa-music"/><span>Music</span>
            </div>
            <div className="navIcons">
                <i className="fa-solid fa-tv"/><span>Movies & TV</span>
            </div>
            <div className="navIcons">
                <i className="fa-solid fa-tower-broadcast"/><span>Live</span>
            </div>
            <div className="navIcons">
                <i className="fa-solid fa-gamepad"/><span>Gaming</span>
            </div>
            <div className="navIcons">
                <i className="fa-solid fa-newspaper"/><span>News</span>
            </div>
            <div className="navIcons">
                <i className="fa-solid fa-trophy"/><span>Sports</span>
            </div>
            <div className="navIcons">
                <i className="fa-solid fa-lightbulb"/><span>Learning</span>
            </div>
            <div className="navIcons">
                <i className="fa-solid fa-shirt"/><span>Fashion & Beauty</span>
            </div>
            <div className="navIcons">
                <i className="fa-solid fa-podcast"/><span>Podcast</span>
            </div>
        </div>
    )
}

export default Explore;