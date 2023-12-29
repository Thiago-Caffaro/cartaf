function Card(props) {
    return(
    <div className="card">
            <div className="inner">
                <div className="front"></div>
                <div className="back" style={{backgroundColor: `${props.color}`}}>
                    <p>{props.children}</p>
                </div>
            </div>
        </div>
    );
    
}
export default Card 