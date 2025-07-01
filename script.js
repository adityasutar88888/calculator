const i = document.getElementById("input");
function input(inp) {
    i.value += inp;
}
function c() {
    i.value = "";
}
function equal() {
    try {
        i.value = eval(i.value);
    } catch (error) {
        i.value = "Error";
    }
}
