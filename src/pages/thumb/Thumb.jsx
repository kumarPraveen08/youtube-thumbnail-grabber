import "./thumb.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Home() {
  const videoId = useLocation().pathname;

  const items = [
    {
      img: `https://img.youtube.com/vi${videoId}/maxresdefault.jpg`,
      quality: "HD 1980x1080",
    },
    {
      img: `https://img.youtube.com/vi${videoId}/sddefault.jpg`,
      quality: "SD 680x480",
    },
    {
      img: `https://img.youtube.com/vi${videoId}/hqdefault.jpg`,
      quality: "HQ 480x360",
    },
    {
      img: `https://img.youtube.com/vi${videoId}/mqdefault.jpg`,
      quality: "MQ 320x180",
    },
  ];
  const videoUrl = `https://www.youtube.com/watch?v=${videoId.split("/")[1]}`;

  return (
    <div className="thumb">
      <div className="wrapper">
        <input
          type="text"
          placeholder="Plast Youtube Video URL: https://..."
          value={`videoId: ${videoId}`}
          disabled={true}
        />
        <Link to={videoUrl} className="videoUrl" target="_blank">
          {videoUrl}
        </Link>
        {/* <button onClick={() => console.log(`click`)}>Submit</button> */}
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque maxime
          aut asperiores quae voluptas omnis saepe hic. Autem sed magni ab
          eligendi, ex ut quia, quidem delectus, ipsam provident eaque!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim vitae
          minus dolor recusandae quis eveniet consectetur est, sed harum
          doloribus possimus tenetur ut, itaque facilis ab id temporibus fuga
          alias?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, iste?
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
                      download={item?.img}
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
