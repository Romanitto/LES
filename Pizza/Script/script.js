
window.addEventListener('DOMContentLoaded', () => {
    //Створюємо масив із кнопок "радіо", щоб використати під час додавання події "клік".
    // Створюємо масив із інгредієнтів для використання під час додавання події "драг та дроп".
    const [...radioInputs] = document.querySelectorAll("label.radio"), 
    [...ingredients] = document.querySelectorAll(".draggable"); 

    // Створюємо змінні для додавання та відображення ціни і назв вибраних інгредієнтів.
    let priceSpan = document.getElementById("price-span"),
        sauceSpan = document.getElementById("sauce-span"),
        topingSpan = document.getElementById("toping-span"),
        cake = document.getElementById("cake");
    
    let cena = 100;
    
    // За допомогою ф-ї "forEach" додаїмо до кожного елемента масива подію "клік", при спрацюванні якої, додається і відображається ціна при виборі розміру піци.
    radioInputs.forEach((element) => {
        element.addEventListener("click", (element) => {
            if (element.target.id == "small") {
                priceSpan.innerText = `${cena - cena / 2} грн`;
            } else if (element.target.id == "mid") {
                priceSpan.innerText = `${cena - cena / 4} грн`;
            } else if (element.target.id == "big") {
                priceSpan.innerText = `${cena} грн`;
            }
        })
    });

    // За допомогою ф-ї "forEach" на вибраному елементі масива викликаємо подію "dragstart" для переносу вибраного елемента.
    ingredients.forEach((element) => {
        element.addEventListener("dragstart", (ev) => {
            //element.style.border = '3px dotted #000';
            ev.dataTransfer.setData("text", ev.target.id);
            ev.dataTransfer.effectAllowed = "copy";
        });
        // В кінці першої викликаної події перевіряємо, чи правильний елемент вибрано.
        element.addEventListener('dragend', function () {
            //this.style.border = '';
        }, false);
    });

    //Заходимо в область цільвого елементу
    cake.addEventListener(
      'dragenter',
      function () {
        //this.style.border = '3px solid red';
      },
      false,
    );

    //Покидаємо область цільвого елементу
    cake.addEventListener(
      'dragleave',
      function () {
        //this.style.border = '';
      },
      false,
    );

    //Знаходимось над областю цільвого елементу
    cake.addEventListener('dragover', function (e) {
        if (e.preventDefault) e.preventDefault();
        return false;
      },
      false
    );

    // Переносний елемент опустився над цільовою областю.
    cake.addEventListener("drop", function (e) {
        if (e.preventDefault) e.preventDefault();
        if (e.stopPropagation) e.stopPropagation();
        let id = e.dataTransfer.getData("text");
        let copyImg = document.createElement("img");
        let originImg = document.getElementById(id);
        copyImg.src = originImg.src;
        cake.appendChild(copyImg);
        

        // Під час опускання елементу спрацьовує умовний цикл для додавання назви вибраного інгредієнта і додавання ціни.
        switch (id) {
            case "sauceClassic":
                sauceSpan.innerHTML += `Кетчуп<br>`;
                priceSpan.innerText = `${parseFloat(priceSpan.innerText.slice(0, -4)) + 20} грн`;
                break;
            case "sauceBBQ":
                sauceSpan.innerHTML += `BBQ<br>`;
                priceSpan.innerText = `${parseFloat(priceSpan.innerText.slice(0, -4)) + 30} грн`;
                break;
            case "sauceRikotta":
                sauceSpan.innerHTML += `Рікотта<br>`;
                priceSpan.innerText = `${parseFloat(priceSpan.innerText.slice(0, -4)) + 35} грн`;
                break;
            case "moc1":
                topingSpan.innerHTML += `Сир звичайний<br>`;
                priceSpan.innerText = `${parseFloat(priceSpan.innerText.slice(0, -4)) + 40} грн`;
                break;
            case "moc2":
                topingSpan.innerHTML += `Сир фета<br>`;
                priceSpan.innerText = `${parseFloat(priceSpan.innerText.slice(0, -4)) + 45} грн`;
                break;
            case "moc3":
                topingSpan.innerHTML += `Моцарелла<br>`;
                priceSpan.innerText = `${parseFloat(priceSpan.innerText.slice(0, -4)) + 50} грн`;
                break;
            case "telya":
                topingSpan.innerHTML += `Телятина<br>`;
                priceSpan.innerText = `${parseFloat(priceSpan.innerText.slice(0, -4)) + 70} грн`;
                break;
            case "vetch1":
                topingSpan.innerHTML += `Помідори<br>`;
                priceSpan.innerText = `${parseFloat(priceSpan.innerText.slice(0, -4)) + 20} грн`;
                break;
            case "vetch2":
                topingSpan.innerHTML += `Гриби<br>`;
                priceSpan.innerText = `${parseFloat(priceSpan.innerText.slice(0, -4)) + 25} грн`;
                break;

            default: return;
        }
    });

    // Викликаємо на область наведення мишки подію для неможливості зайти в її межі.
    const banner = document.getElementById("banner");
    banner.addEventListener("mouseover", () => {
    banner.style.bottom = Math.floor(Math.random() * 80) + "%";
    banner.style.right = Math.floor(Math.random() * 80) + "%";
    })

    banner.addEventListener("mouseout", (e) => {
    banner.style.bottom = Math.floor(Math.random() * 80) + "%";
    banner.style.right = Math.floor(Math.random() * 80) + "%";
    })

    // Створюємо масив всіх інпутів.
    const [...allInputs] = document.querySelectorAll("input");
    localStorage.user = JSON.stringify([]); // створюємо місце для збереження інформації користувачів.
    
    // Створюємо клас для нових користувачів
    class User {
        constructor(name, phone, email) {
            this.name = name;
            this.phone = phone;
            this.email = email;
            this.status = true;
        }
    }
    
    // Створюємо новий масив із інпутів, які будуть отримувати інформацію від користувача
    let inputsRez = allInputs.map((e) => {
        return e;
    }).filter((e) => {
        return e.type != "radio" && e.type != "reset" && e.type != "button";
    });
    
    // Створюємо функцію для валідації введених даних користувачем.
    const validate = (target) => {
        switch (target.name) {
            case "name":
                return /^[А-яA-z]{2,}$/i.test(target.value);
            case "phone":
                return /^\+380\d{9}$/.test(target.value);
            case "email":
                return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(target.value);
            default:
                throw new Error("Невірний виклик регулярного виразу!");
        }
    }
    
    inputsRez.forEach((e) => {
        e.addEventListener("change", (event) => {
            console.log(validate(event.target))
        })
    })
    
    let btnSub = document.querySelector("[type=button]");
    // Додаємо подію при натисканні на кнопку підтвердження, яка перевіряж валідацію
    btnSub.addEventListener("click", () => {
        let rez = inputsRez.map((e) => {
            return validate(e);
        });
    // Створюємо умову, при якій, якщо інформація заповнена вірно, відсилається в LocalStorage
        if (!rez.includes(false)) {
          window.location.replace(
            'http://127.0.0.1:5500/12_Lesson%2012/homework/pattern%20pizza/thank-you.html',
          );
          location.href = './thank-you.html';
        } else {
          alert('Введіть вірні данні');
        }
    });
    
    // Створюємо подію для видалення інформації при натисканні на кнопку ресет.
    let btnReset = document.querySelector("[type=reset]");
    btnReset.addEventListener("click", () => {
        inputsRez.forEach((e) => {
            e.value = "";
        })
    });
    











})