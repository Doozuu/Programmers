let denum1 = 4;
let num1 = 15;
let denum2 = 6;
let num2 = 50;

// 최대공약수 구하는 함수
function GCD(num1, num2){
    if(num1 >= num2){
        if(num1 % num2 == 0){
            return num2;
        }else{
            return GCD(num2, num1 % num2);
        }
    }else if(num1 < num2){
         if(num2 % num1 == 0){
             return num1;
        }else{
             return GCD(num1, num2 % num1);
        }  
    }
}

// 분자 & 분모 구하기
let denum = denum1 * num2 + denum2 * num1; // 분자
let num = num1 * num2; // 분모

console.log(denum) // 290
console.log(num) // 750

// 분자 & 분모의 최대공약수 구하기
let num_gcd = GCD(denum, num); 

console.log(num_gcd); // 10

// 기약분수 만들기
let answer = [denum/num_gcd, num/num_gcd];

console.log(answer); //[29,75]
