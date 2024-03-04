import { useContext, useState } from "react";
import { tokenContext } from "../context/tokenContext";
import axios from "axios";

export function useComments(postId: string, subreddit: string) {
    const [comments, setComments] = useState();
    const token = useContext(tokenContext);

    axios
        .get(`http://api.reddit.com/r/${subreddit}/comments/${postId}`)
        .then((resp) => {
            setComments(resp.data[1]);
        })
        .catch(console.log);

    return [comments];
}