function List(){

    const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "orange", calories: 45},
                    {id: 3, name: "banana", calories: 105},
                    {id: 4, name: "pineapple", calories: 37}];

    //fruits.sort((a,b) => a.name.localCompare(b.name)); // Alphabetical
    //fruits.sort((a,b) => b.name.localCompare(a.name)); // Reverse Alphabetical
    //fruits.sort((a,b) => a.calories - b.calories); // Numeric
    //fruits.sort((a,b) => b.calories - a.calories); // Reverse Numeric

    //const lowCalfruits = fruits.filter(fruit => fruit.calories < 100);
    //const highCalfruits = fruits.filter(fruit => fruit.calories >= 100);

    const listitems =   fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b></li>);

    return(<ol >{listitems}</ol>);
}

export default List