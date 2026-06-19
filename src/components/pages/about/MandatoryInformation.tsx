import { useEffect } from "react";

export default function MandatoryInformation() {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/pdfs/mandatory-info.pdf";
    link.download = "Mandatory-Info.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.location.href = "/";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Downloading Mandatory Information...</p>
    </div>
  );
}