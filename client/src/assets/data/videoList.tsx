export interface iVideoDetails {
    id: number;
    title: string;
    uploadedBy: string;
    description: string;
    image: string;
    views: number;
    uploaded: string;
}

export type videoListType = {
    videoList: iVideoDetails[]
}

export const videoList: Array<iVideoDetails> = [
    {
        id: 1,
        title: "Video 1",
        description: "Video Test",
        uploadedBy: "User",
        image: "Video Image",
        views: 500,
        uploaded: "1 week ago"
    },{
        id: 2,
        title: "Video 2",
        description: "Video Test",
        uploadedBy: "User",
        image: "Video Image",
        views: 500,
        uploaded: "1 week ago"
    },{
        id: 3,
        title: "Video 3",
        description: "Video Test",
        uploadedBy: "User",
        image: "Video Image",
        views: 500,
        uploaded: "1 week ago"
    },{
        id: 4,
        title: "Video 4",
        description: "Video Test",
        uploadedBy: "User",
        image: "Video Image",
        views: 500,
        uploaded: "1 week ago"
    },{
        id: 5,
        title: "Video 5",
        description: "Video Test",
        uploadedBy: "User",
        image: "Video Image",
        views: 500,
        uploaded: "1 week ago"
    },{
        id: 6,
        title: "Video 6",
        description: "Video Test",
        uploadedBy: "User",
        image: "Video Image",
        views: 500,
        uploaded: "1 week ago"
    },{
        id: 7,
        title: "Video 7",
        description: "Video Test",
        uploadedBy: "User",
        image: "Video Image",
        views: 500,
        uploaded: "1 week ago"
    },{
        id: 8,
        title: "Video 8",
        description: "Video Test",
        uploadedBy: "User",
        image: "Video Image",
        views: 500,
        uploaded: "1 week ago"
    }]