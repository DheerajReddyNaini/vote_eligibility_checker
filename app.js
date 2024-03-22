const name = "Dheeraj Reddy"
const age = 21

console.log("script test")

function vote_checker(){
    const age = parseInt(document.getElementById("age").value)
    const name = document.getElementById("name").value
    min_age = 18

    if (age<=0){
        document.getElementById("result").innerText = `${name}, Enter a valid age!`
    }
    else if(name == ''){
        document.getElementById("result").innerText = `Enter a valid name and age!`
    }
    else if(isNaN(age)){
        document.getElementById("result").innerText = `Enter a valid age!`
    }
    else{
        if (age>=18){
            document.getElementById("result").innerText = `${name}, You're Eligible to Vote.`
        }
        else{
            document.getElementById("result").innerText = `${name}, You're not Eligible to Vote.`
        }
    }
}