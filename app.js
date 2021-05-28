var input = document.querySelector('input');
input.value = 'Was it a car or a cat I saw';
var container = document.querySelector('.container');
var button = document.querySelector('button');
var div = document.createElement('div');
div.classList.add('alert', 'text-center');
container.appendChild(div);
var checkForPalindrome = function () {
    var normal = input.value.toLowerCase().split(' ').join('');
    var reversed = normal.split('').reverse().join('');
    if (normal === reversed) {
        div.textContent = 'This is Palindrome';
        div.classList.add('alert-primary');
        div.classList.remove('alert-danger');
    }
    else {
        div.textContent = 'This is not a Palindrome';
        div.classList.add('alert', 'alert-primary');
        div.classList.add('alert-danger');
        div.classList.remove('alert-primary');
    }
};
button.addEventListener('click', function () {
    checkForPalindrome();
});
