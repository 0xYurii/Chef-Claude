import starFilled from "../images/star-filled.png"
import starEmpty from "../images/star-empty.png"


export default function Star(props){
    
    return(
        <img
            src={props.isFilled? starFilled:starEmpty}
            alt={props.isFilled  ? "filled star icon" : "empty star icon"}
            className="favorite"
        />
    )
}