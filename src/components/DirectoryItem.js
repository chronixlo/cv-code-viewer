function DirectoryItem({ item, inset, selectedFile, setSelectedFile }) {
  return (
    <div style={{ marginLeft: inset && 10 }} className="directory-item">
      <span>
        {item.children ? "📁" : "📄"}{" "}
        <span
          className="directory-item-name"
          onClick={() => setSelectedFile(item)}
        >
          {item.name}
        </span>
      </span>

      {item.children?.map((child, idx) => (
        <DirectoryItem
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          item={child}
          key={idx}
          inset
        />
      ))}
    </div>
  );
}

export default DirectoryItem;
