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

module.exports = {
    addPost,
    removePost,
    addComment,
    startAddingPost
};