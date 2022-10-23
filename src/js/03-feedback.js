const mainForm = document.querySelector('.feedback-form');
mainForm.addEventListener('input', onInputForm);
function onInputForm(event){
    const formElements = event.currentTarget.elements;
    const inputData = {
      email: formElements.email.value,
      message: formElements.message.value,
    }
    

}
mainForm.addEventListener('submit', onSubmitForm);
function onSubmitForm(evt){
    evt.preventDefault();
    localStorage.setItem("feedback-form-state", JSON.stringify(inputData));
    console.log(inputData);
}