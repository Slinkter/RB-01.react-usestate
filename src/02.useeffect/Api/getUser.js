const getUser = async () => {
    const userId = Math.floor(Math.random() * 10) + 1;
    console.log(userId);

    const url = "https://jsonplaceholder.typicode.com/users/" + userId;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
};

export default getUser;
