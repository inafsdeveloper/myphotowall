const React = require('react');
const PropTypes = require('prop-types');
const Link = require('react-router-dom').Link;
// const ReactRedux = require('react-redux');
// const connect = ReactRedux.connect;
// const Component = React.Component;
/*
class Photo extends Component {
    render() {
        return (
            <figure className='figure'>  
                <img className='photo' src={props.post.imageLink} alt={props.post.description} />
                <figcaption> <p> {props.post.description} </p> </figcaption>
                <div className='button-container'> 
                    <button className='remove-button'> Remove </button>
                </div>
            </figure>
        );
    }
}
*/

function Photo(props){

    const post = props.post;
    // console.log('Photo');
    // console.log(props.index);
    return (
        <figure className='figure'>  
            <Link to={`/single/${post.id}`}> <img className='photo' src={post.imageLink} alt={post.description} /> </Link>                        
            <figcaption> <p> {post.description} </p> </figcaption>
            <div className='button-container'> 
                <button className='remove-button' 
                onClick={()=>{
                      props.removePost(props.index,post.id);
                      props.history.push('/');
                    }} > Remove </button>
                <Link className='comment-button' to={`/single/${post.id}`}> 
                    <div className='comment-count'>
                        <div className='speech-bubble'></div>
                        {props.comments[post.id] ? props.comments[post.id].length : 0}
                    </div>
                </Link>
            </div>
            
        </figure>
    );
}

// function mapStateToProps(state) {
//     return {
//         posts: state
//     }
// }

Photo.propTypes = {
    post: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
    // onRemovePhoto: PropTypes.func.isRequired
};

// module.exports = connect(mapStateToProps)(Photo);
module.exports = Photo;
