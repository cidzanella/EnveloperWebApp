
let posts = [
	{title: 'Post One'}, 
	{title: 'Post Two'}
];

function getPosts () {
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

async function init(){
    minePosts = [];
    await createPost( {title: 'Post Three'} );
    minePosts = getPosts();
    console.log(minePosts);
}

init();