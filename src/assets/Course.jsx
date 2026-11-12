export default function Course(props){
    if(props.show){
        return(
            <div className="card">
                <img src={props.image} alt="props.name" />
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <h4>₹{props.price}</h4>
            </div>
        )
    }
    return null;

}
