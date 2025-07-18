import React, { useRef, useState } from "react";
import "./FileUploader.css";

 export const FileUploader = ({
  onUpload,
  multiple = false,
  accept = "*",
  maxSizeMB = 5,
}) => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);
  const inputRef = useRef();

  const handleFiles = (fileList) => {
    const maxSize = maxSizeMB * 1024 * 1024;
    const validFiles = Array.from(fileList).filter((file) => {
      if (file.size > maxSize) {
        setError(`File ${file.name} exceeds ${maxSizeMB}MB.`);
        return false;
      }
      return true;
    });

    setFiles(validFiles);
    setError(null);
    if (onUpload) onUpload(validFiles);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleFiles(e.dataTransfer.files);
  };

  const handleChange = (e) => {
    handleFiles(e.target.files);
  };

  return (
    <div
      className="file-uploader"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onClick={() => inputRef.current.click()}
    >
      <input
        ref={inputRef}
        type="file"
        style={{ display: "none" }}
        onChange={handleChange}
        accept={accept}
        multiple={multiple}
      />
      <div className="upload-area">
        <p>Drag & drop files here or <span className="browse-text">browse</span></p>
        {error && <p className="error">{error}</p>}
        {files.length > 0 && (
          <ul className="file-list">
            {files.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default FileUploader;