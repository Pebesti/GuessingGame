const fruitNames = ["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"];

const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];

function updateList(){
localStorage.clear();
    for(var i =0; i<fruitNames.length; i++){
        localStorage.setItem(fruitNames[i],fruits[i]);
        // Getting the parent element in which the li element will be created
    let ul = document.getElementById("list");

    //Creating the new li element
    var li = document.createElement("li");

    //Adding text to the new element
    li.appendChild(document.createTextNode(fruitNames[i] + " " + fruits[i]));

    //Adding class name to li element
    li.classList.add("fruits");

    //Adding the li element to the parent (ul)
    ul.appendChild(li);
    }
}

function validate(emoji,fruit){
    const regex = /\p{Extended_Pictographic}/u;
    const fruiti = /^[a-zA-Z]+$/;
    return fruiti.test(fruit);
}

function add_fruit() {
    //Getting fruit name input
    let fruitName = document.querySelector(".fruit").value;

    //Getting emoji reference
    let emoji = document.querySelector(".fruit_emoji").value;
    
    if(validate(emoji,fruitName)){

    fruitNames.push(fruitName)

    fruits.push(emoji)

    // Getting the parent element in which the li element will be created
    let ul = document.getElementById("list");

    //Creating the new li element
    var li = document.createElement("li");

    //Adding text to the new element
    li.appendChild(document.createTextNode(fruitName + " " + emoji));

     //Adding class name to li element
     li.classList.add("fruits");

    //Adding the li element to the parent (ul)
    ul.appendChild(li);
    localStorage.setItem(fruitName,emoji);
    }
    else alert("Please enter a fruit name and the emoji associated with it")
}
       
function sortList() {
var list, i, switching, b, shouldSwitch;
var sel =document.getElementById("select");
list = document.getElementById("list");
switching = true;
/* Make a loop that will continue until
no switching has been done: */

if(sel.value === "Fruit Name"){

while (switching) {
// Start by saying: no switching is done:
switching = false;
b = list.getElementsByTagName("li");
// Loop through all list items:
for (i = 0; i < (b.length - 1); i++) {
// Start by saying there should be no switching:
shouldSwitch = false;
/* Check if the next item should
switch place with the current item: */
if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
/* If next item is alphabetically lower than current item,
mark as a switch and break the loop: */
shouldSwitch = true;
break;
}
}
if (shouldSwitch) {
/* If a switch has been marked, make the switch
and mark the switch as done: */
b[i].parentNode.insertBefore(b[i + 1], b[i]);
switching = true;
}
}
}
}
function search_fruit() {

    let input = document.getElementById('searchbar').value

    input = input.toLowerCase();

    let x = document.getElementsByClassName('fruits');



    for (i = 0; i < x.length; i++) {

        if (!x[i].innerHTML.toLowerCase().includes(input)) {

            x[i].style.display = "none";

        } else {

            x[i].style.display = "list-item";

        }

    }
}