import { PDFDocument } from "pdf-lib";

export default function PdfMerger() {
  const mergePDFs = async (event) => {
    const files = event.target.files;

    if (files.length < 2) {
      alert("Select at least 2 PDFs");
      return;
    }

    const mergedPdf = await PDFDocument.create();

    for (const file of files) {
      const bytes = await file.arrayBuffer();

      const pdf = await PDFDocument.load(bytes);

      const pages = await mergedPdf.copyPages(
        pdf,
        pdf.getPageIndices()
      );

      pages.forEach((page) => mergedPdf.addPage(page));
    }

    const mergedBytes = await mergedPdf.save();

    const blob = new Blob([mergedBytes], {
      type: "application/pdf",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "merged.pdf";
    a.click();
  };

  return (
    <div className="tool-page">
      <div className="tool-container">
      <h2>PDF Merger</h2>

      <input
        type="file"
        multiple
        accept=".pdf"
        onChange={mergePDFs}
      />
    </div>
    </div>
  );
}