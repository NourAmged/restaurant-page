
import image from './imgs/chief.jpg';

export function createHomePage() {
    const content = document.getElementById('content');
    
    const homeDiv = document.createElement('div');
    
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Restaurant';
    
    const description = document.createElement('p');
    description.textContent = 'The best place to enjoy delicious meals!';

    const chief = new Image(256, 256);
    chief.src = image;

    homeDiv.appendChild(headline);
    homeDiv.appendChild(description);
    homeDiv.appendChild(chief);

    

    homeDiv.classList.add('home');

    content.appendChild(homeDiv);
}