import React from "react";
import "./styles.css";

const data = {
  videos: [
    {
      thumbnail: "https://picsum.photos/id/914/210/118",
      title: "MELHOR ONDA JÁ SURFADA",
      author: "Surfing Birds",
      views: "255M",
      uploadedAt: "4 days ago",
      duration: "4:20"
    },
    {
      thumbnail: "https://picsum.photos/id/915/210/118",
      title: "Floresta",
      author: "ICMBIO",
      views: "500",
      uploadedAt: "10 months ago",
      duration: "10:01"
    },
    {
      thumbnail: "https://picsum.photos/id/916/210/118",
      title: "TRIP NAS MONTANHAS",
      author: "Viagem na viagem",
      views: "2.7M",
      uploadedAt: "1 year ago",
      duration: "14:20"
    },
    {
      thumbnail: "https://picsum.photos/id/910/210/118",
      title: "TRIP NAS MONTANHAS 2",
      author: "Viagem na viagem",
      views: "133K",
      uploadedAt: "4 days ago",
      duration: "5:20"
    }
  ]
};

function VideoList() {
  const { videos } = data;

  return (
    <section>
      <h1>VideoList</h1>

      <div className="video-list">
        {videos.map(video => (
          <div className="video">
            <div className="video__thumb">
              <img src={video.thumbnail} alt={video.title} />
              <div className="video__duration">{video.duration}</div>
            </div>
            <p className="video__title">{video.title}</p>
            <p className="video__author">{video.author}</p>
            <span className="video__views">{video.views} views</span>
            <span className="video__uploadedAt"> {video.uploadedAt}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function App() {
  return <VideoList />;
}

export default App;
