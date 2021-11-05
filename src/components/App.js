import { useEffect, useState } from "react";
import Card from "./Card";
import CodeViewer from "./CodeViewer";
import DirectoryList from "./DirectoryList";
import Welcome from "./Welcome";

function App() {
  const [selectedFile, setSelectedFile] = useState();
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowWelcome(false), 1000);
  }, []);

  if (showWelcome) {
    return <Welcome />;
  }

  return (
    <div className="app">
      <Card className="bio-card" title="Bio">
        <div className="flex">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          numquam obcaecati voluptatum in aliquam beatae sint aliquid assumenda.
          Necessitatibus a atque, magnam dolorum officia labore. Magnam corporis
          assumenda ad obcaecati.
        </div>

        <a className="icon-link" href="https://www.github.com/chronixlo">
          <img src="github-light.png" alt="Github" />
          @chronixlo
        </a>
      </Card>

      <Card className="directory-list-card" title="Directory">
        <DirectoryList
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
      </Card>

      <Card className="source-card" title="Source">
        <CodeViewer file={selectedFile} />
      </Card>
    </div>
  );
}

export default App;
