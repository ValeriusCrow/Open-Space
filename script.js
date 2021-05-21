let elList = document.querySelectorAll("input");
    for (let i=2; i < elList.length; i++) {
        elList[i].setAttribute("disabled", "")}

let passwordField = document.querySelector('input[type="password"]');
let okButton = document.querySelector('input[value="OK"]');

okButton.addEventListener("click", function unlock () {
    if (passwordField.value === "TrustNo1") {
        for (let i=2; i < elList.length; i++) {
            elList[i].removeAttribute("disabled")}
    }
});
