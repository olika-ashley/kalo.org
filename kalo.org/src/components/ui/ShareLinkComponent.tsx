import React from 'react';

const ShareLinkComponent = () => {
  // Get the current URL
  const currentUrl = window.location.href;

  // Function to copy the URL to clipboard
  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 p-2 rounded-md">
      <input
        readOnly
        className="flex-1 p-2 bg-transparent border-none focus:outline-none"
        type="text"
        value={currentUrl}
      />
      <button
        onClick={copyUrlToClipboard}
        className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Copy Link
      </button>
    </div>
  );
};

export default ShareLinkComponent;
