import fs from 'fs';
import generateHTML from './generateHTML';

const data = {
    title: 'Title',
    description: 'description',
    phone: '+79166196222',
};

const resultHTML = generateHTML(data);
console.log(resultHTML);

fs.writeFileSync('./generatedHTML/index.html', resultHTML);
