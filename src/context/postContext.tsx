import React from "react";
import { usePostData } from "../hooks/usePostData";

export interface IPostDataContext {
    id: string,
    author: string,
    title: string,
    score: number,
    avatar: string,
    previewImg: string,
    datePostUtc: number,
    subreddit: string,
}

export const postContext = React.createContext<Array<IPostDataContext>>([]);

export function PostContextProvider({ children }: { children: React.ReactNode }) {
    const [data] = usePostData();

    return (
        <postContext.Provider value={data}>
            {children}
        </postContext.Provider>
    );
}