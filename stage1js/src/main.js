const lists = [
    {
        name: 'Vegetable',
        item: [
            'Carrot', 'Cucumber'
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

const buttonGroup = document.getElementById('buttongroup');

const listSect = document.getElementById('itemlist');
const listNum = document.getElementById('listlength');

function addButton (lists) {
    for (let i = 0; i < lists.length; i++) {
        let button = document.createElement('button');
        button.className = 'inactive';
        button.innerText = `(${i + 1}) ` + lists[i].name;
        button.onclick = function () {
            buttonSwitch(button, lists[i].item);
        }
        console.log(button);
        buttonGroup.appendChild(button);
    }
    // console.log(lists);
}

function buttonSwitch (clicked, itemList) {
    const listButtons = buttonGroup.children;
    for (let i = 0; i < listButtons.length; i++) {
        listButtons[i].className = 'inactive';
    }
    clicked.className = 'active';
    listAdditem(itemList);
}

function listAdditem (itemlist) {
    listSect.innerHTML = `<ul></ul>`;
    listNum.innerText = `List (${itemlist.length})`;
    for (let i = 0; i < itemlist.length; i++) {
        let li = document.createElement('li');
        li.className = 'inactive';
        li.innerText = itemlist[i];
        listSect.appendChild(li);
    }
}

listSect.addEventListener("click", (e) => {
    if (e.target.className.includes('inactive')) {
        e.target.className = 'active';
    }
    else {
        e.target.className = 'inactive';
    }
})

// onload press veg for default
document.body.onload = function () {
    addButton(lists);
    buttonGroup.children[0].click();
}