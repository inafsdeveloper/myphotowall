// remove

exports.removePost = function (index,postid) {
    // console.log('index inside removePost : ' + index);
    console.log('removePost');
    return {
        type: 'REMOVE_POST',
        index,
        postid
    };
}
exports.addPost = function (post) {
    console.log('addPost');
    return {
        type: 'ADD_POST',
        post
    }
}

exports.addComment = function(comment,postId) {
    console.log('addComment');
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

// adding post