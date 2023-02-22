const paragraphs = document.querySelector('.paragraphs');
const ps = paragraphs.querySelectorAll('p');

const styleBody = getComputedStyle(document.body);
const  backgroundColorBody = styleBody.backgroundColor;

for (let p of ps) {
   p.style.backgroundColor = backgroundColorBody;
}