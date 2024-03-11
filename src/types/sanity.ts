import {Image} from "sanity";

interface Quote {
    _type: string;
    quote: string;
    author: string;
}

export interface HomePage {
    _type: string;
    _id: string;
    title: string;
    _updatedAt: Date;
    some: boolean;
    _rev: string;
    _createdAt: Date;
    description: string;
    video: string;
    quote: Quote;
    image: Image;
}
