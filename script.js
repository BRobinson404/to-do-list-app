//adding a new item to the list and alert for no text in input box
function newItem(){
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);
  
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      $('#list').append(li);
    }
};

//crosses list items with double-click
function crossOut() {
    li.toggleClass("strike");
}

li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
});

//creates "X" button for each li and the attaches the ".delete" styling (sets display : none) to the li the input when clicked.
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

 crossOutButton.on("click", deleteListItem);
function deleteListItem(){
      li.addClass("delete")
  }

