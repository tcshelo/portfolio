import pdfExcelHome from '@/assets/home.png';
import pdfExcelSuccess from '@/assets/success.png';
import pdfExcelError from '@/assets/error.png';
import fakeReport from '@/assets/fakeReport.png';
import result from '@/assets/result.png';

export const PDF_CONVERTER = {
    id: 'pdf-excel',
    categoryToken: 1045,
    titleToken: 1050,
    shortDescToken: 1051,
    fullDescToken: 1052,
    previewTitleToken: 1053,
    previewSummaryToken: 1054,
    tags: [1111, 1112, 1045, 1113],
    githubUrl: 'https://github.com/tcshelo/pdf-excel-converter',
    images: [
        pdfExcelHome,
        pdfExcelSuccess,
        pdfExcelError,
        fakeReport,
        result
    ],
    featureTokens: [1055, 1056, 1057, 1058],
    techStack: {
    frontend: 'Streamlit Interface',
    backend: 'Python Engine',
    database: 'Processamento em Memória',
    tools: 'Git, Pandas'
    }
}