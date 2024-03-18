// function loadPost(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res =>res.json())
//     .then(data=> displayPosts(data))
// };
// loadPost();

// function displayPosts(posts){
//     console.log(posts);
// }



const loadQuotes= ()=>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data=>displayQuote(data) )
}
const displayQuote= quote =>{
    const quoteElement=document.getElementById('quote');
    quoteElement.innerText=quote.quote;
}
