const React = require('react');
const Component = React.Component;
// const Title = require('./Title');
const Photowall = require('./Photowall');
const AddPhoto = require('./AddPhoto');
const Router = require('react-router-dom');
const Route = Router.Route;
const Link = Router.Link;
const Single = require('./Single');

class Main extends Component {

    componentDidMount() {
        this.props.startLoadingPosts();
        this.props.startLoadingComments();
    }

    render() {
        console.log('Main - Props: ');
        console.log(this.props.comments);
        console.log(this.props.posts);
        return (
            <div>
                <h1> 
                    <Link to='/'> Photowall </Link>
                </h1>
                <Route exact path="/" render={()=>(
                    <div>                         
                        <Photowall {...this.props}/> 
                        {/* <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate = {this.navigate}/> */}
                    </div>
                )}/>
                {/* <Route exact path="/AddPhoto"  component={AddPhoto}/> */}
                <Route exact path="/AddPhoto"  render={({history})=>(
                    <AddPhoto {...this.props} />
                )}/>
                <Route path='/single/:id' render={(params)=>(
                    <Single {...this.props} {...params} />
                )}/>
            </div>
        );             
    }
}


// export default Main;
module.exports = Main;