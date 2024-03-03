document.addEventListener('DOMContentLoaded', function() {
            if (!document.body.hasChildNodes()) {
                var successMessage = document.createTextNode("DOM load success");
                document.body.appendChild(successMessage);
            }
        });