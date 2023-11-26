//1) ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: არგუმენტად გადაეცით ეს მასივი:10, 50, 6, 7, 8, 11, 6, 3, 9
function sum(...numbers) {
    let sumItem = 0
    for (let items of numbers) {
        sumItem += items
    }
    return sumItem
}
let sumresult = sum(0, 50, 6, 7, 8, 11, 6, 3, 9)
console.log(sumresult);

//2) // ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 
// 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }

  function userMen(object1) {
    if (object1.isloggedin == true) {
        return `${object1.firstname} ${object1.lastname}`
    } 
        return false
  }
  let resultObject1 = userMen(user)
  console.log(resultObject1);

//3) შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:
function maxNumber(...numbers2) {
    let maxValue = 0;
    for (let element of numbers2) {
      if (element > maxValue) {
        maxValue = element;
      }
    }
    return maxValue;
  }
  let resultMaxNumber = maxNumber(2, 4, 6, 8, 10, 9, 5, 7, 11, 3, 1,);
  console.log(resultMaxNumber);
  
// 4) დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; 
// თუ ლუწია დააბრუნოს - this number is even‘; თუ კენტია დააბრუნოს - this number is odd;

function evenOdd(numb) {
    if (numb %2 == 1) {
        return `this number is even`
    }
    return `this numer is odd`
}
let resultNumber = evenOdd(32)
console.log(resultNumber);
   
//5) მოცემულია მასივი:
// for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1
let array = [1,2,3,4,5]; 
for (let a =array.length-1; a >= 0; a-- ) {
    let element12 = array[a];
    console.log(element12);
}
//6) ფუნქციის საშუალებით გამოთვალეთ უსერის ასაკი ( არგუმენტად გადაეცით ნებისმიერი რიცხვი) და დაამატეთ შემდეგი პირობა, 
// თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი. 
// ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;

let userAgefunc = (birthYear, yearNow) => {
  let userAge = yearNow - birthYear;
  let resultOfAge = userAge > 18 ? "სრულწლოვანი" : "არასრულწლოვანი";
  return resultOfAge;
};

let logResult = userAgefunc(1990, 2023);
console.log(logResult);