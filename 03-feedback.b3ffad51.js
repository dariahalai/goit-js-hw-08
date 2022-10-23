!function(){var e=document.querySelector(".feedback-form");e.addEventListener("input",(function(e){var t=e.currentTarget.elements;t.email.value,t.message.value})),e.addEventListener("submit",(function(e){e.preventDefault(),localStorage.setItem("feedback-form-state",JSON.stringify(inputData)),console.log(inputData)}))}();
//# sourceMappingURL=03-feedback.b3ffad51.js.map
