const React = require('react');
// const Component = React.Component;

// class Title extends Component {
//     render() {
//         return (<h1> {this.props.title} </h1>);
//     }
// }

function Title(props) {
    return (<h1> {props.title} </h1>);
}

// export default Title;
module.exports = Title;