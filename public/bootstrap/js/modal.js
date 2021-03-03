//getting all the headings elements
const headings = document.querySelectorAll('#headings')
//getting the modal container
const modal = document.querySelector('.modal')

//getting the footer
const footer = document.querySelector('.footer')

//getting the overlay container
const overlay = document.querySelector('#overlay')

//getting the modal heading id
const headingId = document.querySelector('#modal-heading')

//adding an event listener to the openModal button
headings.forEach((heading)=>{
    heading.addEventListener('click', (event)=>{
        
        modal.className += ' active'
        overlay.className = 'active'
        footer.className += ' active'
        headingId.innerText = event.target.innerText 
               
        
    })
})

//closing the pop up window
const close = document.querySelector('#close-modal-btn')
close.addEventListener('click', (e)=>{
    modal.className = 'modal'
    overlay.className = ''
    footer.className = 'footer bg-secondary text-white col-sm-12 col-md-12 col-lg-12'
    

})





