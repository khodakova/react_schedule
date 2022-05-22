import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import logo from '@images/logo.png';

import {ctetn} from './ctetn';

export const exportPdfTable = (
    columns: any,
    rows: any,
    title: string[],
    action?: string,
) => {
    const doc = new jsPDF('landscape');

    // в переменную помещен base64 код нужного шрифта
    doc.addFileToVFS('ctetn.ttf', ctetn);
    doc.addFont('ctetn.ttf', 'ctetn', 'normal', 'Identity-H');
    doc.viewerPreferences({Direction: 'R2L'});
    doc.setFont('ctetn');
    doc.setFontSize(12);
    doc.setTextColor('#333333');

    doc.setLanguage('ru');

    const img = new Image();
    img.src = logo;
    doc.addImage(img, 'png', 10, 5, 60, 30);

    // doc.addImage(logo)
    doc.text(title, 70, 15, {align: 'left'});

    const columnTitles = columns.map((columnDef: any) => columnDef.headerName);

    const pdfData = rows.map((rowData: any) =>
        columns.map((columnDef: any) => rowData[columnDef.field]),
    );

    autoTable(doc, {
        theme: 'grid',
        startY: 40,
        showHead: 'everyPage',
        head: [columnTitles],
        columnStyles: {
            0: {cellWidth: 'wrap'},
            1: {cellWidth: 'wrap'},
            2: {cellWidth: 'wrap'},
        },
        body: pdfData,
        styles: {
            font: 'ctetn',
            fontSize: 10,
            lineColor: '#7c7c7c',
            lineWidth: 0.2,
            textColor: '#1e1e1e',
        },
        headStyles: {
            fillColor: [240, 239, 239],
            textColor: '#1e1e1e',
        },
    });

    switch (action) {
        case 'print': {
            doc.autoPrint();
            doc.output('dataurlnewwindow');
            break;
        }
        case 'save': {
            doc.save(`Протокол проверки.pdf`);
            break;
        }
        default: {
            window.open(doc.output('bloburl'), '_blank');
        }
    }
};
