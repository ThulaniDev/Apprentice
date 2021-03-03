//getting the signing up container
const signUpCon = document.querySelector('.signing-up')
//getting the overla2
const overlayTwo = document.querySelector('#overlayTwo')
//getting the Create new user link
const creatNewUser = document.querySelector('#DontHaveAccountLink')
const footer2 = document.querySelector('.footer')
//addding an evnt listener to the link 
creatNewUser.addEventListener('click', (e)=>{
    signUpCon.className += ' active'
    overlayTwo.className = 'active'
    footer2.className += ' active'
    
})  

//closing the signing up window

//getting the signing up close window
const signupCloseButton = document.querySelector('#signing-up-closing-btn')
signupCloseButton.addEventListener('click', (e)=>{
    signUpCon.className = 'signing-up'
    overlayTwo.className = ''
    footer.className = 'footer bg-secondary text-white col-sm-12 col-md-12 col-lg-12'
    
    

}) 