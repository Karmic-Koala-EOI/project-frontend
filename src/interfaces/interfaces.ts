export interface User {
    _id: string,
    userName: string,
    email: string,
    company: string,
    country: string,
    twitterLogged: boolean
}

export interface TrendingTwitter {
    name: string,
    promoted_content?: any;
    query: string,
    tweet_volume: number,
    url: string
}

export interface PostTwitter {
    message: string,
    photo_url: Blob
}