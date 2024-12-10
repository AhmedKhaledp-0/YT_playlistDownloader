import { toast } from 'react-hot-toast';

interface DownloadOptions {
  url: string;
  downloadPath: string;
}

export async function downloadPlaylist({ url, downloadPath }: DownloadOptions): Promise<void> {
  try {
    const response = await fetch('http://localhost:5000/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url, download_path: downloadPath }),
    });

    if (!response.ok) {
      throw new Error('Download failed');
    }

    const data = await response.json();
    toast.success(data.message);
  } catch (error) {
    toast.error('Failed to start download. Make sure the Python server is running.');
    throw error;
  }
}