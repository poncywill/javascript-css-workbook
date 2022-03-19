let posts=[{title:"Post1",Post:"This is my first blog"},{title:"Post2",Post:"This is my second blog"}]

function createPost(){
    setTimeout(()=>{
        posts.push(post)
    },2000)
}

function viewPosts(){
    setTimeout(()=>{
        posts.forEach(post=>{
            console.log(post.title);
            console.log(post.Post);
        })
    },1000)
}
createPost({title:"Post3",Post:"this is my third blog"})
viewPosts()

