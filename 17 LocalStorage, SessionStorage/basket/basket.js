let basketCount = document.querySelector(".basket-count");
let orderBtn = document.querySelector(".order");
basketCount.textContent = JSON.parse(localStorage.getItem("basket")).length;
let totalPrice = document.querySelector("#total-all");
let tbody = document.querySelector("tbody");

document.addEventListener("DOMContentLoaded",()=>{
    let datas = JSON.parse(localStorage.getItem("basket"));
    console.log(datas);
    datas.forEach(basketItem => {
        tbody.innerHTML += `<tr>
        <th scope="row">${basketItem.id}</th>
        <td><img width="50" height="50" src="${basketItem.imgURL}" alt="${basketItem.name}"/></td>
        <td>${basketItem.name}</td>
        <td>${JSON.stringify(basketItem.price).replaceAll(`"`,"")}</td>
        <td>${basketItem.count}</td>
        <td>${basketItem.count*basketItem.price}</td>
        <td><button class="btn btn-success increase-local">+</button></td>
        <td><button class="btn btn-success decrease-local">-</button></td>
        <td><button class="btn btn-danger trash">trash</button></td>
      </tr>`
    });

    let total = datas.reduce((t,value)=>{
        return t+(value.price*value.count);
    },0)
    totalPrice.textContent = total;

});

orderBtn.addEventListener("click",()=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          tbody.innerHTML = "";
          totalPrice.textContent = 0;
          localStorage.clear();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
})