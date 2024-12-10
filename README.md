# YouTube Playlist Downloader

A modern web application that allows you to easily download YouTube playlists. Built with React, TypeScript, and Python.

![YouTube Playlist Downloader](https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=2000)

## Features

- 🎥 Download entire YouTube playlists with ease
- 📁 Specify custom download locations
- 🎨 Modern, responsive UI with Tailwind CSS
- ⚡ Fast downloads using yt-dlp
- 🔔 Real-time download status notifications

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd youtube-playlist-downloader
```

2. Install frontend dependencies:

```bash
npm install
```

3. Install Python dependencies:

```bash
pip install -r requirements.txt
```

## Usage

1. Start the Python backend server:

```bash
python server.py
```

The server will start on `http://localhost:5000` 2. Start the frontend development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` 3. Using the application:

- Open your browser and navigate to `http://localhost:5173`
- Paste a YouTube playlist URL into the input field
- (Optional) Specify a custom download path
- Click "Download Playlist" to start downloading

## Technical Details

### Frontend

- React with TypeScript for type safety
- Tailwind CSS for styling
- Radix UI Icons for consistent iconography
- React Hot Toast for notifications

### Backend

- Flask server with CORS support
- yt-dlp for reliable YouTube downloads
- Supports custom download paths
- Error handling and progress reporting

## Error Handling

The application includes comprehensive error handling:

- Validates YouTube playlist URLs
- Checks if the Python server is running
- Handles network errors gracefully
- Provides user feedback through toast notifications

## Development

To contribute to the project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Acknowledgments

- [yt-dlp](https://github.com/yt-dlp/yt-dlp) for the powerful download capabilities
- [Tailwind CSS](https://tailwindcss.com) for the styling system
- [React](https://reactjs.org) for the frontend framework
