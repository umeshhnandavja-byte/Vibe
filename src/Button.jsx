function Button(){

    let count = 0;

    const handleClick = (event) => event.target.textContent = "Ouch!";

    return(
        <>
           <button className="button" onDoubleClick={(event) => handleClick(event)}>Click Me</button>
        </>
    );
}

export default Button