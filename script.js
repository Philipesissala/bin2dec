const $input = document.querySelector("#input");
const $output = document.querySelector("#output");
const $btn = document.querySelector("Button");

const convert = {
    validate() {
        const values = $input.value.split("");
        const find = values.find(item => {
            return item > 1
        });
        if (find > 1) {
            alert("Erro, porfavor insira valores validos (0 ou 1)");
            $input.value = "";
            $output.value = "";
        } else
            convert.operation($input.value);
    },
    operation(value) {
        let binary = value.split("").reverse();
        const results = binary.map((item, index) => {
            return item * Math.pow(2, index);
        });
        const decimal = results.reduce((total, next) => {
            return total + next;
        });
        $output.value = decimal;
    }
}
$btn.addEventListener("click", (event) => {
    event.preventDefault();
    convert.validate();
});
