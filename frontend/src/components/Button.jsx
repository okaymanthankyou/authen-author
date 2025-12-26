import { Link } from "react-router-dom"


const Button = (props) => {
    return (
        <Link className={`${props.class}`} to={props.url}>{props.name}</Link>
    )
}

export default Button