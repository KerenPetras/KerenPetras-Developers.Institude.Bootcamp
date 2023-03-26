import "./Hello.css";
const Hello = (props) => {
    console.log(props.user);
    // const {email,username} = props;
    return(
        <div>
            <h3>Hello {props.user.email} </h3>
        </div>
    )
}

export default Hello;