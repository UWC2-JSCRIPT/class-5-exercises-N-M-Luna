// If an li element is clicked, toggle the class "done" on the <li>

const toDoList = document.querySelector('ul')
// When anything on the to do list is clicked, 
toDoList.addEventListener('click', (e) => {
  // Get the list item from the item that was clicked.
  const itemClicked = e.target
  let listItem

  switch (itemClicked.tagName) {
    case 'SPAN': // If the click happened on a SPAN tag, 
      // toggle the 'done' class in its parent node (the LI element)
      listItem = itemClicked.parentNode
      listItem.classList.toggle('done')
      break;

    case 'A': // If the click happened on an A tag,
      //grab the list item, and delete it from the parent node
      const unwantedItem = itemClicked.parentNode 
      toDoList.removeChild(unwantedItem)
      break;

    case 'LI': // If the click happened on an LI tag,
      // toggle the 'done' class in it.
      itemClicked.classList.toggle('done')
      break;
  
    default: // If the client clicks on the ul (but not on any item) do nothing.
      break;
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