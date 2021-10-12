const fetch = require('node-fetch');

let posts = [
	{title: 'Post One'}, 
	{title: 'Post Two'}
];

function getPosts () {
    // console.log('#1')
    // console.log(posts);
	return posts;
}

function createPost (post) {
    return new Promise( (resolve, reject) => {
        posts.push(post);
        
        let error = false;

        if (!error) {
            resolve();
        } else {
            reject('Error: o-ho, not working');
        }
    })
}

minePosts = [];
createPost( {title: 'Post Three'} )
    .then(getPosts)
    .then(miPosts => console.log(miPosts))
    .catch(err => console.log(err));

console.log('#3')
console.log(minePosts);

// promise all
const promise1 = Promise.resolve('ciao a tutti!');
const promise2 = 10;
const promise3 = new Promise( (resolve, reject) => setTimeout(resolve, 2000, 'arrivederCi!'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4])
    .then(values => console.log(values)); 