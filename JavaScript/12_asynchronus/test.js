function getUser(callback){
    setTimeout(()=>{
        console.log("user fetched");
        callback({id:1, name: "khwaja"})
    },3000)
}

function getPost(data, callback){
    setTimeout(()=>{
        console.log("post fetched..");
        callback([{id:10, post:"health"}])
    },2000)
}
function getComment(post, callback){
    setTimeout(()=>{
        console.log("comment fetched...");
        callback(["nice post","good post"])
    },2000)
}

getUser((user)=>{
    getPost({id:user.id, name:user.name},(post)=>{
        getComment({id:post.id, comment: post.comment},(comment)=>{
            console.log(comment[0])
        })
    })
})