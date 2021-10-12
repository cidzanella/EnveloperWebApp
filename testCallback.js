let posts = [
	{title: 'Post One'}, 
	{title: 'Post Two'}
];

function getPosts () {
    // console.log('#1')
    // console.log(posts);
	return posts;
}

function createPost (post, callback) {
	posts.push(post);
	// let myPosts = callback();
    // console.log('#2')
    // console.log(myPosts);
    return callback();
}

minePosts = [];
minePosts = createPost( {title: 'Post Three'}, getPosts);
console.log('#3')
console.log(minePosts);