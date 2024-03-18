function loadPost(){
    fetch('https://jasonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(data=> displayPosts(data))
};
loadPost();

function displayPosts(posts){
    console.log(posts);
}