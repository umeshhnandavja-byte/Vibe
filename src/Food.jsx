function Food(){

    const food1 = "Pizza";
    const food2 = "Burger";
    const food3 = "Nuggets";
    const food4 = "Wings";

    return(
        <ul>
            <li>{food1.toUpperCase()}</li>
            <li>{food2}</li>
            <li>{food3}</li>
            <li>{food4}</li>
        </ul>
    );
}

export default Food