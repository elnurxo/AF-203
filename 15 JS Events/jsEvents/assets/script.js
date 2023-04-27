let decreaseBtn = document.querySelector("#decrease");
let increaseBtn = document.querySelector("#increase");
let count = document.querySelector("#count");
let nameInput = document.querySelector("#name");
let todos = [];
//decrease
decreaseBtn.addEventListener("click", (e) => {
  if (count.textContent > 0) {
    count.textContent = Number(--count.textContent);
  } else {
    e.target.classList.replace("btn-success", "btn-danger");
    e.target.setAttribute("disabled", "");
  }
});

//increase
increaseBtn.onclick = function () {
  count.textContent = Number(++count.textContent);
  if (decreaseBtn.classList.contains("btn-danger")) {
    decreaseBtn.classList.replace("btn-danger", "btn-success");
    decreaseBtn.removeAttribute("disabled");
  }
};

//modal, add product
let openModal = document.querySelector(".open-modal");
let closeModal = document.querySelector(".close-modal");
let modal = document.querySelector("#add-product-modal");

openModal.addEventListener("click", () => {
  document.body.classList.add("modal-body");
  modal.style.visibility = "visible";
  modal.style.opacity = "1";
  modal.style.transform = "translate(-50%,-50%) scale(1)";
  nameInput.focus();
});

closeModal.addEventListener("click", () => {
  ModalClose();
});

function ModalClose() {
  document.body.classList.remove("modal-body");
  modal.style.visibility = "hidden";
  modal.style.opacity = "0";
  modal.style.transform = "translate(-50%,-50%) scale(0)";
}

function CreateCard(product) {
  cardsWrapper.innerHTML += ` <div class="col-3">
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${
          product.imageURL
        }" alt="Card image cap">
        <div class="card-body" style="background-color: ${product.color}">
          <p>${product.isDiscounted ? "ON SALE" : ""}</p>
          <h5 class="card-title">Product Name: <span id="name-holder" class="fw-bold">${
            product.name
          }</span></h5>
          <p class="card-text">Product Price: <span id="price-holder" class="fw-bold">${
            product.price
          }$</span></p>
          <p class="card-text">Product Made in: <span id="price-holder" class="fw-bold">${
            product.country
          }</span></p>
          <a href="#" class="btn btn-primary"><i class="fa-solid fa-basket-shopping"></i></a>
        </div>
      </div>
    </div>`;
}
//add product
let priceInput = document.querySelector("#price");
let imageInput = document.querySelector("#image");
let form = document.querySelector("#product-form");
let color = document.querySelector("#color");
let country = document.querySelector("#country");
let isDiscounted = document.querySelector("#isDiscounted");
let cardsWrapper = document.querySelector(".cards");
let submitBtn = document.querySelector(".submit-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const product = {
    name: nameInput.value,
    price: priceInput.value,
    imageURL: imageInput.value,
    isDiscounted: isDiscounted.checked,
    color: color.value,
    country: country.options[country.options.selectedIndex].textContent,
  };
  //reset inputs
  nameInput.value = "";
  priceInput.value = "";
  imageInput.value = "";
  color.value = "";
  isDiscounted.checked = false;
  country.value = "def";

  CreateCard(product);
  ModalClose();

});

nameInput.addEventListener("keyup", (e) => {
  if (e.target.value.length < 3) {
    e.target.nextElementSibling.classList.replace("d-none", "d-block");
    submitBtn.setAttribute("disabled", "");
  } else {
    e.target.nextElementSibling.classList.replace("d-block", "d-none");
    submitBtn.removeAttribute("disabled");
  }
});

//to-do
let toDoForm = document.querySelector(".to-do-form");
let todoInp = document.querySelector("#to-do");
let list = document.querySelector(".todos");
let deleteModal = document.querySelector("#delete-product-modal");
let isDeleting = undefined;
function DeleteModalClose() {
    document.body.classList.remove("modal-body");
    deleteModal.style.visibility = "hidden";
    deleteModal.style.opacity = "0";
    deleteModal.style.transform = "translate(-50%,-50%) scale(0)";
}

toDoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (todoInp.value.trim() != "") {
    todos.push({
        name: todoInp.value.trim(),
        isDone: false
    })
    list.innerHTML += ` <li style="display: flex;
    justify-content: space-between;
    align-items: center;" class="list-group-item">
    <span>${todoInp.value}</span>
    <div>
        <button class="btn btn-warning done"><i class="fa-solid fa-check"></i></button>
        <button class="btn btn-danger remove"><i class="fa-solid fa-trash"></i></button>
    </div>
    </li>`;

    todoInp.value = "";
      //delete to-do
    //delete modal
    let deleteButtons = document.querySelectorAll(".remove");
    deleteButtons.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            deleteModal.style.opacity = "1";
            deleteModal.style.visibility = "visible";
            deleteModal.style.transform = "translate(-50%,-50%) scale(1)";
            document.body.classList.add("modal-body");
            isDeleting = btn.parentElement.parentElement;
            // btn.parentElement.parentElement.setAttribute("data-delete","true");
        })
    });
    let cancel = document.querySelector(".cancel");
    let yes = document.querySelector(".yes");
    cancel.addEventListener("click",()=>{
        DeleteModalClose();
        isDeleting = undefined;
    });
    yes.addEventListener('click',(e)=>{
        console.log(e.target);
        DeleteModalClose();
        isDeleting.remove();
    })
  } else {
    window.alert("input is empty!");
    return;
  }

  //done
  let dones = document.querySelectorAll(".done");
  dones.forEach((item) => {
    item.addEventListener("click", function () {
      this.parentElement.previousElementSibling.style.textDecoration =
        "line-through";
        todos.filter((todo)=>{
            if (todo.name===this.parentElement.previousElementSibling.textContent) {
                todo.isDone = true;
            }
        })
    });
  });
});

let searchInp = document.querySelector("#search");

searchInp.addEventListener("keyup",(e)=>{
    console.log(todos);
    let filteredToDos = todos.filter((todo)=>todo.name.trim().toLowerCase().includes(e.target.value.trim().toLowerCase()));
    list.innerHTML = "";
    filteredToDos.forEach((data)=>{
        list.innerHTML += `<li style="display: flex;
    justify-content: space-between;
    align-items: center;" class="list-group-item">
    <span style="text-decoration:${data.isDone ? "line-through":"none"}">${data.name}</span>
    <div>
        <button class="btn btn-warning done"><i class="fa-solid fa-check"></i></button>
        <button class="btn btn-danger remove"><i class="fa-solid fa-trash"></i></button>
    </div>
    </li>`
    })
})
