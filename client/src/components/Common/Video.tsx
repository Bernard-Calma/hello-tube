
interface iVideoDetails {
    videoData: {
        id: number;
        title: string;
        description: string;
        image: string;
    }
}

const Video = (props: iVideoDetails) => {
    const {title, description, image} = props.videoData;
    return(
        <div className="videoContainer">
            <img src={image} alt={title + " image"} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Video;