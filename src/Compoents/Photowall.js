const React = require('react');
// const Component = React.Component;
const Photo = require('./Photo');
const PropTypes = require('prop-types');
const Router = require('react-router-dom');
const Link = Router.Link;

function Photowall(props) {
    // console.log('photowall');
    // console.log(props);    
    // const allPosts = props.posts;
    return (
        <div>
            <Link className='add-icon' to='/AddPhoto'></Link>
            {/* <a onClick={props.onNavigate} href="#AddPhoto" className='add-icon'>  </a> */}
            {/* <button onClick={props.onNavigate} className='add-icon'>  </button> */}
            <div  className='photo-grid'> 
                {/* <Photo key={1} {...props} /> */}
                {props.posts.sort((x,y)=>{
                        return y.id - x.id;
                    }).map((post,index) => {
                        return(<Photo key={index} post={post} {...props} index={index}/>);                        
                    })}
            </div>
        </div>
    );
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
    // onRemovePhoto: PropTypes.func.isRequired
};
// export default List;
module.exports = Photowall;