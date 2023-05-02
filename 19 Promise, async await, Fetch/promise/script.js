// const promise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject('error message');
//     }, 2000);
// });

// promise.then((data)=>{
//     data+=2;
//     return data;
// }).then((newData)=>{
//     console.log(newData);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log('this is finally block');
// })

// try {
//     let a = 4;
//     throw new Error("error message!")
// } catch (error) {
//     console.error(error);
// }



let promTitle = document.querySelector("#promise");
let asyncTitle = document.querySelector("#async");

function g(num) {
    return new Promise((res,rej)=>{
        if (num!==undefined) {
            res(num);
        }
        else{
            rej("number is not defined!")
        }
    });
}

function gPromise() {
    g().then((data)=>{
        promTitle.textContent = data;
        promTitle.style.color = "green";
    }).catch((err)=>{
        promTitle.textContent = err;
        promTitle.style.color = "red";
    })
}

async function gAsync() {
    try {
        let result = await g(22);
        asyncTitle.textContent = result;
        asyncTitle.style.color = "green";
    } catch (error) {
        asyncTitle.textContent = error;
        asyncTitle.style.color = "red";
    }
}

gPromise();
gAsync();