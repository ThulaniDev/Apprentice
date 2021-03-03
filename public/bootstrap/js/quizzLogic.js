//assigning a status column value
const startQuiz = document.querySelector('#start-Quiz')
startQuiz.addEventListener('click', (e)=>{
   
    //get the status column
    const status = document.querySelector('#status')
    status.textContent = "Attempted"
})
//getting all the ul tags 
let choices = [{
        question1:[document.querySelectorAll('#Q1-answer')]
    },
    {
        question2:[document.querySelectorAll('#Q2-answer')]
    },
    {
        question3:[document.querySelectorAll('#Q3-answer')]
    },
    {
        question4:[document.querySelectorAll('#Q4-answer')]
    },
    {
        question5:[document.querySelectorAll('#Q5-answer')]
    },
]


//looping through the choices
let question1Answers = []
let question2Answers  = []
let question3Answers  = []
let question4Answers  = []
let question5Answers  = []



choices.forEach((choice)=>{
    if(choice.question1){
        choice.question1.forEach((item)=>{
            for(let a = 5; a<= item.length; a++){
                question1Answers.push(item[a])
                if(a === 9){
                    break
                }
            }
        })        
    }
    if(choice.question2){
        choice.question2.forEach((item)=>{
            for(let a = 5; a<= item.length; a++){
                question2Answers.push(item[a])
                if(a === 9){
                    break
                }
            }
        })        
    }if(choice.question3){
        choice.question3.forEach((item)=>{
            for(let a = 5; a<= item.length; a++){
                question3Answers.push(item[a])
                if(a === 9){
                    break
                }
            }
        })        
    }if(choice.question4){
        choice.question4.forEach((item)=>{
            for(let a = 5; a<= item.length; a++){
                question4Answers.push(item[a])
                if(a === 9){
                    break
                }
            }
        })        
    }
    if(choice.question5){
        choice.question5.forEach((item)=>{
            for(let a = 5; a<= item.length; a++){
                question5Answers.push(item[a])
                if(a === 9){
                    break
                }
            }
        })        
    }
    
})

let answer = false;
let userChoiceQ1 = []
let userChoiceQ2 = []
let userChoiceQ3 = []
let userChoiceQ4 = []
let userChoiceQ5 = []

question1Answers.forEach(e=>{
    
        e.addEventListener('click', (el)=>{
            userChoiceQ1.push({q1:el.target.innerText})
            
            
            answer = true   
            if(answer === true){
                //here we will make all the other choices disabled
               
                question1Answers.forEach((answers)=>{
                    // answers = 'list-group-item disabled'
                 
                    answers.parentElement.className = 'list-group-item disabled'
                    el.target.parentElement.classList += ' active'
                    
                 
                    
                })    
                       
            }
            
        })     
       
    
})
question2Answers.forEach(e=>{
    
    e.addEventListener('click', (el)=>{
        userChoiceQ2.push({q2:el.target.innerText})
        
        
        answer = true   
        if(answer === true){
            //here we will make all the other choices disabled
          
            question2Answers.forEach((answers)=>{
                // answers = 'list-group-item disabled'
             
                answers.parentElement.className = 'list-group-item disabled'
                el.target.parentElement.classList += ' active'
                
             
                
            })    
                   
        }
        
    })     
   

})
question3Answers.forEach(e=>{
    
    e.addEventListener('click', (el)=>{
        userChoiceQ3.push({q3:el.target.innerText})
       
        
        answer = true   
        if(answer === true){
            //here we will make all the other choices disabled
           
            question3Answers.forEach((answers)=>{
                // answers = 'list-group-item disabled'
             
                answers.parentElement.className = 'list-group-item disabled'
                el.target.parentElement.classList += ' active'
                
             
                
            })    
                   
        }
        
    })     
   

})
question4Answers.forEach(e=>{
    
    e.addEventListener('click', (el)=>{
        userChoiceQ4.push({q4:el.target.innerText})
       
        
        answer = true   
        if(answer === true){
            //here we will make all the other choices disabled
           
            question4Answers.forEach((answers)=>{
                // answers = 'list-group-item disabled'
             
                answers.parentElement.className = 'list-group-item disabled'
                el.target.parentElement.classList += ' active'
                
             
                
            })    
                   
        }
        
    })     
   

})
question5Answers.forEach(e=>{
    
    e.addEventListener('click', (el)=>{
        userChoiceQ5.push({q5:el.target.innerText})
        
        
        answer = true   
        if(answer === true){
            //here we will make all the other choices disabled
            
            question5Answers.forEach((answers)=>{
                // answers = 'list-group-item disabled'
             
                answers.parentElement.className = 'list-group-item disabled'
                el.target.parentElement.classList += ' active'
                
             
                
            })    
                   
        }
        
    })     
   

})
//getting the id button for submit quizz
const submit = document.querySelector('#sendQuiz')
let marks = 0
submit.addEventListener('click', (e)=>{
    const userAnswers = [
        userChoiceQ1,userChoiceQ2,userChoiceQ3,userChoiceQ4,userChoiceQ5
    ]
    const memorandum = [
        {q1: "Email Address"},
        {q2: "Click the 'Report an issue' link below"},
        {q3: "Insert your email address (same as the one used when logging into your App)"},
        {q4: "Add your comment as to why you cannot log in"},
        {q5: "On the top right corner"},
        
    ]
    userAnswers.forEach((e)=>{
        try {
            if(e[0].q1 === memorandum[0].q1){
            
                
                marks++
                return false
                
            }
            if(e[0].q2 === memorandum[1].q2){
            
                
                marks++
                return false
                
            }
            if(e[0].q3 === memorandum[2].q3){
            
                
                marks++
                return false
                
            }
            if(e[0].q4 === memorandum[3].q4){
            
                
                marks++
                return false
                
            }
            if(e[0].q5 === memorandum[4].q5){
            
                
                marks++
                return false
                
            }
            
          
            

        } catch (error) {
            // console.log('Incorrect answer')
        }
        
    })
    //calculating percentage of the user
    const totalPercentage = marks/5*100
    //getting the results column
    const results = document.querySelector('#totalPercentage')
    const status = document.querySelector('#status')
    status.textContent = "Completed"
    results.textContent = totalPercentage
   
})

