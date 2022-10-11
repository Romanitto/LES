
const sideA = document.getElementById('side1');
const sideB = document.getElementById('side2');
const sideC = document.getElementById('side3');




function calcAreaOfTriangle() {
    
    let a = parseFloat(document.getElementById('side1').value);
    let b = parseFloat(document.getElementById('side2').value);
    let c = parseFloat(document.getElementById('side3').value);

    //console.log({a, b, c});

    let p = (a + b + c) / 2;
    //console.log(p)
    let result = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    document.getElementById('area').innerHTML = result;
}

// function paintTriangle() {
//     let canvas = document.getElementById('canvas');
//     let ctx = canvas.getContext('2d');
//     document.getElementById('canvas').setAttribute('style', `display: inline-block; width: ${parseFloat(document.getElementById('side1').value)}px; height: ${parseFloat(document.getElementById('side1').value)}px`);
//     let AB = parseFloat(document.getElementById('side1').value);
//     let BC = parseFloat(document.getElementById('side2').value);
//     let AC = parseFloat(document.getElementById('side3').value);

//     let A = [0, 0]; // начальные координаты
//     let B = [0, AB];
//     let C = [];

//     // вычисление третьей точки
//     C[1] = (AB * AB + AC * AC - BC * BC) / (2 * AB);
//     C[0] = Math.sqrt(AC * AC - C[1] * C[1]);



//     ctx.beginPath();
//     ctx.moveTo(A[0], A[1]);
//     ctx.lineTo(B[0], B[1]);
//     ctx.lineTo(C[0], C[1]);
//     ctx.lineTo(A[0], A[1]);
//     ctx.closePath();
//     ctx.fillStyle = 'blue';
//     ctx.fill();
//     //ctx.lineWidth = 10;
//     ctx.strokeStyle = "red";
//     ctx.stroke();
// }

function print() {
    let a = parseFloat(document.getElementById('side1').value);
    let b = parseFloat(document.getElementById('side2').value);
    let c = parseFloat(document.getElementById('side3').value);    
    
    let y = (c * c + b * b - a * a) / (2 * c),
        x = Math.sqrt(b * b - y * y);
    
    let A = [100+0, 100+0].join(),
        B = [100+0, 100+c].join(),
        C = [100+x, 100+y].join();
    
    let ABC = [A, B, C, A].join(' ');

    let width = 400,
        height = 400;
         
    let svg = d3.select("body").append("svg");
     
    svg.attr("height", height)
        .attr("width", width); 
    
    svg.append("polygon")
        .style("fill", "none")
        .style("stroke", "steelblue")
        .style("stroke-width", "2")
        .attr("points", ABC);
}



document.querySelector('button').onclick = calcAreaOfTriangle;
document.querySelector('button').addEventListener('click', () => {
    // paintTriangle();
    print();
});

sideA.addEventListener('keyup', calcAreaOfTriangle);
sideB.addEventListener('keyup', () => {calcAreaOfTriangle()});
sideC.addEventListener('keyup', () => { calcAreaOfTriangle() });


