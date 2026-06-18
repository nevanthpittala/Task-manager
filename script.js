const CreateBtn = document.querySelector("#Create");
const formdiv = document.querySelector(".form");
const closeBtn = document.querySelector("#close");
const form = document.querySelector("form");
const taskArr = [];
const productdiv = document.querySelector("#taskContainer");
let deletedCount = 0;
const grand = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const themeBtn = document.querySelector("#themeBtn");
const clearAllBtn = document.querySelector("#clearAllBtn");
const demoInput = document.querySelector("#attributeDemo");
const compareBtn = document.querySelector("#compareBtn");


function createTask(task) {
    const card = document.createElement("div");
    card.classList.add("task-card");
    card.setAttribute("data-id", Date.now());
    card.setAttribute("data-status", "pending");
    card.setAttribute("data-category", task.Category);

    const title = document.createElement("h3");
    const titleText = document.createTextNode(task.Title);
    title.appendChild(titleText);

    const category = document.createElement("p");
    category.textContent = "Category: " + task.Category;

    const desc = document.createElement("p");
    desc.textContent = task.Description;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit");
    
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("complete");
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");

    card.append(title, category, desc, editBtn, completeBtn, deleteBtn);
    productdiv.appendChild(card);
}


CreateBtn.addEventListener('click', () => {
    formdiv.style.display = "flex";
});

closeBtn.addEventListener('click', () => {
    formdiv.style.display = "none";
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let Title = event.target[0].value;
    let Category = event.target[1].value;
    let Description = event.target[2].value;
    if (Title.trim() === "" || Category.trim() === "" || Description.trim() === ""){
        alert("Please fill all fields");
        return;
    }

    let obj = {
        Title,
        Category,
        Description,
    };

    taskArr.push(obj);
    createTask(obj);
    updateCounters(); 
    console.log(taskArr);

    form.reset();
    formdiv.style.display = "none";  
});
productdiv.addEventListener("click", (event) => {

    const card = event.target.closest(".task-card");
    if (!card) return; // clicked outside any card

    // DELETE
    if (event.target.classList.contains("delete")) {
        card.remove();
        deletedCount++;
        document.querySelector("#deletedTasks").textContent = deletedCount;
        updateCounters(); 
    }

    if (event.target.classList.contains("complete")) {
     const isDone = card.classList.toggle("done");
     card.setAttribute("data-status", isDone ? "completed" : "pending");
     updateCounters();
    }
    if (event.target.classList.contains("edit")) {
        let newTitle = prompt("Enter new task title");
        if (newTitle) {
            card.querySelector("h3").textContent = newTitle;
            if (!card.querySelector(".edited-label")) {
              const editedLabel = document.createElement("span");
              editedLabel.textContent = " (edited)";
              editedLabel.classList.add("edited-label");
              card.querySelector("h3").after(editedLabel);
            }
        }
    }

});

function updateCounters() {
    const totalTasks = document.querySelector("#totalTasks");
    const completedTasks = document.querySelector("#completedTasks");
    const pendingTasks = document.querySelector("#pendingTasks");

    totalTasks.textContent = document.querySelectorAll(".task-card").length;

    completedTasks.textContent = document.querySelectorAll('.task-card[data-status="completed"]').length;

    pendingTasks.textContent = document.querySelectorAll('.task-card[data-status="pending"]').length;
}

child.addEventListener("click", () => {
    console.log("Bubbling: Child");
});

parent.addEventListener("click", () => {
    console.log("Bubbling: Parent");
});

grand.addEventListener("click", () => {
    console.log("Bubbling: Grandparent");
});

grand.addEventListener("click", () => {
    console.log("Capturing: Grandparent");
}, true);

parent.addEventListener("click", () => {
    console.log("Capturing: Parent");
}, true);

child.addEventListener("click", () => {
    console.log("Capturing: Child");
}, true);

themeBtn.addEventListener("click", () => {
    const isDark = document.body.dataset.theme === "dark";
    document.body.setAttribute("data-theme", isDark ? "light" : "dark");
    themeBtn.classList.toggle("active", !isDark);  
    themeBtn.textContent = isDark ? "🌙" : "☀️";
});

clearAllBtn.addEventListener("click", () => {
    const cards = document.querySelectorAll(".task-card");

    cards.forEach((card) => {
        card.remove();
        deletedCount++;
    });

    document.querySelector("#deletedTasks").textContent = deletedCount;
    updateCounters();
});


compareBtn.addEventListener("click", () => {
    // PROPERTY: reflects the current live value typed by the user
    console.log("Property (input.value):", demoInput.value);

    // ATTRIBUTE: reflects the original value written in the HTML,
    // and does not change even if the user types something new
    console.log("Attribute (input.getAttribute('value')):", demoInput.getAttribute("value"));
});