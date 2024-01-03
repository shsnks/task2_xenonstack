
const userData = [
    {
        Username: "pj2154",
        Cart:[]
    }
];

function addNewUser(){
    const loggedinUser = document.cookie
    .split('; ')
    .find((row) => row.startsWith('username='))
    ?.split('=')[1];

    let data = 
    {
        Username: loggedinUser,
        Cart: []
    };

    userData.push(data);
}

export {
    userData,
    addNewUser};