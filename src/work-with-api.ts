// Write a function that makes a GET request to the JSONPlaceholder API and 
// returns posts that are longer than 100 characters.

// API URL: https://jsonplaceholder.typicode.com/posts
// Use axios library
import axios from 'axios';

type APIResponseType = {
    id: number,
    userId: number,
    title: string,
    body: string,
}

async function fetchLongPosts(): Promise<APIResponseType[]> {
    const response = await axios.get<APIResponseType[]>('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    return posts.filter(post => post.body.length > 100);
}

module.exports = { fetchLongPosts };
