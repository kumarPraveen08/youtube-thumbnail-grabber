import { useState } from "react";
import "./home.scss";
import { Link } from "react-router-dom";

export default function Home() {
  const [link, setLink] = useState("");

  const extractVideoIdFromUrl = (url) => {
    const match = url.match(
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)$/
    );
    return match ? match[1] : null;
  };
  const videoId = extractVideoIdFromUrl(link);

  const items = [
    {
      img: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      quality: "HD 1980x1080",
    },
    {
      img: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
      quality: "SD 680x480",
    },
    {
      img: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      quality: "HQ 480x360",
    },
    {
      img: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
      quality: "MQ 320x180",
    },
  ];
  return (
    <div className="home">
      <div className="wrapper">
        <input
          type="text"
          placeholder="Paste Youtube Video URL: https://..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button onClick={() => console.log(`click`)}>Submit</button>
        <p>
          Get ready to enhance your YouTube experience with our incredible app.
          Now you can effortlessly download YouTube thumbnails in every
          available quality with just a few taps. With our user-friendly
          interface and intuitive features, accessing and downloading YouTube
          thumbnails has never been easier. Simply choose the desired quality,
          and download the thumbnail directly to your device.
        </p>
        <p>
          We prioritize speed and efficiency, optimizing our app to provide
          lightning-fast downloads. No more waiting around – get instant access
          to high-quality YouTube thumbnails and elevate your content creation
          game.
        </p>

        <div className="thumbnailWrapper">
          <h2>Download Thumbnails:</h2>

          {videoId ? (
            <div className="items">
              {items.map((item) => (
                <div className="item" key={item}>
                  <Link to={item?.img || "#"} target="_blank">
                    <img
                      src={
                        item?.img ||
                        `http://via.placeholder.com/${
                          item.quality.split(" ")[1]
                        }`
                      }
                      alt=""
                    />
                  </Link>
                  <div className="quality">{item.quality}</div>
                </div>
              ))}
            </div>
          ) : (
            <span className="notFound">No Thumbnail Found</span>
          )}
        </div>
      </div>
    </div>
  );
}
