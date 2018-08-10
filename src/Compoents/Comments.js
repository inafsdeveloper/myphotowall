const React = require('react');
const Component = React.Component;

class Comments extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        // console.log();
        const comment =  event.target.elements.comment.value;
        this.props.addComment(comment,this.props.id);
        event.target.elements.comment.value = '';
    }

    render() {
        console.log(this.props.comments);
        return (
            <div className='comment'>
                {this.props.comments.map((comment, index) => {
                    return (
                        <p key={index}> {comment} </p>
                    );
                })}
                <form className='comment-form' onSubmit={this.handleSubmit}> 
                    <input type='text' placeholder='comments' name='comment'/>
                    <input type='submit' hidden/>
                </form>
            </div>
        );
    }
}

module.exports = Comments;