import UploadIcon from "@/icons/uploadIcon";

const UploadFile = ({ handleFileUpload, file }) => (
  <div className="w-1/4 relative">
    {file && (
      <div className="absolute bg-white rounded-full w-6 h-6 flex justify-center items-center -top-4 -right-4">
        1
      </div>
    )}
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
