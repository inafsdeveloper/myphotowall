const React = require('react');
const Component = React.Component;
class AddPhoto extends Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const imgLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        
        if(imgLink && description) {
            const post = {
                id: Number(new Date()),
                description: description,
                imageLink: imgLink
            };
            
            this.props.startAddingPost(post);
            // this.props.addPost(post);
            this.props.history.push('/');
        }
    }
    render() {
        // return <h1> This is the page where we will add photos. </h1>
        // console.log(this.props);
        return (           
            <div>                 
                <div className='form'>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' placeholder='Link'name='link'/>
                        <input type='text' placeholder='Decsription' name='description'/>
                        <button>Post</button>
                    </form>
                </div>
            </div>
        );
    }
}

module.exports = AddPhoto;