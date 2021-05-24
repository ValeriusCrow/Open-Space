let elList = document.querySelectorAll("input");
let passwordField = document.querySelector('input[type="password"]');
let okButton = document.querySelector('input[value="OK"]');
let launchButton = document.querySelector('input[value="Launch"]');
let rangesChecks = document.querySelectorAll('input[type="checkbox"], input[type="range"]');

for (let i=2; i < elList.length; i++) {
    elList[i].setAttribute("disabled", "")}

okButton.addEventListener("click", function unlock () {
    if (passwordField.value === "TrustNo1") {
        for (let i=2; i < elList.length - 1; i++) {
            elList[i].removeAttribute("disabled")}
    }
});

for (let i = 0; i < rangesChecks.length; i++) {
    rangesChecks[i].addEventListener("click", function check() {
        this.setAttribute('value', this.value);
        let checkedChecks = document.querySelectorAll('input[type="checkbox"]:checked');
        let rangesFull = document.querySelectorAll('input[type="range"][value="100"]');
        if (checkedChecks.length === 6 && rangesFull.length === 5) {
            launchButton.removeAttribute("disabled");
        } else {
            launchButton.setAttribute("disabled", "");
        }
    });
}


    launchButton.addEventListener("click", function fly () {
    let rocketModel = document.querySelector(".rocket");

