// remove
const database = require('../database/config').database;

const addPost = function (post) {
    console.log('addPost');
    return {
        type: 'ADD_POST',
        post
    }
}

const removePost = function (index,postid) {
    // console.log('index inside removePost : ' + index);
    console.log('removePost');
    return {
        type: 'REMOVE_POST',
        index,
        postid
    };
}


const addComment = function(comment,postId) {
    console.log('addComment');
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }    
}

const startAddingPost = function(post) {
    console.log('startAddingPost');
    return (dispatch) => {
        return database.ref('posts').update({[post.id]: post}).then(
            () => {
                dispatch(addPost(post));
            }
        ).catch((error)=>{
            console.log('ERROR :\n' + error);
        });
    }
}

const startLoadingPosts = function(){
    console.log('startLoadingPosts');
    return(dispatch) => {
        return database.ref('posts').once('value').then(
            (snapshot) => {
                let posts = [];
                snapshot.forEach((childSnapshot) => {
                    posts.push(childSnapshot.val());
                    // console.log('data: ' + childSnapshot.val());
                });
                // console.log(posts);
                dispatch(loadPosts(posts));
            }
        ).catch((error)=>{
            console.log('ERROR :\n' + error);
        });
    };
}

const loadPosts = function(posts) {
    return {
        type: 'LOAD_POSTS',
        posts
    }
}

const startRemovingPost = function(index,postid) {
    console.log('startRemovingPost');
    const updates = {
        [`posts/${postid}`]: null,
        [`comments/${postid}`] : null
    };
    return (dispatch) => {
        return database.ref().update(updates).then(
            () => {
                dispatch(removePost(index,postid));
            }
        ).catch((error)=>{
            console.log('ERROR :\n' + error);
        });
    };

    // return (dispatch) => {
    //     return database.ref(`posts/${postid}`).remove().then(
    //         () => {
    //             dispatch(removePost(index,postid));
    //         }
    //     ).catch((error)=>{
    //         console.log('ERROR :\n' + error);
    //     });
    // };
}

const startAddingComment = function(comment,postId) {
    console.log('startAddingComment');
    return (dispatch) => {
        return database.ref(`comments/${postId}`).push(comment).then(
            () => {
                dispatch(addComment(comment,postId));
            }
        ).catch((error)=>{
            console.log('ERROR :\n' + error);
        });
    };
}

const startLoadingComments = function() {
    // console.log('startLoadingComments');
    return (dispatch) => {
        return database.ref('comments').once('value').then(
            (snapshot) => {
                let comments = {};
                snapshot.forEach((childSnapshot) => {
                    // console.log('KEY: ' + childSnapshot.key);
                    // console.log('VALUE: ' + JSON.stringify(childSnapshot.val()));
                    comments[childSnapshot.key] = Object.values(childSnapshot.val());
                });
                dispatch(loadComments(comments));
            }
        ).catch((error)=>{
            console.log('ERROR :\n' + error);
        });
    };
}

const loadComments = function(comments){
    return {
        type: 'LOAD_COMMENTS',
        comments
    };
}



module.exports = {
    addPost,
    removePost,
    addComment,
    startAddingPost,
    startLoadingPosts,
    loadPosts,
    startRemovingPost,
    startAddingComment,
    startLoadingComments
};