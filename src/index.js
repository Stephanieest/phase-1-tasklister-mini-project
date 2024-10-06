document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const task = document.querySelector('#new-task-description').value
    const task_list = document.querySelector('#tasks')
    const list_item = document.createElement('li')
    list_item.textContent = task
    task_list.append(list_item)
});
const delBtn = document.createElement("button")
delBtn.textContent = 'Del'
delBtn.addEventListener('click', () => {
  taskList.removeChild(newTask)
  newTask.appendChild(delBtn)
})

  

 

 
  // your code here
});


