let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = 'Error';
                string = "";
            }
        } else if (value === 'AC') {
            string = ""; 
            input.value = string;
        } else if (value === 'DEL') {
            string = string.slice(0, -1); 
            input.value = string;
        } else {
            string += value;
            input.value = string;
        }
    });
});


document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (/\d/.test(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        string += key; 
        input.value = string;
    } else if (key === 'Enter') {
        try {
            string = eval(string); 
            input.value = string;
        } catch {
            input.value = 'Error';
            string = "";
        }
    } else if (key === 'Backspace') {
        string = string.slice(0, -1); 
        input.value = string || "0";
    } else if (key === 'Escape') {
        string = ""; 
        input.value = "0";
    }
});
