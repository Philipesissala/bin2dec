const $input = document.querySelector("#entrada");
const $output = document.querySelector("#saida");
const $btn = document.querySelector("Button");

function convertion(value) {
    let binary = value.split("").reverse();
    const results = binary.map((item, index) => {
        return item * Math.pow(2, index);
    });
    const decimal = results.reduce((total, next) => {
        return total + next;
    });
    $output.value = decimal;
}

$btn.addEventListener("click", (event) => {
    event.preventDefault();
    convertion($input.value);
});
