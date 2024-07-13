document.addEventListener("DOMContentLoaded", function() {
    let profiles = document.getElementById("profiless");
    let inputFile = document.getElementById("input-image");

    inputFile.onchange = function() {
        if (inputFile.files && inputFile.files[0]) {
            profiles.src = URL.createObjectURL(inputFile.files[0]);
        }
    }
});
