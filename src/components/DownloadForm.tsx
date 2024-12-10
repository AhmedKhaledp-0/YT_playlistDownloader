import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { downloadPlaylist } from '../utils/download';
import { Icons } from './icons';

const DownloadForm: React.FC = () => {
  const [url, setUrl] = useState('');
  const [downloading, setDownloading] = useState(false);
  const [downloadPath, setDownloadPath] = useState('downloads');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) return;

    setDownloading(true);
    
    try {
      await downloadPlaylist({ url, downloadPath });
    } finally {
      setDownloading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <Input
        label="YouTube Playlist URL"
        type="url"
        id="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://www.youtube.com/playlist?list=..."
        required
      />

      <Input
        label="Download Path"
        type="text"
        id="path"
        value={downloadPath}
        onChange={(e) => setDownloadPath(e.target.value)}
        placeholder="downloads"
      />

      <Button
        type="submit"
        disabled={downloading}
        loading={downloading}
        icon={<Icons.download className="h-5 w-5" />}
      >
        Download Playlist
      </Button>
    </form>
  );
};

export default DownloadForm;