import jsPDF from 'jspdf';

import logo from '@images/logo.png';

import {monospace} from './monospace';

export const exportPdf = (data: string[], action: string, content: any) => {
    const doc = new jsPDF();
    const img = new Image();
    img.src = logo;
    doc.addImage(img, 'png', 10, 5, 60, 30);

    doc.html(content || '', {
        width: 900,
        callback: function (doc) {
            // в переменную помещен base64 код нужного шрифта
            doc.addFileToVFS('monospace.medium.ttf', monospace);
            doc.addFont(
                'monospace.medium.ttf',
                'Monospace Medium',
                'normal',
                'Identity-H',
            );
            doc.viewerPreferences({Direction: 'R2L'});
            doc.setFont('Monospace Medium');
            doc.setFontSize(16);
            doc.setLanguage('ru');
            doc.setTextColor('#333333');
            doc.autoPrint();
            doc.output('dataurlnewwindow');
        },
    });
};
