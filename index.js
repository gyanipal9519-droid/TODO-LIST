let todoList = [
    {
        item : "Watch HTML Video",
        dueDate : "26/06/2026"
    },

      {

        item : "Watch CSS Video",
        dueDate : "26/06/2026"
    }
];
display();

function addtodo(){


    let inputElement = document.querySelector("#input-item" );
    let dateElement = document.querySelector("#input-date");
    let inputItem = inputElement.value;
    let inputDate = dateElement.value;
    todoList.push({
        item :inputItem,
        dueDate :inputDate
    });
    inputElement.value ='';
    dateElement.value ='';
    display();
    
}


function display(){
    let displayItem = document.querySelector("#container-item");
  let newhtml = '';

for (let i = 0; i < todoList.length; i++) {
    let item = todoList[i].item;
    let dueDate = todoList[i].dueDate;

    newhtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button onclick="todoList.splice(${i}, 1); display();" id="del-btn">
            Delete
        </button>
    `;
}

displayItem.innerHTML = newhtml;

}
