import { useState } from 'react';

function ImageUploader() {
  const [base64Image, setBase64Image] = useState(
    () => localStorage.getItem('uploadedImage') || ''
  );

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setBase64Image(base64String);
        localStorage.setItem('uploadedImage', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h2>Upload and Save Image as Base64</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {base64Image && (
        <div>
          <h3>Base64 Image Preview:</h3>
          <img
            src={base64Image}
            alt="Uploaded Preview"
            style={{ width: '200px' }}
          />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
