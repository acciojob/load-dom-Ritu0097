document.addEventListener("DOMContentLoaded", (event) => {
	  var successMessage = document.createElement('p');
      successMessage.textContent = "DOM load success";
      document.body.appendChild(successMessage);
});
