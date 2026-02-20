const main = document.querySelector('main');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const emailAddress = document.getElementById('emailAddress');
const validEmailMsg = document.getElementById('validEmailMsg');
const generalEnquiry = document.getElementById('generalEnquiry');
const supportRequest = document.getElementById('supportRequest');
const generalEnquiryBackground = document.querySelector('.generalEnquiryBackground')
const supportRequestBackground = document.querySelector('.supportRequestBackground')
const requiredMsg = document.querySelectorAll('.requiredMsg');
const msg = document.getElementById('msg');
const checkboxConsent = document.getElementById('checkboxConsent');
const consentErrorMsg = document.getElementById('consentErrorMsg');
const messageContainer = document.getElementById('messageContainer');

var firstNameValid = false;
var lastNameValid = false;
var emailAddressValid = false;
var queryTypeValid = false;
var msgValid = false;
var checkboxConsentValid = false;

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

generalEnquiryBackground.addEventListener('click', ( )=>{
    generalEnquiry.checked = true;
    queryTypeValid = true;
    if(supportRequest.checked === true){
        supportRequest.checked = false;
    }
})

supportRequestBackground.addEventListener('click', ( )=>{
    supportRequest.checked = true;
    queryTypeValid = true;
    if(generalEnquiry.checked === true){
        generalEnquiry.checked = false;
    }
})

generalEnquiry.addEventListener('click', ( )=>{
    queryTypeValid = true;
    if(supportRequest.checked === true){
        supportRequest.checked = false;
    }
})

supportRequest.addEventListener('click', ( )=>{
    queryTypeValid = true;
    if(generalEnquiry.checked === true){
        generalEnquiry.checked = false;
    }
})

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    if (firstName.value === ''){
        firstName.classList.add('errorInput');
        requiredMsg[0].classList.add('errorMsg');
    }else{
        firstName.classList.remove('errorInput');
        requiredMsg[0].classList.remove('errorMsg');
        firstNameValid = true;
    }
    
    if (lastName.value === ''){
        lastName.classList.add('errorInput');
        requiredMsg[1].classList.add('errorMsg');
    }else{
        lastName.classList.remove('errorInput');
        requiredMsg[1].classList.remove('errorMsg');
        lastNameValid = true;
    }
    
    if (emailAddress.value === ''){
        emailAddress.classList.add('errorInput');
        requiredMsg[2].classList.add('errorMsg');
    }else{
        emailAddress.classList.remove('errorInput');
        requiredMsg[2].classList.remove('errorMsg');
    }

    if (emailAddress.value !== '' && validateEmail(emailAddress.value) === false){
        emailAddress.classList.add('errorInput');
        validEmailMsg.classList.add('errorMsg');
    }else{
        validEmailMsg.classList.remove('errorMsg')
    }
    if (emailAddress.value !== '' && validateEmail(emailAddress.value) === true){
        emailAddressValid = true;
    }

    if (supportRequest.checked === false && generalEnquiry.checked === false){
        requiredMsg[3].classList.add('errorMsg');
    }else{
        requiredMsg[3].classList.remove('errorMsg');
    }

    if (msg.value === ''){
        msg.classList.add('errorInput');
        requiredMsg[4].classList.add('errorMsg');
    }else{
        msg.classList.remove('errorInput');
        requiredMsg[4].classList.remove('errorMsg');
        msgValid = true;
    }

    if (checkboxConsent.checked === false){
        consentErrorMsg.style.opacity = 1;
    }else{
        consentErrorMsg.style.opacity = 0;
        checkboxConsentValid = true;
    }

    if(firstNameValid === true && lastNameValid === true && emailAddressValid === true && queryTypeValid === true && msgValid === true && checkboxConsentValid === true){
        messageContainer.style.opacity = 1;
        main.classList.add('disabled');
    }
});