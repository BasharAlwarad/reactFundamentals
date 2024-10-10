import { useState } from 'react';

function ImageUploader() {
  const [base64Image, setBase64Image] = useState(() => {
    const savedImage = localStorage.getItem('uploadedImage');
    const expiration = localStorage.getItem('uploadedImageExpiration');

    if (savedImage && expiration) {
      const now = new Date().getTime();
      if (now < parseInt(expiration)) {
        return savedImage;
      } else {
        localStorage.removeItem('uploadedImage');
        localStorage.removeItem('uploadedImageExpiration');
      }
    }
    return '';
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setBase64Image(base64String);
        localStorage.setItem('uploadedImage', base64String);

        const expirationTime = new Date().getTime() + 1000 * 10;
        localStorage.setItem('uploadedImageExpiration', expirationTime);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-base-200">
      <h2 className="mb-4 text-2xl font-bold">
        Upload and Save Image as Base64
      </h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="w-full max-w-xs file-input file-input-bordered file-input-primary"
      />
      {base64Image && (
        <div className="mt-4">
          <h3 className="mb-2 text-lg font-medium">Base64 Image Preview:</h3>
          <img
            src={base64Image}
            alt="Uploaded Preview"
            className="w-48 rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
