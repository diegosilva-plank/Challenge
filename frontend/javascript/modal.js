
function associateButtonToModal (modal_id, button_class) {
    // Get the modal
    var modal = document.getElementById(modal_id);
    console.log('Entro na função')

    // Get the button that opens the modal
    var btns = Array.from(document.getElementsByClassName(button_class));

    for (var btn of btns) {
        // When the user clicks on the button, open the modal
        btn.onclick = function() {
            modal.style.display = "block";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}

function closeModal (modal_id) {
    document.getElementById(modal_id).style.display = "none"
}