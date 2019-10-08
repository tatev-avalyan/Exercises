let student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};
let library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

   let arr1= [6,4,0, 3,-2,1]

   var library1 = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];



function getObjectKeys(obj){     //ex1
    let getKeys=Object.keys(obj)
    return getKeys
}

function delObjectProperty(obj){      //ex2
    delete obj.rollno
    return obj
}

function getObjectLength(obj){             //ex3 
     return  Object.keys(student).length
   
}

function getObjectsWithReadingStatus(arr){         //ex4
     let result=arr.filter(obj => {

         return obj.readingStatus===true
     });

     return result
}

function getVolumeOfCylinder(thisHeight,thisRadius){   //ex5

    let volume=Math.PI*thisHeight*Math.pow(thisRadius,2)

    return volume
}

function arrSort(arr){                                   //ex6
    let sort=arr.sort(function(a,b){
        return a-b
    });

    return sort
}


function getCircleParams(radius){      //ex9
    let area=Math.PI*Math.pow(radius,2)
    let perimeter=2*Math.PI*radius
    return {area, perimeter}
}



function sortObjectsInArray(arr){      //10
  let sort=arr.sort(function(a,b){

      return b.libraryID-a.libraryID
  })

  return sort
}

function getObjPropertyValues(obj){       //ex14
    let values=Object.values(obj)
    return values
}


function ConvertAnObjectIntoAList(obj){     //ex15

    return Object.entries(obj)
}




// const getKeys=getObjectKeys(student)
// const delObjProp=delObjectProperty(student)
// const length= getObjectLength(student)
// const  readingStat= getObjectsWithReadingStatus(library)
// const cylVol=getVolumeOfCylinder(4,5)
// const sortedArray=arrSort(arr1)
// const areaAndPer=getCircleParams(5)
// const sortedObject=sortObjectsInArray(library1)
// const value=getObjPropertyValues(student)
// const convert= ConvertAnObjectIntoAList(student)


// console.log(getKeys)
// console.log(delObjProp)
// console.log(length)
// console.log(readingStat)
// console.log(cylVol)
// console.log(sortedArray)
// console.log(areaAndPer)
// console.log(sortedObject)
// console.log(value)
// console.log(convert)
