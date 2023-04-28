let products = [
    {
        id:1,
        name:'Iphone 14 pro max',
        price:1200,
        imgURL:'https://m.media-amazon.com/images/I/51WrcnfC5IL._AC_UF894,1000_QL80_.jpg',
        description:'1Lorem ipsum dolor sit amet consectetur.'
    },
    {
        id:2,
        name:'Samsung s22 ultra',
        price:1400,
        imgURL:'https://images.samsung.com/is/image/samsung/p6pim/ph/2202/gallery/ph-galaxy-s22-ultra-s908-sm-s908ezwgphl-530760753?$650_519_PNG$',
        description:'2Lorem ipsum dolor sit amet consectetur.'
    },
    {
        id:3,
        name:'Nokia 3310',
        price:80,
        imgURL:'https://media.gq-magazine.co.uk/photos/5d1399752881cc7da90a84c6/master/w_1920,h_1280,c_limit/nokia3310.jpg',
        description:'3Lorem ipsum dolor sit amet consectetur.'
    },
    {
        id:4,
        name:'Xiami  Note 10',
        price:700,
        imgURL:'https://www.soliton.az/images/articles/2021/03/16/20210316053001396_1.jpg',
        description:'3Lorem ipsum dolor sit amet consectetur.'
    }
];
let productsWrapper = document.querySelector(".products-wrapper");
let buttons = [];

document.addEventListener("DOMContentLoaded",()=>{
    if (!localStorage.getItem("basket")) {
        localStorage.setItem("basket",JSON.stringify([]));
    }
    products.forEach((product)=>{
        productsWrapper.innerHTML += `<div class="col-3">
        <div class="card" data-id="${product.id}" style="width: 18rem;">
            <img class="card-img-top" src="${product.imgURL}" alt="${product.name}">
            <div class="card-body">
              <h6 class="card-title"><span>Name: </span> <span id="name" class="fw-bold">${product.name}</span></h6>
              <p class="card-text"><span>Price: </span> <span id="price">${product.price}</span> <span class="fw-bold">$</span></p>
              <p class="card-text"><span>Description: </span> <span id="desc">${product.description}</span></p>
              <button class="btn btn-primary add-to-cart">Add to Cart</button>
            </div>
          </div>
    </div>`
    });
    //get buttons
    Array.from(productsWrapper.children).forEach((card)=>{
        buttons.push(card.children[0].children[1].children[3])
    });
    buttons.forEach((btn)=>{
        btn.addEventListener("click",function(){
            let previousBasket = JSON.parse(localStorage.getItem("basket"));
            let id = this.parentElement.parentElement.getAttribute("data-id");
            let name = this.previousElementSibling.previousElementSibling.previousElementSibling.children[1].textContent;
            let existing = previousBasket.find((item)=>item.id==id);

            if (existing) {
                existing.count++;
            }
            else{
                const obj = {
                    id:id,
                    name:name,
                    price:this.previousElementSibling.previousElementSibling.children[1].textContent,
                    imgURL:this.parentElement.previousElementSibling.src,
                    description: this.previousElementSibling.children[1].textContent,
                    count:1
                };
                previousBasket.push(obj);
            }
           
            localStorage.setItem("basket",JSON.stringify(previousBasket));
            Swal.fire({
                position: 'bottom-right',
                icon: 'success',
                title: `${name} added to basket successfully!`,
                showConfirmButton: false,
                timer: 1500
              })
        })
    });

});

