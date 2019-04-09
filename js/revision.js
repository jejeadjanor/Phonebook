function searchName(name){

    let names = ['sayon', 'jemima', 'mosses', 'williams', 'nick']
    // console.log(names.length)
    
    for(let i=0; i<names.length; i++){
    if(name === names[i]){
        return names[i]
    }
    }
    return 'Not found' 
    };
    
    // console.log(searchName('williams'))


function reverseAnArray(arr){
let temp = []
let len = arr.length
    for(let i=0; i<len; i++){
           let temp1 = arr.pop()
             temp.push(temp1)


    }
return temp

}
 
console.log(reverseAnArray( ['sayon', 'jemima', 'mosses', 'williams', 'nick']))

function reverseAString(string){
    let len = string.length
    for(let i=0; i<len ; i++){
    //    return     string.reverse()
        
    }
}

console.log(reverseAString('jemima'))



function elevator(left, right, call){


    if(left==0 && right==2 && call==1){
return left;
    }
    if (left==2 && right==0 && call==1){
return right;
    }
else {return right;}
    }



console.log(elevator(1,2,0))

function anotherElevator(left, right, call){
    
    leftDist= Math.abs(call - left)
    rightDist = Math.abs(call- right)
    if(leftDist>rightDist){
        return 'right '
    }
    else if(leftDist<rightDist){
        return 'left' 
    }
   else{return 'right'}
}

console.log(anotherElevator(1,0,2))


function evenNumber(number){
    let numberSplit = number.split('')
    // console.log(numberSplit)

let result = ''

    for(let i=0; i< numberSplit.length; i++){
        if(numberSplit[i]%2 == 0 && numberSplit[i+1]%2==0){
            temp = numberSplit[i].concat('-');
            result+=temp

        }else if(numberSplit[i]%2 == 1 && numberSplit[i+1]%2==1){
            temp1 = numberSplit.splice(i,1)
            result+=temp
        }
        
        }
        return result
    }



console.log(evenNumber('024613828'))//(02-4-6138-2-8)





function evenNumbers(val){
    let value = String(val)
    let result = ''
    let temp = [value[0]]
    for(let i=0; p<value.length; i++){
        if (value[p-1]%2===0 && value[p]%2===0){
            temp.push('-', value[p])
        }else{
            temp.push(value[p])
        }
    }
    return temp.join('')
}

// let a = 3;
// let b = 5;
// let c = 7;

// console.log(a)
// setTimeout(()=>{
//     console.log(b)
// }, 5000);

// console.log(c)



let name = 'sayon'

function detectCharacter(name){
    if(name.charAt(0)===name.charAt(0).toLowerCase()){
        console.log('yes')
    }else{console.log('no')}
}

console.log(detectCharacter('sayon'))




function changeCase(sentence){
    // let sentenceSplit = sentence.split('')
    // console.log(sentenceSplit)
    // let i=0
    let temp =""
    for(let i =0; i<sentence.length; i++){
    if(sentence.charAt(i)===sentence.charAt(i).toLowerCase()){
temp +=sentence.charAt(i).toUpperCase()
    }
else(temp+=sentence.charAt(i).toLowerCase())}


return temp
}

console.log(changeCase('The Quick Brown Fox'))//(tHE qUICK bROWN fOX)

console.log(changeCase('This is Kofi. Kofi is a boy.'))



let values = [2,2,3,5,5,9,12,45,55,3,3,]
function numberMode(values){
    let sortedValues = values.sort()
    console.log(sortedValues)
    let count = 0
    let result = []
    
    for(let i= 0; i<1; i++){
        for(let j=i;j<values.length; j++ ){
        if([i]=[j]){
             count++
             result.push(count)
            
        }else{count+=1}
    }
}
 
    return result
}

console.log(numberMode([2,2,3,5,5,9,12,45,55,3,3,]
    ))


    //project: smart farming using arduino

    function checkValueMode(data){
        let tempCount = 0
        let tempVar = 0
        let result = []
        let counted = []
        while(tempVar !== data.length){for(let i =0; i< data.length; i++){
            if(data[i]===data[tempVar]){
                tempCount ++
                result[tempVar]=tempCount
                counted.push(data[i])
                 
                }
            }
        }
        tempVar++
        tempCount=0

        }
        return result
    }


    console.log(checkValueMode([2,2,3,5,5,9,12,45,55,3,3,]
        ))


        