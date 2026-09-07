import * as pdfjsLib from './pdfjs/pdf.mjs';
pdfjsLib.GlobalWorkerOptions.workerSrc = './pdfjs/pdf.worker.mjs';
window.parsePdfLocally = async function(bytes) {
  const loadingTask = pdfjsLib.getDocument({data: bytes, isEvalSupported: false});
  let document;
  try {
    document = await loadingTask.promise;
    const pages = [];
    for (let number = 1; number <= document.numPages; number++) {
      const page = await document.getPage(number);
      const content = await page.getTextContent();
      pages.push(content.items.map(item => item.str || '').join(' '));
      page.cleanup();
    }
    return {text: pages.join('\n\n'), pageCount: document.numPages};
  } finally {
    if (document) await document.destroy(); else await loadingTask.destroy();
    bytes.fill(0);
  }
};
