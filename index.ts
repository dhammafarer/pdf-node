import fs from 'fs';
import pdfmake from 'pdfmake';
import pdfPrinter from './node_modules/pdfmake/src/printer.js';

import docDefinition from './src/document';
import fonts from './fonts';

const printer = new pdfPrinter(fonts);

const filename = process.env.NAME || "output";

let pdf = printer.createPdfKitDocument(docDefinition);
pdf.pipe(fs.createWriteStream(`./output/${filename}.pdf`));
pdf.end();
