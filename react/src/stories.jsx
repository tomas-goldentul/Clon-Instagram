import { useState, useEffect } from "react";
import './stories.css';
import Story from "./story.jsx";

function Stories() {
  const [stories, setStories] = useState([
    {
      id: 1,
      user: "@ana",
      img: "/story1.png",
    },
    {
      id: 2,
      user: "@lui",
      img: "/story2.png",
    },
    {
      id: 3,
      user: "@mar",
      img: "/story3.png",
    },
    {
      id: 4,
      user: "@pep",
      img: "/story4.png",
    },
    {
      id: 5,
      user: "@jos",
      img: "/story5.png",
    },
    {
      id: 6,
      user: "@fed",
      img: "/story6.png",
    },
    {
      id: 7,
      user: "@ric",
      img: "/story7.png",
    },

  ]);

  return (
    <>
            <h1>Stories</h1>

      <div className="stories">
        {stories.map((story) => (
          <Story key={story.id}
            username={story.user}
            foto={story.img} />

        )
        )}
      </div>

    </>
  );
}
export default Stories;