const postsD = require('../data/posts').posts;
const commentsD = require('../data/posts').comments;
const combineReducers = require('redux').combineReducers;

const comments = function(state=commentsD, action) {
    // console.log('comments reducer ' + action.type);
    switch(action.type)
    {
        case 'ADD_COMMENT': 
            // console.log('add-comment');
            if(!state[action.postId]) {
                return {...state, [action.postId] : [action.comment]};
            }else {
                return {...state, [action.postId] : [...state[action.postId],action.comment]};
            }
        case 'REMOVE_POST':            
                // console.log('remove comment : '+ action.index + ' ; ' + action.postid);
                // console.log(state);                   
                // console.log('state[action.postid]: ' + state[action.postid]);
                if(state[action.postid])
                {                    
                    // console.log(state[action.postid]);
                    delete state[action.postid];
                }               
                return state; 
             
        default: return state;
    }
    
    // return state;
}

const posts = function(state=postsD, action)  {
    // console.log('post reducer type ' + action.type);
    // console.log('post reducer index ' + action.index);
    // console.log('action.index inside postReduced : ' + action.index);
    // console.log('action.type inside postReduced : ' + action.type);
    switch(action.type) {
        case 'REMOVE_POST': 
            // console.log('remove-post'); 
            return [...state.slice(0,action.index), ...state.slice(action.index+1)]; 
        case 'ADD_POST': 
            // console.log('add-post'); 
            return [...state, action.post];
        default: return state;
    }    
}

const rootReducer = combineReducers({posts, comments});
module.exports = rootReducer;
