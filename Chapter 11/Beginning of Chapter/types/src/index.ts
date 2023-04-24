type Person = {
    id: string,
    name: string, 
    city: string
};

let data: Person[] = 
    [{ id: "bsmith", name: "Bob Smith", city: "London" },
     { id: "ajones", name: "Alice Jones", city: "Paris"},
     { id: "dpeters", name: "Dora Peters", city: "New York"}];

data.forEach(item => {
    console.log(`${item.id} ${item.name}, ${item.city}`);
});
