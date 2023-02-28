//найти элемент используя css селектор
let sayHelloBtn = document.querySelector("#say-hello");  //создаем переменную чо бы хранить кнопку  //query ищем элемент 


//изменить свойсто эл (содержимое, класс , итд)
sayHelloBtn.textContent = "SAY HELLO";
sayHelloBtn.className = "btn btn-red" //добавили класс к нопке хотя есть айди
sayHelloBtn.classList.add("btn", "btn-red"); //тоже класс создает //remove, toggle тоже методы

//изменить стили элемента
sayHelloBtn.style.color = "tomato";
sayHelloBtn.style.fontSize = "20px";

//не изменяемые свойста 
console.log(sayHelloBtn.clientTop);// показывает сколько пикселей со сначала стр
console.log(sayHelloBtn.getClientRects()); //

//создание эл состоит из двух частей
let exampleBtn = document.createElement("button");
document.body.append(exampleBtn); //доб на страницу в конце апенд
//document.body.prepend(exampleBtn);  в конце 

//удаление элемента
exampleBtn.remove();

//добавление слушателя событий 
//sayHelloBtn.addEventListener( "click" , function(event){  //если нажмем 
//  alert("hello");  //сработает название hello 
//});


//САМОСТОЯТЕЛЬНАЯ РАБОТА


//создать кнопку добавить ее к эл боди и изменить текст кнопку на example . что бы при нажатии оно исчезало 
let button = document.createElement("button");
document.body.append(button);
button.textContent = "example";
//добавить слушателей событийкот при нажатии удаляет кнопку
button.addEventListener("click", function () {
    button.remove();
})

//создатать ul и добавить к  body и доб 10 li внутри ul , создать ul > li из массива 
let list = ["apples" , "pears","oranges" , "peaches" ];
let ul = document.createElement("ul");
document.body.append(ul);
for(let i = 0; i < list.length ; i++){
 let item = document.createElement("li");
 item.textContent = list[i];
 ul.append(item);
}


//с index  создать в js массив из списка
let result = [];
let exampleArray = document.querySelector("#example li");
for (let i = 0; i < exampleArray.length; i++){
result.push(exampleArray[i].textContent);
}







//НОВАЯ ТЕМА













