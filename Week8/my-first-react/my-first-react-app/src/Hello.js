import "./Hello.css";
import Card from 'react-bootstrap/Card';
const Hello = (props) => {
    console.log(props.a);
    const {email,username} = props.a;
    return(
        // <div className="tc bg-light-green br3 pa3 ma2 dib grow shadow-5"> ///tachyons
        //     <h4> hello {email}</h4>
        // </div>
        <Card>
        <Card.Body>Hello {email} {username} </Card.Body>
      </Card>
    )
}

export default Hello;