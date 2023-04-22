// read the input field value
const inputField = document.getElementById("input-field");
const unorderedList = document.getElementById("unordered-list");
const add = document.getElementById("input-add");

let inputFieldValue = "";
inputField.addEventListener("change", (e) => {
  e.preventDefault();
  inputFieldValue = e.target.value;
});

// on ADD clicked, create a new li element

// add new element

const addNewElement = () => {
  // get number of childrens inside "ul" list
  let numberOfChildrens = unorderedList.getElementsByTagName("li").length;
  // create new DOM "li" node
  const el = document.createElement("li");
  el.id = `element-${numberOfChildrens++}`;
  el.innerHTML = `<div class="element">
    <p>${inputFieldValue}</p>
    <a href="#" className="element-edit">Edit</a>
    <a href="#" className="element-delete">Delete</a>
    </div>`;
  // add newly created node to "ul"
  unorderedList.appendChild(el);
  inputField.value = ""; // reset value of inputfield
};
