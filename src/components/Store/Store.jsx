import React from "react";
import "./Store.css";
import Card from "./Card";
import Storebg from "./Storebg";

const Store = () => {
  return (
    <div className="store">
      <Storebg />

      <div className="storecards">
        <Card image="/img/storecardimg1.png" title="Dreamscapes Travel Group" />
        <Card image="/img/storecardimg2.png" title="Wanderlust Adventures" />
        <Card image="/img/storecardimg3.png" title="Epic Escapes" />
        <Card image="/img/storecardimg3.png" title="Nomadic Quests" />

        <Card image="/img/storecardimg4.png" title="Roaming Roads Travel Co." />
        <Card image="/img/storecardimg5.png" title="Vagabond Ventures" />
        <Card image="/img/storecardimg6.png" title="Odyssey Expeditions" />
        <Card image="/img/storecardimg7.png" title="Dreamscapes Travel Group" />

        <Card
          image="/img/storecardimg8.png"
          title="Coastal Getaways Travel Co."
        />
        <Card image="/img/storecardimg9.png" title="Global Journeys" />
        <Card image="/img/storecardimg10.png" title="Odyssey Expeditions" />
        <Card image="/img/storecardimg11.png" title="Nomadic Quests." />

        <Card image="/img/storecardimg4.png" title="Epic Escapes" />
        <Card
          image="/img/storecardimg5.png"
          title="Trekking Trails Travel Co."
        />
        <Card
          image="/img/storecardimg6.png"
          title="Trekking Trails Travel Co."
        />
        <Card image="/img/storecardimg7.png" title="Vagabond Ventures" />
      </div>
    </div>
  );
};

export default Store;
