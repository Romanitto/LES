// function NamedOne(first, last) {
// // -- SHOULD be changed --
//     this.firstName = first;
//     this.lastName = last;
//     this.fullName = this.firstName + ' ' + this.lastName;
// }


// var namedOne = new NamedOne("Naomi", "Wang");

// console.log(namedOne);

// namedOne.firstName = "Borsh";

// console.log(namedOne.fullName);


// ===========================================

// function Person(name) {
//     this.myName = name;

//     this.greet = function(yourName){
//         return "Hello " + yourName + ", my name is " + this.myName;
//     }
// }


// var joe = new Person('Joe');
// console.log(joe.greet('Kate')); // should return 'Hello Kate, my name is Joe'
// console.log(joe.myName);



// ============================================


// function ToString(param) {
//   this.param = param;
  
  
//   this.toString = function () {
//     // if (Array.isArray(this.param)) {
//     //   return `'[${this.param}]'`;
//     // }
//     // return `'${this.param}'`;
//       return `${JSON.stringify(this.param)}`;
//   }
// }

// const obj = new ToString([Math.PI]);

// console.log(obj.toString());

// ===============================================================

// let s = '1 fdf 22 gfm 4 fkg';
// let pattern = /\D+/g;
// let s3 = s.split(pattern).filter(e => Number(e));
// let s2 = s.split(' ').filter(e => Number(e));
// let s1 = s.split(' ').filter(e => Number(e)).sort((a, b) => a - b);


// console.log(s1);
// console.log(s2);
// console.log(s3);
// console.log(JSON.stringify(s1) == JSON.stringify(s2));


// ================================================================

// let namu = [1, 2, 3, 5, 7, 8, 9];
// console.log(namu);

// let namu2 = namu.some((e, i, arr) => arr[i] === arr[i+1] - 2 && arr[i] === arr[i-1] + 2);
// console.log(namu2);

// ==================================================================

//let sot = 'G()()(al)';
// let res = '';

// let interp = (p) => {
//     p.split('').forEach((el, i, arr) => {
//         if (arr[i] === 'G') {
//             return res += 'G';
//         } else if (p[i] === '(' && p[i + 1] === ')') {
//             return res += 'o';
//         } else if (p[i] === '(' && p[i + 1] === 'a' && p[i + 2] === 'l' && p[i + 3] === ')') {
//             return res += 'al';
//         }
//     });
//     return res;
// }
// console.log(interp(sot));

// let sot1 = 'G()()(al)';
// let intPatt = (p) => {
//     let patt1 = /G/g;
//     let patt2 = /\(\)/g;
//     let patt3 = /\(al\)/g;
//     //p = JSON.stringify(p);
//     //return p.toString().replace(patt1, 'G').replace(patt2, 'o').replace(patt3, 'al');
//     return p.toString().replace('G', 'G').replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al');
// }
// console.log(intPatt(sot1));



// ================================================================

// let ass = [1, 2, 2, 3, 3, 3, 4];

// let count = [];
// let specNum = (arr) => {
//     return arr.filter(e => e === 4).length;
//     // arr.map(element => {
//     //     element.filter(e => e === element).length;
//     // });
//     // return arr;
// }

// console.log(specNum(ass));



// ===========================================================

let fru = {
    '1': 'kiwi',
    '2': 'pear',
    '3': 'kiwi',
    '4': 'banana',
    '5': 'melon',
    '6': 'banana',
    '7': 'melon',
    '8': 'pineapple',
    '9': 'apple',
    '10': 'pineapple',
    '11': 'cucumber',
    '12': 'pineapple',
    '13': 'cucumber',
    '14': 'orange',
    '15': 'grape',
    '16': 'orange',
    '17': 'grape',
    '18': 'apple',
    '19': 'grape',
    '20': 'cherry',
    '21': 'pear',
    '22': 'cherry',
    '23': 'pear',
    '24': 'kiwi',
    '25': 'banana',
    '26': 'kiwi',
    '27': 'apple',
    '28': 'melon',
    '29': 'banana',
    '30': 'melon',
    '31': 'pineapple',
    '32': 'melon',
    '33': 'pineapple',
    '34': 'cucumber',
    '35': 'orange',
    '36': 'apple',
    '37': 'orange',
    '38': 'grape',
    '39': 'orange',
    '40': 'grape',
    '41': 'cherry',
    '42': 'pear',
    '43': 'cherry',
    '44': 'pear',
    '45': 'apple',
    '46': 'pear',
    '47': 'kiwi',
    '48': 'banana',
    '49': 'kiwi',
    '50': 'banana',
    '51': 'melon',
    '52': 'pineapple',
    '53': 'melon',
    '54': 'apple',
    '55': 'cucumber',
    '56': 'pineapple',
    '57': 'cucumber',
    '58': 'orange',
    '59': 'cucumber',
    '60': 'orange',
    '61': 'grape',
    '62': 'cherry',
    '63': 'apple',
    '64': 'cherry',
    '65': 'pear',
    '66': 'cherry',
    '67': 'pear',
    '68': 'kiwi',
    '69': 'pear',
    '70': 'kiwi',
    '71': 'banana',
    '72': 'apple',
    '73': 'banana',
    '74': 'melon',
    '75': 'pineapple',
    '76': 'melon',
    '77': 'pineapple',
    '78': 'cucumber',
    '79': 'pineapple',
    '80': 'cucumber',
    '81': 'apple',
    '82': 'grape',
    '83': 'orange',
    '84': 'grape',
    '85': 'cherry',
    '86': 'grape',
    '87': 'cherry',
    '88': 'pear',
    '89': 'cherry',
    '90': 'apple',
    '91': 'kiwi',
    '92': 'banana',
    '93': 'kiwi',
    '94': 'banana',
    '95': 'melon',
    '96': 'banana',
    '97': 'melon',
    '98': 'pineapple',
    '99': 'apple',
    '100': 'pineapple',
}

function SubtractSum(n, obj) {
    //return n; // fruit name like "apple"
    do {
        if (n < 10) {
            return obj[n];
        }
        n -= n.toString().split('').reduce((a,b) => +a + +b,0);
      } while (n > 100);
      return obj[n];
}


// function SubtractSum(n, obj) {
//     //return n; // fruit name like "apple"
//     if (n > 9 && n < 10000) {
//         while (n > 9) {
//             n = n - n.toString().split('').reduce((a, b) => +a + +b, 0);
//             console.log(n);
//             n--;
//         }
//         return obj[n+1];
//     } else {
//         return obj[n];
//     }
    
// }

console.log(SubtractSum(99, fru));


