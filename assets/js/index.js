 //MenuToggle
let toggle= document.querySelector('.toggle');
let navigation= document.querySelector('.navigation');
let main= document.querySelector('.main');


toggle.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
};
//search event
let searchInpt = document.querySelector('#search-inpt');
let searchBtn = document.querySelector('#search-btn');
let ordersData = document.querySelectorAll('.td-order');

function searchOrder()
{
    ordersData.forEach(item => {
        if(!item.textContent.toLowerCase().includes(searchInpt.value.toLowerCase()))
             item.parentElement.classList.add("deactive");
        else
             item.parentElement.classList.remove("deactive");
     });
}

searchBtn.addEventListener('click' , () => searchOrder());
searchInpt.addEventListener('keypress' , () => searchOrder());



//add hovered class in selected list item 
let list = document.querySelectorAll('.navigation li');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}

list.forEach((item) =>
item.addEventListener('mouseover' , activeLink));

//acount click zoom
// let imgAcnt= document.querySelector('.user');
// let userClickimg = document.querySelector('.userImgClick');
// let userCloseimg = document.querySelector('.closeImgUser')
// imgAcnt.addEventListener('click' , () => {
//     userClickimg.style.display = "inline-block";
//     userCloseimg.addEventListener('click' , () => {
//         userClickimg.style.display = "none";
//     })
// });

 
//Edit click show
let editIcons     = document.querySelectorAll('.bxs-edit');
let editIconId    = document.querySelectorAll('#edit-icon-id');
let editCtn       = document.querySelector('.edit-contianer');
let editInput     = document.querySelector('.name');
let tdName        = document.querySelector('.td-name');
let tdOrder       = document.querySelector('.td-email');
let tdOrder_2     = document.querySelector('.td-order');
let editEmail     = document.querySelector('.email');
let editEmail_2   = document.querySelector('.order');
let editArea      = document.querySelector('.edit-area');
let editDeleteBtn = document.querySelector('.delete-btn');
let xBtn          = document.querySelector('.x-btn');
let cancel        = document.querySelector('.cancel-btn');
let editInputsText= document.querySelectorAll('.edit-text');
let saveChange    = document.querySelector('.button');
let editTrashs    = document.querySelectorAll('.bx-trash');
let messageIcons  = document.querySelectorAll('.bx-chat');
let messageInputs = document.querySelectorAll('.message-input');
let messageCancel = document.querySelector('.cancel');
let contact       = document.querySelector('.contact');
let contactMain   = document.querySelector('.contacts-main');
let xMessageIcon  = document.querySelector('.x-message-btn');
let iconsDiv      = document.querySelector('.active-icon');
let orderDiv      = document.querySelector('.order-active');
let imgIcon       = document.querySelectorAll('.bx-image');
let emailIcon     = document.querySelector('.email-active');
let emailCheck    = document.querySelector('.email-check-icon');
let regex         = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-] +\.[a-zA-Z]{2,4}$/;

let clickElement;


editIcons.forEach(element => {
    //edit div click show
   
    element.addEventListener('click' , (e) => {
             editIconsShow();
             clickElement = e.path[2].children;
             for(let i =0 ;i<editInputsText.length; i++){
                 editInputsText[i].value = clickElement[i].textContent;
             };
    });
    //edit div delete
    editDeleteBtn.addEventListener('click' , () => {
            deleteBtnEdit();
    });
    //edit div x click
    xBtn.addEventListener('click' , () => {
        editClose();
    });
    //cancel btn click
    cancel.addEventListener('click' , () =>{
        editClose();
       
    });
    //save changes
    saveChange.addEventListener('click',() =>{

        if(editInput.value == ''){
            editInput.focus();
            Swal.fire('Please enter your name');
            editInput.placeholder = "Please enter your name";
            iconsDiv.classList.add('deactive-icon');

        }
        if(editEmail_2.value == ''){
            editEmail_2.focus();
            Swal.fire('Please enter the order');
            editEmail_2.placeholder ="Please enter the order";
            orderDiv.classList.add('order-active-click');
        }
        if(!editEmail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            editEmail.focus();
            Swal.fire('Please enter an email');
            editEmail.placeholder = "Please enter an email";
            emailIcon.style.display = "block";
            emailCheck.classList.remove('check-active');
        } 
        else if(!editInput.value == ''){
            if(!editEmail_2.value == ''){
                if(!editEmail.value == ''){
                    saveChanges();
                    editClose();
                }
            }
        }  
        
    });


});
editTrashs.forEach(element => {
    element.addEventListener('click' , (e) =>{
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
messageIcons.forEach(element => {
    element.addEventListener('click' , (e) => {
        contactDivOpen();
        clickElement = e.path[2].children;
        for(let i =0 ;i<messageInputs.length; i++){
            messageInputs[i].value = clickElement[i].textContent;
        };
    });
    messageCancel.addEventListener('click' , () =>{
        contactDivClose();
    });
    xMessageIcon.addEventListener('click' , () => {
            contactDivClose();
        });
});

imgIcon.forEach((element , index) => {
    element.addEventListener('click' , () => {
        apiFunc();
    });
});
//Function events
async function apiFunc(element, index){
        await fetch("https://jsonplaceholder.typicode.com/posts").then(
            (response) => response.json()).then
            (responseJson => {
            responseJson.forEach(item => {
                      Swal.fire({
                      title: item.title,
                      text: item.body,
                      imageUrl: 'https://random.imagecdn.app/400/200',
                      imageWidth: 400,
                      imageHeight: 200,
                      imageAlt: 'Custom image',
                     })
            
            });
        });
        
};

function Validation(){
    iconsDiv.classList.remove('deactive-icon');
};
function emailFunc(){
    emailIcon.style.display = "none";
    if(editEmail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailCheck.classList.add('check-active');
    }
    else{
        emailCheck.classList.remove('check-active');
    }
};
function OrderFunc(){
    orderDiv.classList.remove('order-active-click');
};
function editIconsShow(){
             editInput.value = tdName.textContent;
             editEmail.value = tdOrder.textContent;
             editEmail_2.value = tdOrder_2.textContent;
             editCtn.classList.add('active');
             editArea.classList.add('active');
             editArea.classList.add('activeBgColor');
};
function deleteBtnEdit(){
             editInput.value ='';
             editEmail.value='';
             editEmail_2.value='';
};
function editClose(){
             editCtn.classList.remove('active');
             editArea.classList.remove('active');
             editArea.classList.remove('activeBgColor');
             iconsDiv.classList.remove('deactive-icon');
             orderDiv.classList.remove('order-active-click');
             emailCheck.classList.remove('check-active');
             emailIcon.style.display = "none";
};
function saveChanges(e){
        for(let i =0 ;i<editInputsText.length; i++){
            clickElement[i].textContent= editInputsText[i].value;
    }; 
    Swal.fire('Completed')
    
};
function contactDivOpen(){
    contact.classList.add('active');
    contactMain.classList.add('active');
    contactMain.classList.add('activeBgColor');
};
function contactDivClose(){
    contact.classList.remove('active');
    contactMain.classList.remove('active');
    contactMain.classList.remove('activeBgColor');
};

