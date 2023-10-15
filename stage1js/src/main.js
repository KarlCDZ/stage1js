const lists = [
    {
        name: 'Vegetable',
        item: [
            'Carrot','Cucumber'
        ]
    },
    {
        name: 'Spices',
        item: [
            'Salt', 'Pepper', 'Chilli', 'Herbs', 'Curry'
        ]
    },
    {
        name: 'Fruits',
        item: [
            'Apple', 'Banana', 'Pear', 'Watermelon', 'Grape', 'Strawberry', 'Mango', 'Blackberry'
        ]
    }
];

const buttongroup = document.getElementById("buttongroup");

const listsect = document.getElementById("list");
const listnum = document.getElementById("listnum");

function addbuttons (lists) {
    for (let i=0; i< lists.length; i++) {
        let button = document.createElement('button');
        button.className = "listbutton highlight-false";
        button.innerText = `(${i+1}) ` + lists[i].name;
        button.addEventListener("click", () => {
            const listButtons = buttongroup.children;
            for (let i = 0; i < listButtons.length; i++) {
                listButtons[i].className = listButtons[i].className.replace('highlight-true', 'highlight-false');
            }
            button.className = button.className.replace('highlight-false', 'highlight-true');
            addli(lists[i].item);
        });
        buttongroup.appendChild(button);
    }
    console.log(lists);
}

function addli(itemlist) {
    listsect.innerHTML = `<ul></ul>`;
    listnum.innerText = `List (${itemlist.length})`;
    for (let i = 0; i < itemlist.length; i++) {
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
        listsect.appendChild(li);
    }
}

// onload press veg for default
document.body.onload = function () {
    addbuttons(lists);
    buttongroup.children[0].click();
}