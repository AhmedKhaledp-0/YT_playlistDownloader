import React from 'react';
import { Toaster } from 'react-hot-toast';
import DownloadForm from './components/DownloadForm';
import { Icons } from './components/icons';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Icons.youtube className="mx-auto h-12 w-12 text-indigo-600" />
          <h1 className="mt-3 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            YouTube Playlist Downloader
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Download entire YouTube playlists with ease. Just paste the playlist URL and click download.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <DownloadForm />
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Make sure to run the Python backend server before using the downloader.</p>
          <p className="mt-2">
            Run: <code className="bg-gray-100 px-2 py-1 rounded">python server.py</code>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;