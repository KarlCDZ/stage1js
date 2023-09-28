const veglist = ['Carrot', 'Cucumber'];
const spicelist = ['Salt', 'Pepper', 'Chilli', 'Herbs', 'Curry'];
const fruitlist = ['Apple', 'Banana', 'Pear', 'Watermelon', 'Grape', 'Strawberry', 'Mango', 'Blackberry'];

const list = document.getElementById("list");
const listnum = document.getElementById("listnum");
const vegbut = document.getElementById("vegbut");
const spicebut = document.getElementById("spicebut");
const fruitbut = document.getElementById("fruitbut");

vegbut.addEventListener("click", () => {
    list.innerHTML = `<ul></ul>`;
    vegbut.className = "listbutton highlight-true"
    spicebut.className = "listbutton highlight-false";
    fruitbut.className = "listbutton highlight-false";
    listnum.innerText = `List (${veglist.length})`;

    addli(veglist);
})

spicebut.addEventListener("click", () => {
    list.innerHTML = `<ul></ul>`;
    vegbut.className = "listbutton highlight-false"
    spicebut.className = "listbutton highlight-true";
    fruitbut.className = "listbutton highlight-false";
    listnum.innerText = `List (${spicelist.length})`;

    addli(spicelist);
})

fruitbut.addEventListener("click", () => {
    list.innerHTML = `<ul></ul>`;
    vegbut.className = "listbutton highlight-false"
    spicebut.className = "listbutton highlight-false";
    fruitbut.className = "listbutton highlight-true";
    listnum.innerText = `List (${fruitlist.length})`;

    addli(fruitlist);
})

function addli(itemlist) {
    for (let i = 0; i < itemlist.length; ++i) {
        let li = document.createElement('li');
        li.className = "item highlight-false";
        li.addEventListener("click", () => {
            if (li.className.includes('highlight-false')) {
                li.className = li.className.replace('highlight-false', 'highlight-true');
            }
            else {
                li.className = li.className.replace('highlight-true', 'highlight-false');
            }
        });
        li.innerText = itemlist[i];
        list.appendChild(li);
    }
}

// onload press veg for default
document.body.onload = function () {
    vegbut.click();
}