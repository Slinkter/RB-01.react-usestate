const getPost = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
};

export default getPost;
