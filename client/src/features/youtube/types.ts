// "kind": "youtube#searchResult",
// "etag": "Nj2Op12KLroJNx7dp94aUdlKCJE",
// "id": {
//     "kind": "youtube#channel",
//     "channelId": "UC0v-tlzsn0QZwJnkiaUSJVQ"
// },
// "snippet": {
//     "publishedAt": "2007-06-04T09:55:54Z",
//     "channelId": "UC0v-tlzsn0QZwJnkiaUSJVQ",
//     "title": "REACT",
//     "description": "Welcome to REACT! From our award-winning REACT series, to shows across scripted, unscripted, animation, interactive, ...",
//     "thumbnails": {
//         "default": {
//             "url": "https://yt3.ggpht.com/ytc/AGIKgqN88c9cHzIpvMc_3OHQQmbrsNTkbFow6n6eRM7R_w=s88-c-k-c0xffffffff-no-rj-mo"
//         },
//         "medium": {
//             "url": "https://yt3.ggpht.com/ytc/AGIKgqN88c9cHzIpvMc_3OHQQmbrsNTkbFow6n6eRM7R_w=s240-c-k-c0xffffffff-no-rj-mo"
//         },
//         "high": {
//             "url": "https://yt3.ggpht.com/ytc/AGIKgqN88c9cHzIpvMc_3OHQQmbrsNTkbFow6n6eRM7R_w=s800-c-k-c0xffffffff-no-rj-mo"
//         }
//     },
//     "channelTitle": "REACT",
//     "liveBroadcastContent": "upcoming",
//     "publishTime": "2007-06-04T09:55:54Z"
// }


export type Youtube = {
    kind: string;
    etag: string;
    id: {
        kind: string;
        channelId: string;
    };
    snippet: {
        publishedAt: Date;
        channelId: string;
        title: string;
        description :string;
        thumbnails: {
            default: {
                url: string;
            },
            medium: {
                url: string;
            };
            high: {
                url: string;
            };
            channelTitle: string;
            liveBroadcastContent: string;
            publishTime: Date;
        };
    };
};