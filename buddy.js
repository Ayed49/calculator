const loadBuddies = () =>{
    fetch('https://randomuser.me/api/0.8/?results=10')
    .then(res => res.json())
    .then(data =>displayBuddies(data));
}
loadBuddies();
const displayBuddies = data =>{
    const buddies=data.results;
    console.log(data.results);
    
}