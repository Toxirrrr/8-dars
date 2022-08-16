// Get elements from HTML
elButton = document.querySelector(".btn");
// let elUniWrapper = document.querySelector(".uni__wrapper");
// let elUniTemplate = document.querySelector("#uni__row").content;



// function renderUniversities(array, wrapper) {
//     wrapper.innerHTML = null;

//     let newFragment = document.createDocumentFragment();

//     for (const item of array) {
//         let newItem = elUniTemplate.cloneNode(true);
//         newItem.querySelector(".uni__name").textContent = item.name
//         newItem.querySelector(".uni__link").textContent = item.web_pages[0];
//         newItem.querySelector(".uni__link").href = item.web_pages[0];
//         newItem.querySelector(".uni__link").setAttribute("target", "blank")
//         newItem.querySelector(".image").src = item.url[0];
//         console.log(newItem);

//         newFragment.appendChild(newItem);
//     }
//     wrapper.appendChild(newFragment);
// }




let elImage = document.querySelector(".image");
let elBtn = document.querySelector(".btn");
let img = elImage;

// elBtn.addEventListener("submit", function(evt) {
//     evt.preventDefault()
//     fetch("https://api.thecatapi.com/v1/images/search")
//     .then(response => response.json())
//     .then(data => {
//         data.sort(function(a, b) {
//             console.clear()
//             console.log(data.title);
//             return b.cb_price - a.cb_price
//         })

//     });

// })
button = elButton

button.addEventListener("click", function(evt) {

    fetch("https://api.thecatapi.com/v1/images/search")
    .then(res => res.json())
    .then(data => img.src = data[0].url)
})