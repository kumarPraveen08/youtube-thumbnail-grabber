import { Link } from "react-router-dom";
import "./recent.scss";

export default function Recent() {
  let images = [
    "ewYeWxDpNtE",
    "gr-2WDiv6Cg",
    "V17ZPVUSRFw",
    "fWKMJxIsIpY",
    "MHngdlu3cIM",
    "0qgV5SsXbv0",
    "6SVX_1y0Gb0",
    "unALIGrrr7o",
    "xRbjoaoZE_w",
    "BqI1NvWelQo",
    "f0-0AwtBqBQ",
    "xUXxdYWNgws",
    "5Wq_f3xdEcs",
    "9uf8kFQT_oA",
    "_PSJRtS7k8g",
    "OnwWlYf4BtE",
    "jkHcC3uFJgM",
    "6r8Dooe7f-k",
    "_VVOOtvD0JA",
    "w9HtCYfXbFI",
    "ZqT7DpM2oiQ",
    "2MW441PxMvA",
    "0G8IkYDTOnw",
    "8QJXChYdLS4",
    "95f_-HW0fco",
    "n326q9nKAWQ",
  ];

  images = images.sort(() => {
    const randomTrueOrFalse = Math.random() > 0.5;
    return randomTrueOrFalse ? 1 : -1;
  });

  return (
    <div className="recent">
      <h2>Recent Downloads</h2>
      {images.slice(0, 10).map((image) => (
        <Link to={image} key={image}>
          <img
            src={
              `https://img.youtube.com/vi/${image}/maxresdefault.jpg` ||
              "http://via.placeholder.com/640x360"
            }
            alt={image}
          />
        </Link>
      ))}
    </div>
  );
}
