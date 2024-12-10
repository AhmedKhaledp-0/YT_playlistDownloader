from flask import Flask, request, jsonify
from flask_cors import CORS
import yt_dlp
from pathlib import Path
import os

app = Flask(__name__)
CORS(app)

def download_playlist(url, output_path="downloads"):
    # Create downloads directory if it doesn't exist
    Path(output_path).mkdir(parents=True, exist_ok=True)
    
    ydl_opts = {
        'format': 'best',
        'outtmpl': f'{output_path}/%(playlist_index)s-%(title)s.%(ext)s',
        'ignoreerrors': True,
        'no_warnings': True,
    }
    
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
        return True, "Playlist downloaded successfully!"
    except Exception as e:
        return False, str(e)

@app.route('/download', methods=['POST'])
def handle_download():
    data = request.json
    url = data.get('url')
    download_path = data.get('download_path', 'downloads')
    
    if not url:
        return jsonify({'error': 'No URL provided'}), 400
    
    success, message = download_playlist(url, download_path)
    
    if success:
        return jsonify({'message': message}), 200
    else:
        return jsonify({'error': message}), 500

if __name__ == '__main__':
    app.run(port=5000)