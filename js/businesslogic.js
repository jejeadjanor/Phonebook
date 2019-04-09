//creating and add contacts to phonebook

class IndividualContact{
constructor(name,phoneNumber,email){
 this.name = name;
 this.phoneNumber = phoneNumber;
 this.email = email;
//  this.individualContact = individualContact;

}
 iContact(){
    let individualContact = [ ]
     individualContact.push(this.name)
     individualContact.push(this.phoneNumber)
     individualContact.push(this.email)

}

 phoneBook(individualContact){
    let phoneBookNumbers = []
for(let i=0; i<phoneBookNumbers.length; i++){
    if(individualContact[i] != phoneBookNumbers[i]){
        phoneBookNumbers.push(individualContact)
        JSON.stringify(phoneBookNumbers)
    }

}

}
storeContact(data){

    if(!this.storedContact()){
        let emptyContactArray = []
        emptyContactArray.push(data)
        let packedContact = JSON.stringify(emptyContactArray)
        localStorage.setItem("Phonebook", packedContact)
    }else{
        let getContact = this.storedContact()
        getContact.push(data)
        localStorage.setItem("Phonebook", JSON.stringify(getContact))
    }
    
}
storedContact(){
    let storedContact = localStorage.getItem("Phonebook")
    let getContactStored = JSON.parse(storedContact)
    return getContactStored
    
}
searchForContact(storedContact){
for(let i=0; i<storedContact.length; i++){
    if(storedContact[i]==value){
        return storedContact[i]
    }
}
return "not found"
}
deleteContact(){
    let storedContact = localStorage.getItem("Phonebook")
    let getContactStored = JSON.parse(storedContact)
    for(let i=0; i<getContactStored.length; i++){
        if(getContactStored){
          getContactStored.slice([i],1)
        }
    }
}

editContact(individualContact){
    let parseContact = JSON.parse(phoneBook)
    for(let i=0; i<phoneBookNumbers.length; i++){
        if(this.individualContact[i].name === individualContact[i].name){
            phoneBookNumbers.individualContact = this.name
        }else if(this.individualContact[i].phoneNumber === individualContact[i].phoneNumber){
            phoneBookNumbers.individualContact = this.phoneNumber
        }else{
            phoneBookNumbers.individual = this.email
        }
    }
}
}

// export default IndividualContact