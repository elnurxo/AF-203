let basketCount = document.querySelector(".basket-count");

basketCount.textContent = JSON.parse(localStorage.getItem("basket")).length;