

 
// import IndividualContact from 'businesslogic'


let addName = document.getElementById('name')

let addPhoneNumber = document.getElementById('phoneNumber')

let addEmail = document.getElementById('email')

let clickSave = document.getElementById('save')

let addSearch = document.getElementById('search')


let contact = new IndividualContact()


refreshUI()
function refreshUI(){
    let storingContact = contact.storedContact()
    if(storingContact){ 
for(let i=0; i<storingContact.length; i++){
    let ul = document.getElementById('contactList')
    let newLi = document.createElement('li')
    let storage = document.createTextNode('Name:  '+ storingContact[i].name+'      Phone number: ' +storingContact[i].phoneNumber+ '     Email: ' + storingContact[i].email )
    newLi.appendChild(storage)
    ul.appendChild(newLi)

    let addSpan = document.createElement('span')
    let textSpan = document.createTextNode('')
    addSpan.appendChild(textSpan)
    newLi.appendChild(addSpan)
    addSpan.className = 'fa fa-times'
   
    
}
}


}


clickSave.addEventListener('click', () => {
    if(validateNewContact(addName.value, addPhoneNumber.value, addEmail.value)){
      addNewContact();
    
    }
})

addSearch.addEventListener('submit',() =>{
    searchForContact();
})
function validateNewContact(nameInput , phoneNumberInput, emailInput){
    if(nameInput === '' && phoneNumberInput ==='' && emailInput === ''){
        addName.style.borderColor = 'red'
        addPhoneNumber.style.borderColor = 'red'
        addEmail.style.borderColor = 'red'

        return false
    }
    else{
        return true
    }
}


function addNewContact(){

    let data = {
        name: addName.value,
        phoneNumber: addPhoneNumber.value,
        email: addEmail.value
    }
    contact.storeContact(data)
    window.location.reload()
   
    addName.value = '' 
    addPhoneNumber.value = ''
    addEmail.value = ''

}
