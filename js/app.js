const selectTags = document.querySelectorAll(".selected-digits");
const multiplierValue = document.getElementById("multiplier-value");
const bands = document.querySelectorAll(".band");

const calculateButton = document.getElementById("calculate");
const resultBox = document.getElementById("result-box");

selectTags.forEach((select,index) => {
    select.addEventListener("change", () => {
        bands[index].style.background = select.options[select.selectedIndex].text;
    });
})

multiplierValue.addEventListener("change", () => {
    bands[3].style.background = multiplierValue.options[multiplierValue.selectedIndex].text;
});

calculateButton.addEventListener("click", (e) => {
    const firstBandSelect = bands[0].querySelector("select");
    const secondBandSelect = bands[1].querySelector("select");
    const thirdBandSelect = bands[2].querySelector("select");

    if (multiplierValue.value.includes("k")) {
        multiplierValueNumber = parseFloat(multiplierValue.value.replace(/[k]/g, '')*1000);
    }else if (multiplierValue.value.includes("M")) {
        multiplierValueNumber = parseFloat(multiplierValue.value.replace(/[M]/g, '')*1000000);
    }else if(multiplierValue.value.includes("g")) {
        multiplierValueNumber = parseFloat(multiplierValue.value.replace(/[g]/g, '')*1000000000);
    }else {
        multiplierValueNumber = parseFloat(multiplierValue.value);
    }

    

    const result = firstBandSelect.value + secondBandSelect.value + thirdBandSelect.value;
    let finalResult = parseFloat(result)*multiplierValueNumber;
    let finalResult2 = finalResult.toString();
    finalResult2 = finalResult2.replace(/000000000$/, 'g').replace(/000000$/, 'M').replace(/000$/, 'k');


    if(firstBandSelect.value != "null" && secondBandSelect.value != "null" && thirdBandSelect.value != "null" && multiplierValue.value != "null") {
        resultBox.textContent = firstBandSelect.value 
        + secondBandSelect.value 
        + thirdBandSelect.value
        + "x" + multiplierValue.value
        + "Ω = "
        + finalResult
        + "Ω = "
        + finalResult2
        + "Ω"
        ;
    }

    
});


const lightMode = document.getElementById("light-mode");

lightMode.addEventListener("click", e => {
    e.preventDefault();
    document.body.classList.toggle("show-password");
})