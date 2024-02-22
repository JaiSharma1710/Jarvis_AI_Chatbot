import UploadIcon from "@/icons/uploadIcon";

const UploadFile = ({ handleFileUpload }) => (
  <div className="w-1/4">
    <label>
      <UploadIcon />
      <input
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleFileUpload}
      />
    </label>
  </div>
);

export default UploadFile;
