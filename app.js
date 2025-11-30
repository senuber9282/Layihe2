let sort = document.querySelector(".sort")
let taskInput = document.querySelector("#taskInput")
let del = document.querySelector(".delete")
let notes = document.querySelector(".notes")
let addPlus = document.querySelector(".add-plus")
let addBtn = document.querySelector(".addBtn")


del.addEventListener("click", () => {
    taskInput.value = "";
})

function tasks() {
    if (notes.childElementCount == 0) {
        notes.style.display = "none"
        taskInput.style.display = "block"
        del.style.display = "block"
    }
    else {
        notes.style.display = "block"
        taskInput.style.display = "none"
        del.style.display = "none"
    }
}
tasks()

let a = 1;
addBtn.addEventListener("click", () => {
    let val = taskInput.value.trim();
    if (val != "") {
        let all = document.createElement("div");
        all.innerHTML = `<div>${a}.</div>
        <div class="value" >${val}</div>
         <div class="delete2">x</div>`
        notes.appendChild(all);
        tasks();
        taskInput.value = "";
        a++;
        all.classList.add("list")
    }
})
addPlus.addEventListener("click", () => {
    taskInput.style.display = "block"
    del.style.display = "block";
})

notes.addEventListener("click", (b) => {
    if (b.target.classList.contains("delete2")) {
        b.target.parentElement.remove();
    }
    tasks();
});

sort.addEventListener("click", () => {
    let icon = sort.querySelector("i");

    let array = [...notes.children];
    let srt = icon.classList.contains("bi-sort-down-alt");

    array.sort((a, b) => {
        let note1 = a.querySelector(".value").innerText;
        let note2 = b.querySelector(".value").innerText;
        return srt ? note1.localeCompare(note2) : note2.localeCompare(note1);
    });

    array.forEach(el => notes.appendChild(el));

    icon.classList.toggle("bi-sort-down-alt");
    icon.classList.toggle("bi-sort-up-alt");
});
