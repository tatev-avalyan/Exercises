arr =  [5, 9, 8, 2, 3, 5, 2, 2, 6, 2, 4, 6, 8]
arr1 = [1, 2, 3, [4, 5]]
arr2 = [-4, -2, 7, 2, 0, -3, 8, 10, 34]
arr3 = a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]
let text = 'Tatev Avalyan'
obj = {
    a: 1,
    b: "gdg"
}



function is_Array(input) {   //ex1

    let isArray = Array.isArray(input)

    return isArray

}

function cloneArray(arr) {   //ex2
    let clone = [...arr]
    return clone
}

function getFirstElementOfArray(arr) {    //ex3
    let n = arr[0]
    return n
}


function getLastElementOfArray(arr) {     //ex4
    let n = arr[arr.length - 1]
    return n
}


function joinElementsOfArray(arr) {       //ex5
    let join1 = arr.join(",")
    let join2 = arr.join()
    let join3 = arr.join('+')

    return [join1, join2, join3]
}



function sortItemsOfAnArray(arr) {       //ex7
    let sort = arr.sort(function (a, b) {
        return a - b
    })
    return sort
}


function swapCase() {                                   //ex9
    let swap = text.split('').map(function (c) {

        return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()

    }).join('')

    return swap
}

function sumOfNumbers(arr) {            //ex11
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 2)
    }

    return sum
}

function sumAndCountsOfNumbers(arr) {     //ex12
    let sum = 0
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 2)
        count++
    }

    return { sum, count }
}


function indexOfItems(arr, value) {          //ex18
    return arr.indexOf(value)
}


function sumOfTwoArrayValuesWithTheSameIndex(firstArr, secondArr) {
    let sum = 0
    let arr5=[]
    for (let i = 0; i < firstArr.length; i++) {
        for (let j = 0; j < secondArr.length; j++) {
            if (i === j) {
                sum = firstArr[i] + secondArr[j]
               arr5.push(sum)
            }
        }
        
        return arr5
    }       
}



// const isArr= is_Array(arr)
// const isArr1=is_Array(obj)
// const clonedArray=CloneArray(arr)
// const clonedArray1=CloneArray(arr1)
// const first=getFirstElementOfArray(arr)
// const last= getLastElementOfArray(arr)
// const joined=joinElementsOfArray(arr)
// const sortedArray=sortItemsOfAnArray(arr2)
// const swap=swapCase(text)
// const sumSquare=sumOfNumbers(arr)
// const sumAndCount=sumAndCountsOfNumbers(arr)
// const index=indexOfItems(arr,9)
// const sum = sumOfTwoArrayValuesWithTheSameIndex(arr, arr2)




// console.log(isArr)
// console.log(isArr1)
// console.log(clonedArray)
// console.log(clonedArray1)
// console.log(first)
// console.log(last)
// console.log(joined)
// console.log(sortedArray)
// console.log(swap)
// console.log(sumSquare)
// console.log(sumAndCount)
// console.log(index)
// console.log(sum)