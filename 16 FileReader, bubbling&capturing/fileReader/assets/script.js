let upload = document.querySelector("#upload");
let addImage = document.querySelector(".add-image");
let wrapper = document.querySelector(".cards-wrapper");
let lastDeleted = undefined;
let lastDeletedOBJ = undefined;
let undo = document.querySelector(".undo");
let images = [];
let deletedID;
let dropZone = document.querySelector(".drop-zone");

upload.addEventListener("change",(e)=>{
    Array.from(e.target.files).forEach(file => {
       const fileReader = new FileReader();
       fileReader.readAsDataURL(file);

       addImage.addEventListener("click",()=>{
          let src = fileReader.result;
          let size = Math.round(file.size/1024);
          let name = file.name;
          let type = file.type;
          
          if (!type.includes("image/")) {
            window.alert("wrong format!")
            return;
          }
          else{
            images.push({
                name:name,
                src:src,
                size:size,
            })
            wrapper.innerHTML += `<div class="col-3">
            <div class="my-card">
              <button class="btn btn-danger remove">X</button>
              <img src="${src}" alt="${name}">
              <p class="size"><span>${size}</span><span>KB</span></p>
            </div>
            </div>`;
            upload.value = "";

            let removeButtons = []; 
            Array.from(wrapper.children).forEach((item)=>{
                removeButtons.push(item.children[0].children[0]);
            })
            removeButtons.forEach((btn,idx)=>{
                btn.addEventListener("click",(e)=>{
                    if (window.confirm("are you sure?")){
                        lastDeleted = e.target.parentElement.parentElement;
                        lastDeletedOBJ = {
                            name:e.target.nextElementSibling.getAttribute("alt"),
                            src:e.target.nextElementSibling.getAttribute("src"),
                            size:e.target.nextElementSibling.nextElementSibling.children[0].textContent,
                        }
                        images.splice(idx,1);
                        deletedID = idx;
                        e.target.parentElement.parentElement.remove();
                    }
                })
            })
          }

       },{once:true})
    });
}); 

undo.addEventListener("click",()=>{
    console.log(deletedID);
    if (lastDeleted==undefined) {
        window.alert("nothing deleted!");
    }
    else{
       wrapper.innerHTML = "";
       images.splice(deletedID,0,lastDeletedOBJ);
       images.forEach(({name,src,size})=>{
         wrapper.innerHTML += `<div class="col-3">
         <div class="my-card">
           <button class="btn btn-danger remove">X</button>
           <img src="${src}" alt="${name}">
           <p class="size"><span>${size}</span><span>KB</span></p>
         </div>
         </div>`
       });
       let removeButtons = []; 
            Array.from(wrapper.children).forEach((item)=>{
                removeButtons.push(item.children[0].children[0]);
            })
            removeButtons.forEach((btn,idx)=>{
                btn.addEventListener("click",(e)=>{
                    if (window.confirm("are you sure?")){
                        lastDeleted = e.target.parentElement.parentElement;
                        lastDeletedOBJ = {
                            name:e.target.nextElementSibling.getAttribute("alt"),
                            src:e.target.nextElementSibling.getAttribute("src"),
                            size:e.target.nextElementSibling.nextElementSibling.children[0].textContent,
                        }
                        images.splice(idx,1);
                        deletedID = idx;
                        e.target.parentElement.parentElement.remove();
                    }
                })
            })
    }
});

dropZone.addEventListener("dragover",(e)=>{
    e.preventDefault();
});

dropZone.addEventListener("drop",(e)=>{
    e.preventDefault();
    Array.from(e.dataTransfer.files).forEach(file => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
 
        fileReader.addEventListener("loadend",()=>{
           let src = fileReader.result;
           let size = Math.round(file.size/1024);
           let name = file.name;
           let type = file.type;
           
           if (!type.includes("image/")) {
             window.alert("wrong format!")
             return;
           }
           else{
             images.push({
                 name:name,
                 src:src,
                 size:size,
             })
             wrapper.innerHTML += `<div class="col-3">
             <div class="my-card">
               <button class="btn btn-danger remove">X</button>
               <img src="${src}" alt="${name}">
               <p class="size"><span>${size}</span><span>KB</span></p>
             </div>
             </div>`;
             upload.value = "";
 
             let removeButtons = []; 
             Array.from(wrapper.children).forEach((item)=>{
                 removeButtons.push(item.children[0].children[0]);
             })
             removeButtons.forEach((btn,idx)=>{
                 btn.addEventListener("click",(e)=>{
                     if (window.confirm("are you sure?")){
                         lastDeleted = e.target.parentElement.parentElement;
                         lastDeletedOBJ = {
                             name:e.target.nextElementSibling.getAttribute("alt"),
                             src:e.target.nextElementSibling.getAttribute("src"),
                             size:e.target.nextElementSibling.nextElementSibling.children[0].textContent,
                         }
                         images.splice(idx,1);
                         deletedID = idx;
                         e.target.parentElement.parentElement.remove();
                     }
                 })
             })
           }
 
        },{once:true})
     });
})