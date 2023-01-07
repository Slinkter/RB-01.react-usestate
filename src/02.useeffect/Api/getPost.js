const getPost = async (userID) => {
    const url = "https://jsonplaceholder.typicode.com/posts?userId=" + userID;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
};

export default getPost;
