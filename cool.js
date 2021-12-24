var button = document.getElementById('button');
var list = document.getElementById('list');

// console.log(list);
// console.log(button);

button.onclick = function() {
    var more = document.createElement("ul");
    var moreImage = document.createElement("img");
    moreImage.src = "chicken/coolNugget.jpg";
    moreImage.style = "width: 100px; height: 100px"
    more.appendChild(moreImage)
    list.appendChild(more)
}

button.click = function() {
    button.style.filter = NodeFilter;
}