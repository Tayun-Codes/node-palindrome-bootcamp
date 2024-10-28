document.querySelector('button').addEventListener('click', checkPalindrome)

function checkPalindrome() {

    let input = document.querySelector('input').value

    fetch(`/api?palindrome=${input}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data, data.result);
            document.querySelector('h2').innerText = data.result
        })
}