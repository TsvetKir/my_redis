import { assoc } from "./assoc";

export const generateRandomString = () => {
    return Math.random().toString(36).substring(2, 15);
}

export const assingId = () => {
    return assoc("id", generateRandomString);
}