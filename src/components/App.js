import { useState } from "react";
import DirectoryList from "./DirectoryList";

function App() {
  const [selectedFile, setSelectedFile] = useState();

  return (
    <div className="app">
      <div className="card" style={{ backgroundColor: "#70FFD319" }}>
        bio
      </div>

      <div className="card" style={{ backgroundColor: "#70FFD319" }}>
        <DirectoryList
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
      </div>

      <div className="card" style={{ backgroundColor: "#70FFD319", flex: 2 }}>
        {selectedFile?.name}
      </div>
    </div>
  );
}

export default App;
