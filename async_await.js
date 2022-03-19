let posts=[{title:"Post1",Post:"This is my first blog"},{title:"Post2",Post:"This is my second blog"}]

function createPost(post){
    return new Promise((resolve,reject)=>{

   
    setTimeout(()=>{
        posts.push(post)
        resolve(posts)//chumma returned
        
    },2000)
})
}

function viewPosts(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        posts.forEach(post=>{
            console.log(post.title);
            console.log(post.Post);
            // reject("error")
            resolve("complete")
        })
    },1000)
})}

async function init(){//worker api lekku edukkunnu
    let data= await createPost({title:"post3",Post:"This is my third postttt"})//wait for createpost finish  then data resolve comple
    viewPosts()


}
init()
