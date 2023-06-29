"use strict";

const Tweeter = function () {
    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" },
            ],
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                {
                    id: "c4",
                    text: "Don't wory second poster, you'll be first one day.",
                },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." },
            ],
        },
    ];
    let postIdCounter = 2;
    let commentIdCounter = 6;

    const _getInd = function (obj, id) {
        for (let ind in obj) {
            if (obj[ind].id === id) {
                return ind;
            }
        }
        return -1;
    };
    // function that returns the posts array
    const getPosts = function () {
        return posts;
    };

    // function that receives some text and adds a post object to posts
    const addPost = function (text) {
        if (text !== undefined) {
            postIdCounter++;
            posts.push({ id: "p" + (postIdCounter).toString(), text: text, comments: [] });
            return true;
        }
        return false
    };

    // function that receives a postID and removes the relevant post from posts
    const removePost = function (postID) {
        let ind = _getInd(posts, postID);
        if (ind !== -1) {
            posts.splice(ind, 1);
        }
    };

    // function that receives a postID and text and pushes an object to the relevant post’s comments array
    const addComment = function (postID, text) {
        let ind = _getInd(posts, postID)
        if (text !== undefined || ind !== -1) {
            commentIdCounter++
            posts[ind].comments.push({ id: "c" + commentIdCounter.toString(), text: text })
            return true
        }
        return false
    };

    // function that receives a postID and a commentID and removes the relevant comment from the comments array in the post
    const removeComment = function (postID, commentID) {
        let post_ind = _getInd(posts, postID)
        let comment_ind = _getInd(posts[post_ind].comments, commentID)
        if (post_ind !== -1 && comment_ind !== -1) {
            posts[post_ind].comments.splice(comment_ind, 1);
        }
    }


    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    };
};

// const tweeter = Tweeter();

// tweeter.addPost("This is my own post!");
// console.log(tweeter.getPosts());

// tweeter.removePost("p1");
// console.log(tweeter.getPosts());


// tweeter.addComment("Damn straight it is!", "p3");
// tweeter.addComment("Second the best!", "p2");
// console.log(tweeter.getPosts());


// tweeter.removeComment("p2", "c6");
// console.log(tweeter.getPosts());
