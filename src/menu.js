import foodImg1 from './imgs/food1.jpg';
import foodImg2 from './imgs/food2.jpg';
import foodImg3 from './imgs/food3.jpg';
import foodImg4 from './imgs/food4.jpg';


export function createMenuPage(){
    const content = document.getElementById('content');
    
    const menuDiv = document.createElement('div');

    const [innerDiv1, innerDiv2, innerDiv3, innerDiv4] = Array.from({length: 4}, () => document.createElement('div'));
    const [header1, header2, header3, header4] = Array.from({length: 4}, () => document.createElement('h2'));

    const [img1, img2, img3, img4] = Array.from({ length: 4 }, () => new Image(150, 150));
    
    img1.src = foodImg1;
    img2.src = foodImg2;
    img3.src = foodImg3;
    img4.src = foodImg4;

    header1.textContent = '20$';
    header2.textContent = '15$';
    header3.textContent = '25$';
    header4.textContent = '10$';

    innerDiv1.appendChild(img1);
    innerDiv1.appendChild(header1);

    innerDiv2.appendChild(img2);
    innerDiv2.appendChild(header2);

    innerDiv3.appendChild(img3);
    innerDiv3.appendChild(header3);

    innerDiv4.appendChild(img4);
    innerDiv4.appendChild(header4);

    menuDiv.appendChild(innerDiv1);
    menuDiv.appendChild(innerDiv2);
    menuDiv.appendChild(innerDiv3);
    menuDiv.appendChild(innerDiv4);


    menuDiv.classList.add('menu');

    content.appendChild(menuDiv);

}