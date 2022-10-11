window.addEventListener("DOMContentLoaded", () => {
const btn = document.querySelector(".keys"),
    display = document.querySelector(".display > input");

const calc = {
    value1: "",
    value2: "",
    sign: "",
    finsh: false,
    memory: ""
}
//функція для показу на дісплей
function show(value, el) {
    el.value = value;
}
//Натиск на будь-яку кнопку
btn.addEventListener("click", function (e) {

    if (!e.target.classList.contains("button")) return;

    //Натиск на кнопку с
    if (e.target.classList.contains("c")) {
        calc.value1 = "",
        calc.value2 = "",
        calc.sign = "",
        display.value = ""
    };

    let key = e.target.value;

    //Умова якщо перша кнопка 0 і друга кнопка 0
    if (key == "0" && calc.value1 == "0" || key == "0" && calc.value1 != "" && calc.value2 == "0") {
        return;
    };


    //Умова якщо перша кнопка 0 а друга не 0
    if (key != "0" && key != "." && calc.value1 == "0") {
        calc.value1 = key,
        display.value = key
        return;
    };
    //Умова якщо друга кнопка 0 а друга не 0
    if (key != "0" && key != "." && calc.value2 == "0" && calc.value1 != "") {
        calc.value2 = key,
        display.value = key
        return;
    };

    //Умова якщо перша кнопка ..
    if (key == "." && calc.value1.includes('.') && calc.sign == "") {
        calc.value1 = calc.value1,
        display.value = calc.value1
        return;
    };
    //Умова якщо друга кнопка ..
    if (key == "." && calc.value2.includes('.') && calc.value2 != "" && calc.value1 != "" && calc.sign != "") {
        calc.value2 = calc.value2,
        display.value = calc.value2
        return;
    };

    //Умова якщо перша кнопка не 0 а друга .
    if (key == "." && calc.value1 != "0" && calc.sign == "") {
        calc.value1 = calc.value1 + '.',
        display.value = calc.value1
        return;
    };
    //Умова якщо друга кнопка не 0 а друга .
    if (key == "." && calc.value2 != "0" && calc.value2 != "" && calc.value1 != "" && calc.sign != "") {
        calc.value2 = calc.value2 + '.',
        display.value = calc.value2
        return;
    };


    //Умова якщо перша кнопка 0 а друга .
    if (key == "." && calc.value1 == "" || key == '.' && calc.value1 == "0") {
        calc.value1 = "0.",
        display.value = '0.'
        return;
    };
    //Умова якщо друга кнопка 0 а друга .
    if (key == "." && calc.value1 != "") {
        calc.value2 = "0.",
        display.value = '0.'
        return;
    };


    //Умова якщо натиск на кнопки 1.2.3.4.5.6.7.8.9.0.
    if (e.target.classList.contains("black") && !e.target.classList.contains("c")) {
        //Перше число
        if (calc.value2 == "" && calc.sign == "") {
            calc.value1 += key;
            console.log(calc.value1, calc.value2, calc.sign);
            show(calc.value1, display)
         }
         //Друге число
        else if (calc.value1 !== "" && calc.value2 !== "" && calc.finsh) {
            calc.finsh = false;
            calc.value2 = key;
            show(calc.value2, display)
        }
        else {
            calc.value2 += key;
            show(calc.value2, display)
            document.querySelector(".button.orange").disabled = false;
        };
        console.log(calc.value1, calc.sign, calc.value2);
        return;
    };

    //Умова для натиску кнопок m+ m- mrc
    if (e.target.classList.contains("gray")) {
        if (e.target.value == "m+") {
            calc.memory = display.value;
            display.value = "";
            display.placeholder = "m";
           }
       else if (e.target.value == "m-") {
            calc.memory = calc.memory - display.value;
        }
        else {
            display.value =calc.memory;
            e.target.onclick = calc.memory = 0;
            display.placeholder = "";
            
           return;
        };
    };

    //Умова для натиску кнопок * - + /
    if (e.target.classList.contains("pink")) {
        calc.sign = key;
        console.log(calc.value1, calc.value2, calc.sign);
        return;
    };

    // Умова для =
    if (key == "=") {
        //Перше +-*/
        if (calc.value1 == "" && calc.sign != "") {
            calc.value1 = '0';
        }
        //if (calc.value2 == ""&& calc.sign != "" && calc.value1 != "") return;
        switch (calc.sign) {
            case "+":
                calc.value1 = parseFloat(calc.value1) + parseFloat(calc.value2);
                calc.sign = "";
                break;
            case "-":
                calc.value1 = calc.value1 - calc.value2;
                calc.sign = "";
                break;
            case "*":
                calc.value1 = calc.value1 * calc.value2;
                calc.sign = "";
                break;
            case "/":
                if (calc.value2 == "0") {

                    calc.value1 = "",
                    calc.value2 = "",
                    calc.sign = "",
                    display.value = "ERROR";
                    
                    return;
                }
                calc.value1 = calc.value1 / calc.value2;
                calc.sign = "";
                break;

        }
        calc.finsh = true;
    };

    //Умова для += -= *= /=     НЕ ПРАЦЮЄ
    // if (key == "+" && calc.sign != "" || key == "-" && calc.sign != "" || key == "*" && calc.sign != "" || key == "/" && calc.sign != "") {
    //     //Перше +-*/
    //     if (calc.value1 == "" && calc.sign != "") {
    //         calc.value1 = '0';
    //     }
    //     switch (calc.sign) {
    //         case "+":
    //             calc.value1 = parseFloat(calc.value1) + parseFloat(calc.value2);
    //             calc.sign = key;
    //             break;
    //         case "-":
    //             calc.value1 = calc.value1 - calc.value2;
    //             calc.sign = key;
    //             break;
    //         case "*":
    //             calc.value1 = calc.value1 * calc.value2;
    //             calc.sign = key;
    //             break;
    //         case "/":
    //             if (calc.value2 == "0") {
    //                 calc.value1 = "",
    //                 calc.value2 = "",
    //                 calc.sign = "",
    //                 display.value = "ERROR";
           
    //                 return;
    //             }
    //             calc.value1 = calc.value1 / calc.value2;
    //             calc.sign = key;
    //             break;
    //     }
    //     calc.finsh = true;
    // };

    show(calc.value1, display)
    console.log(calc.value1, calc.value2, calc.sign);
})
})
