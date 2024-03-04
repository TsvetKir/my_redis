import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../context/tokenContext";

interface IPostData {
    id: string,
    author: string,
    title: string,
    score: number,
    avatar: string,
    previewImg: string,
    datePostUtc: number,
    subreddit: string,
}

export function usePostData() {
    const [best, setBest] = useState<Array<IPostData>>([]);
    const token = useContext(tokenContext);

    useEffect(() => {
        //if (token && token.length > 0 && token !== "underfined") {
            axios
                .get('https://oauth.reddit.com/best.json?sr_detail=true',
                    {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                .then((resp) => {
                    const userData = resp.data.data.children.map(
                        (item: { data: any }) => ({
                            id: item.data.id,
                            author: item.data.author,
                            title: item.data.title,
                            score: item.data.ups,
                            subreddit: item.data.subreddit,
                            avatar: item.data.sr_detail.icon_img ? item.data.sr_detail.icon_img : '',
                            previewImg: item.data.preview ? item.data.preview.images?.[0].source.url.replace(/(\&amp\;)/g, "&") : '',
                            datePostUtc: item.data.created_utc,
                        })
                    );
                    setBest(userData);
                })
                .catch(console.log);
        //}
    }, [])
    return [best];
}