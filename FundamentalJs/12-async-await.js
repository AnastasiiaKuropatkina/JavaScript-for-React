fetch('http://jsonplaceholder.typicode.com/posts')
    .then((responce) => responce.json())
    .then(console.log)
    .catch(console.error);
//return promice

async function getPosts(url) {
    try {
        const response = await fetch(url);
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.warn(error)
        return error;
    }
}

getPosts('http://jsonplaceholder.typicode.com/posts').then
const getComments = async () => {
}

class Articles {
    async methodName() {}
}
const article1 = new Articles;
article1.methodName .then