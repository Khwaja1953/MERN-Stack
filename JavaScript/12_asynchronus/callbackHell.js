// function findUser(id, callback) {
//     ///finding the user...
//     setTimeout(() => {
//         console.log("user fetched.... and his id is 101");
//         callback({ id: 101, name: "saijdeep" })
//     }, 1000)
// }

// function findPosts(userId, callback) {
//     setTimeout(() => {
//         console.log("fetched posts of user", userId.name);
//         callback({ pid: 11, pid2: 12 });
//     }, 1000)
// }

// function findComment(postId, callback) {
//     setTimeout(() => {
//         console.log('comments fetched successfully for ', postId.pid);
//         callback(["nice post", "good picture", "nice one"])
//     }, 1000)
// }

// findUser(101, (user) => {
//     findPosts(user, (postIds) => {
//         findComment(postIds, (comments) => {
//             console.log(comments[0]);
//         })
//     })
// })

function findUser(id) {
    ///finding the user...
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            console.log("user fetched.... and his id is 101");
            resolve({ id: 101, name: "saijdeep" })
        }, 1000)
    })
}

function findPosts(userId) {
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            console.log("fetched posts of user", userId.name);
            resolve({ pid: 11, pid2: 12 });
        }, 1000)
    })
}

function findComment(postId) {

    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            console.log('comments fetched successfully for ', postId.pid);
            resolve(["nice post", "good picture", "nice one"])
        }, 1000)
    })
}

findUser().then((user)=>{
    return findPosts(user)
})
.then((posts)=>{
    return findComment(posts)
})
.then((comments)=>{
    console.log(comments[0])
})
.catch(err =>{console.error(err)});