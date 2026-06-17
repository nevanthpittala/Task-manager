const CreateBtn = document.querySelector("#Create");
const formdiv = document.querySelector(".form");
const closeBtn = document.querySelector("#close");
const form = document.querySelector("form");
const taskArr = [];

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
    if (Title === "" || Category === "" || Description === ""){
        alert("Please fill all fields");
        return;
    }

    let obj = {
        Title,
        Category,
        Description,
    };

    taskArr.push(obj);
    console.log(taskArr);

    form.reset();
});