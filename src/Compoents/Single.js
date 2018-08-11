const React = require('react');
const Component = React.Component;
const Photo = require('./Photo');
const Comments = require('./Comments');

class Single extends Component {
    render() {
        // console.log('Single props: ');
        // console.log(this.props);
        const {match, posts} = this.props;
        const id = Number(match.params.id);
        const post = posts.find((post) => post.id === id);
        const comments = this.props.comments[match.params.id] || [];
        // console.log(post);
        const index = this.props.posts.findIndex((post) => post.id === id);
        return (
            <div className='single-photo'>
                <Photo post={post} {...this.props} index={index}/>
                <Comments startAddingComment={this.props.startAddingComment} comments={comments} id = {id}/>
            </div>
        );
    }
}

module.exports = Single;