// If an li element is clicked, toggle the class "done" on the <li>

const toDoList = document.querySelector('ul')
// When anything on the to do list is clicked, 
toDoList.addEventListener('click', (e) => {
  // Get the list item from the item that was clicked.
  const itemClicked = e.target
  let listItem

  switch (itemClicked.tagName) {
    // If the click happened on a SPAN or an A tag, 
    case 'SPAN':
    case 'A':
      // the list item is the second element on the event's path.
      listItem = e.path[1]
      listItem.classList.toggle('done')
      break;

    // If the click happened on an LI tag,
    case 'LI':
      // the list item is the event's target.
      listItem = e.target
      listItem.classList.toggle('done')
      break;
  
    default: // If the client clicks on the ul (but not on any item) do nothing.
      break;
  }
  
  // If a delete link is clicked, delete the li element / remove from the DOM

  // If the client clicked on a .delete element,
  if (e.target.classList.contains('delete')) {
    //grab the list item,
    const unwantedItem = e.target.parentNode 
    // and delete it from the parent node
    toDoList.removeChild(unwantedItem)
  }
})

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();

  // Create the elements for the list item:
  // 1- description of to do item
  const input = this.parentNode.getElementsByTagName('input')[0];
  const task = input.value; // use this text to create a new <li>
  const newTask = document.createElement('span')
  newTask.innerHTML = task
  // 2- delete button
  const newDeleteBtn = document.createElement('a')
  newDeleteBtn.classList.add('delete')
  newDeleteBtn.innerHTML = 'Delete'

  // Put it all together inside a list item tag
  const newItem = document.createElement('li')
  newItem.appendChild(newTask)
  newItem.appendChild(newDeleteBtn)

  // And add the list item to the end of the unordered list
  toDoList.appendChild(newItem)

  // Finish function here
};

// When the 'Add' link is clicked, run the AddListItem function
const addBtn = document.querySelector('.add-item')
addBtn.addEventListener('click', addListItem)