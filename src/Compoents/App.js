// const ReactRedux = require('react-redux');
// const connect = ReactRedux.connect;
const connect = require('react-redux').connect;
const bindActionCreators = require('redux').bindActionCreators;
// const removePost = require('../redux/actions').removePost;
const actions = require('../redux/actions');
const withRouter = require('react-router').withRouter;

const Main = require('./Main');

function mapStateToProps(state) {
    // console.log('mapStateToProps');
    // console.log('state');
    // console.log(state);    
    return {
        posts: state.posts,
        comments: state.comments
    };   
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions,dispatch);
}

const App = withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));

module.exports = App;