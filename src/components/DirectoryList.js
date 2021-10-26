import directoryList from "../generated/directoryList.json";
import DirectoryItem from "./DirectoryItem";

function DirectoryList({ selectedFile, setSelectedFile }) {
  return (
    <div>
      {directoryList.map((item, idx) => (
        <DirectoryItem
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          item={item}
          key={idx}
        />
      ))}
    </div>
  );
}

export default DirectoryList;
