import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.scss";
import { getCards } from "../../utils/apiClient";

const TinderCards: React.FC = () => {
  const [people, setPeople] = useState(staticData);

  useEffect(() => {
    getCards()
      .then((res) => {
        // setPeople(res.data);
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
      });
  }, []);

  const swiped = (direction: any, nameToDelete: any) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name: any) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((item, index) => (
          <TinderCard
            className="swipe"
            key={item.id}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, item.name)}
            onCardLeftScreen={() => outOfFrame(item.name)}
          >
            <div
              style={{ backgroundImage: `url(${item.imgUrl})` }}
              className="name_card_container"
            >
              <h3>{item.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;

const staticData = [
  {
    id: "fdgs",
    name: "Lili Reinhart",
    imgUrl:
      "https://akns-images.eonline.com/eol_images/Entire_Site/2022717/rs_634x1024-220817121528-634-Lili-Reinhart-LT-81722-shutterstock_editorial_13097487gq.jpg",
  },
  {
    id: "jbvnc",
    name: "Sydney Sweeney",
    imgUrl:
      "https://akns-images.eonline.com/eol_images/Entire_Site/2022714/rs_634x1024-220814140553-634-sydney-sweeney.cm.81422.jpg",
  },
  {
    id: "SDsd",
    name: "Sela Vave",
    imgUrl:
      "https://akns-images.eonline.com/eol_images/Entire_Site/2022711/rs_634x1024-220811121229-634-Sela-Vave-LT-81122-shutterstock_editorial_13079438hs.jpg",
  },
  {
    id: "rtyur",
    name: "Katy Perry",
    imgUrl:
      "https://akns-images.eonline.com/eol_images/Entire_Site/202279/rs_634x1024-220809163202-634-katy-perry.ct.jpg",
  },
  {
    id: "rtey",
    name: "Daisy Edgar-Jones",
    imgUrl:
      "https://akns-images.eonline.com/eol_images/Entire_Site/202275/rs_634x1024-220805165353-634-daisy-edgar-jones.ct.jpg",
  },
  {
    id: "wqe",
    name: "Olivia Rodrigo",
    imgUrl:
      "https://akns-images.eonline.com/eol_images/Entire_Site/2022628/rs_634x1024-220728123605-634-Olivia-Rodrigo-LT-72822-shutterstock_editorial_13053133ad.jpg",
  },
];
