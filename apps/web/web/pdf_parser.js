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
      let offset = 0;
      const spans = content.items.map(item => {
        const text = item.str || '';
        const start = offset;
        offset += text.length;
        const span = {text, start, end: offset};
        offset += 1;
        return span;
      });
      pages.push({number, text: spans.map(span => span.text).join(' '), spans});
      page.cleanup();
    }
    return {
      text: pages.map(page => page.text).join('\n\n'),
      pageCount: document.numPages,
      pagesJson: JSON.stringify(pages),
    };
  } finally {
    if (document) await document.destroy(); else await loadingTask.destroy();
    bytes.fill(0);
  }
};
