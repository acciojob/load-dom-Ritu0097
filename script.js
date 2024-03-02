document.addEventListener('DOMContentLoaded', function() {
            if (document.body.childNodes.length === 0) {
                var successMessage = document.createElement('p');
                successMessage.textContent = "DOM load success";
                document.body.appendChild(successMessage);
            }
});
