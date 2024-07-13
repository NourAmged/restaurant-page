import image from './imgs/map.png';

export function createContactPage(){
    const content = document.getElementById('content');
    
    const contactDiv = document.createElement('div');
    
    const phoneNumber = document.createElement('h2');
    phoneNumber.textContent = '📞 123 456 789';
    
    const address = document.createElement('h2');
    address.textContent = '🏠 3006 Medical Center Drive, Tampa, USA';
    
    const map = new Image(450, 180);
    map.src = image;

    contactDiv.appendChild(phoneNumber);
    contactDiv.appendChild(address);
    contactDiv.appendChild(map);

    contactDiv.classList.add('contact');

    content.appendChild(contactDiv);

}