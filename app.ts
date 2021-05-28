let input = document.querySelector('input');
input.value = 'Was it a car or a cat I saw';

let container = document.querySelector('.container')


let button:HTMLButtonElement = document.querySelector('button');

let div = document.createElement('div');
div.classList.add('alert', 'text-center')
container.appendChild(div)



let checkForPalindrome = () => {
    let normal: string = input.value.toLowerCase().split(' ').join('');
    let reversed: string =  normal.split('').reverse().join('');
    
    if (normal === reversed) {
        div.textContent = 'This is Palindrome';
        div.classList.add('alert-primary');
        div.classList.remove('alert-danger');
      
        
    } else {
        div.textContent = 'This is not a Palindrome'  ;
        div.classList.add('alert', 'alert-primary')  ;
        div.classList.add('alert-danger');
        div.classList.remove('alert-primary');
    }



}

button.addEventListener('click', () => {
    checkForPalindrome()
})
