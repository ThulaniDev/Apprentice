//adding an alert message for incorrect credentials

const adminForm = document.querySelector('#adminFormButton')
const errorsContainer = document.querySelector('#errors')
const closeModal = document.querySelector('#closing-Modal')
adminForm.addEventListener('click' , (e)=>{
    setTimeout(()=>{
        errorsContainer.className = "container-fluid"
        closeModal.click()
        window.stop()
    }, 3000)

})


//adding an alert message for incorrect credentials for the admin

const userForm = document.querySelector('#user-login-btn')
const errorsContainerUsers = document.querySelector('#errorsUser')
const closingUserModal = document.querySelector('#closing-User-Modal')
const closingAlert = document.querySelector('#close-Alert') 
userForm.addEventListener('click', (e)=>{
    setTimeout(()=>{
        errorsContainerUsers.className = "container-fluid"
        closingUserModal.click()
        window.stop()
        
        
        
    }, 3000)
    

})


