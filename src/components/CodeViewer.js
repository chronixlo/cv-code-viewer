import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect, useState } from "react";

export default function CodeViewer({ file }) {
  const [source, setSource] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!file || file.dir) {
      setSource(null);
      return;
    }

    (async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/chronixlo/cv-code-viewer/master/${file.path}`
        );

        const text = await response.text();

        const highlighted = Prism.highlight(
          text,
          Prism.languages.javascript,
          "javascript"
        );

        setSource(highlighted);
      } catch (e) {}

      setLoading(false);
    })();
  }, [file]);

  if (!file || file.dir) {
    return "Select a file";
  }

  return (
    <div>
      <div>
        {file?.name} {loading && "..."}
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: source }}
        className="code-viewer-source"
      />
    </div>
  );
}
