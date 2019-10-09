// let str='muso'
// let str1 = str.split('')
// for(let i=0;i<str1.length/2;i++){

//     let temp=str1[i]
//     str1[i]=str1[str1.length-i-1]
//     str1[str1.length-i-1]=temp

// }
// console.log(str1)


// let num = 32243
// let str = num.toString()
// let strArray = str.split('')
// for( let i=0; i<strArray.length/2; i++) {

//     let temp = strArray[i]
//     strArray[i] = strArray[strArray.length-i-1]
//     strArray[strArray.length-i-1] = temp

// }
// let num1=strArray.join("")
// num1 = +num1
// console.warn(num1)
// console.warn(typeof num1)



function mathReverse(num) {             //ex1

    let ans = 0
    while (num > 0) {
        ans = (ans * 10) + num % 10
        num = Math.floor(num / 10)
    }

    return ans
}


function isPalindrome(str) {                                //ex2
    if (str === str.split('').reverse().join('')) {
        return true
    } else {
        return false
    }
}

function sortString(str) {                 //ex4

    return str.split('').sort().join('')
}


function longestWord(str) {                  //ex6
    let str1 = str.split(' ')
    let longest = str1.reduce(function (a, b) {
        if (a.length > b.length) {
            return a
        } else {
            return b
        }
    })
    return longest
}

function typeOfArgument(argument) {              //ex9
    return typeof argument
}




// let res = mathReverse(12345)
// let pal = isPalindrome("madam")
// let sortedString = sortString("dgaghrthgdc")
// const words = longestWord('Web Development Tutorial')
// const arg= typeOfArgument([5,7,0,3])



// console.warn(res)
// console.log(pal)
// console.log(sortedString)
// console.log(words)
// console.log(arg)





