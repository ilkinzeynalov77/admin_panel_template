let customersMessage  = document.querySelectorAll('.bx-chat');
let customerDiv       = document.querySelector('.contacts-main');
let customerActiveDiv = document.querySelector('.contact');
let xbtn              = document.querySelector('.x-btn');
let customerMsg       = document.querySelectorAll('.message-input');
let customerMsgArea   = document.querySelectorAll('.message-input-custom');
let textNames         = document.querySelectorAll('.text-custom');
let cncBtn            = document.querySelector('#cnc');
let deleteBtn         = document.querySelectorAll('.bx-trash');
let searchInptArea    = document.querySelector('#search-inpt');
let datas             = [...document.querySelector('.table-area').children[0].children];
let table              = document.querySelector('.table-area');

searchInptArea.addEventListener('keypress' , () => {
    table.innerHTML='';
    datas.forEach(element => {
      if(element.children[1].textContent.toLowerCase().includes(searchInptArea.value.toLowerCase())){
        table.appendChild(element);
      }
     });
  });

let clickCustomer;
 

customersMessage.forEach(element => {
    element.addEventListener('click' , () => {
        customerActiveDiv.classList.add('customer-active');
        customerDiv.classList.add('customer-active');
    });
    xbtn.addEventListener('click' , () => {
        customerActiveDiv.classList.remove('customer-active');
        customerDiv.classList.remove('customer-active');
    });
    cncBtn.addEventListener('click' , () => {
       contactDivClose();
    });

});
deleteBtn.forEach(element => {
    element.addEventListener('click' , () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your info has been deleted.',
                'success'
              )
              element.parentElement.parentElement.remove();
            }
            else{
                Swal.fire(
                    'Canceled!',
                    'Your info has been deleted.',
                    'error'
                  )
            }
          });
    });
});




//functions
function contactDivClose(){
    contact.classList.remove('active');
    contactMain.classList.remove('active');
    customerDiv.classList.remove('customer-active');
};


