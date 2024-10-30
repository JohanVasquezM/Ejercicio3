function convert() {
    const inputValue = document.getElementById("inputValue");
    const conversionType = document.getElementById("conversionT");
    const result = document.getElementById("result");

    if (!inputValue.value || isNaN(inputValue.value) || inputValue.value <= 0) {
        inputValue.classList.add("is-invalid");
        return;
    } else {
        inputValue.classList.remove("is-invalid");
    }

    if (!conversionType.value) {
        conversionType.classList.add("is-invalid");
        return;
    } else {
        conversionType.classList.remove("is-invalid");
    }

    let convertedValue;

    switch (conversionType.value) {
        case "kmToM":
            convertedValue = parseFloat(inputValue.value) * 1000;
            result.value = `Son ${convertedValue} metros`;
            break;
        case "mToCm":
            convertedValue = parseFloat(inputValue.value) * 100;
            result.value = `Son ${convertedValue} centímetros`;
            break;
        case "ftToInch":
            convertedValue = parseFloat(inputValue.value) * 12;
            result.value = `Son ${convertedValue} pulgadas`;
            break;
        case "yardToInch":
            convertedValue = parseFloat(inputValue.value) * 36;
            result.value = `Son ${convertedValue} pulgadas`;
            break;
        default:
            result.value = "Conversión no válida";
    }
}
