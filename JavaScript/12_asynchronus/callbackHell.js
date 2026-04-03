function findUser(id, callback) {
    ///finding the user...
    setTimeout(() => {
        console.log("user fetched.... and his id is 101");
        callback({ id: 101, name: "saijdeep" })
    }, 1000)
}

function findPosts(userId, callback) {
    setTimeout(() => {
        console.log("fetched posts of user", userId.name);
        callback({ pid: 11, pid2: 12 });
    }, 1000)
}

function findComment(postId, callback) {
    setTimeout(() => {
        console.log('comments fetched successfully for ', postId.pid);
        callback(["nice post", "good picture", "nice one"])
    }, 1000)
}

findUser(101, (user) => {
    findPosts(user, (postIds) => {
        findComment(postIds, (comments) => {
            console.log(comments[0]);
        })
    })
})