function sum(num1: number, num2: number) {



    if (typeof num1 !== 'number' && typeof num2 !== 'number') {

        throw new Error('Caught an Error')
    }



    return num1 + num2;



}

const total = sum(3, 5);

console.log(total)