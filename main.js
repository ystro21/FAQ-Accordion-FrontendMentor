const cardQuestion = document.querySelectorAll(".card-question");

cardQuestion.forEach(question => {
    question.addEventListener("click", ()=>{
        if(question.classList.contains("active")){
            question.classList.toggle("active")
        } else {
            cardQuestion.forEach(question => question.classList.remove("active"))
            question.classList.add("active")
        }
    })
})