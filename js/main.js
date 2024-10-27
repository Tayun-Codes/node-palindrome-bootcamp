document.querySelector('button').addEventListener('click', checkPalindrome)

function checkPalindrome() {

    let input = document.querySelector('input').value

    fetch(`/api?palindrome=${input}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            newInput = data.input.replaceAll(' ', '').toLowerCase();
            let reverse = newInput.split('').reverse().join('')
            if (reverse === newInput) {
                document.querySelector('h2').innerText = `"${input}" is a palindrome! Very cool.`
            } else {
                document.querySelector('h2').innerText = `Hmmm "${input}" is not a palindrome! But you know what is? "A man a plan a canal Panama", spiffy innit!`
            }
        })
}