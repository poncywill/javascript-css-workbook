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
            reject("error")
            //resolve(complete)
        })
    },1000)
})}

createPost({title:"Post3",Post:"this is my third blog"}).then(x=>{console.log(x); return viewPosts()}).catch(err=> console.log("error")).then(d=>console.log(d))

fetch("https://jsonplaceholder.typicode.com/posts").then(response=>response.json()).then(data=>console.log(data))

let promise1=Promise.resolve(40)
let promise2=new Promise((resolve,reject)=>resolve())



