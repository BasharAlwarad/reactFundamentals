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
