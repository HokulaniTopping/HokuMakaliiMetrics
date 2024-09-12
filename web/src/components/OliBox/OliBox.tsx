import React from 'react';
import 'web/src/components/OliBox/OliBox.css';


interface SoilColorDictionary {
  [soilType: string]: string;
}


var soilColors: SoilColorDictionary = {
  "Ainakea": "#4F330E",
  "Akaka": "#624026",
  "Alae": "#433524",
  "Alaeloa": "#9A3324",
  "Alakai": "#b08965",
  "Alapai": "#7F341F",
  "Amalu": "#d9d576",
  "Apakuie": "#76432E",
  "Ewa": "#5B3A27",
  "Haiku": "#9B4E26",
  "Halawa": "#775343",
  "Haleiwa": "#70544A",
  "Halii": "#504133",
  "Haliimaile": "#76412A",
  "Hamakuapoko": "#816B54",
  "Hana": "#3B2F1A",
  "Hanalei": "#896047",
  "Hanamaulu": "#656649",
  "Hanipoe": "#46351E",
  "Hawi": "#776647",
  "Heake": "#675632",
  "Helemano": "#7F4324",
  "Hihimanu": "#7D543B",
  "Hilea": "#645746",
  "Hilo": "#955C2F",
  "Holomua": "#7F4324",
  "Honouliuli": "#623D30",
  "Honaunau": "#3A2C1A",
  "Honokaa": "#7A5536",
  "Honolua": "#826941",
  "Honomanu": "#4E4330",
  "": "#",
  "": "#",
  "": "#",
  "": "#",
  "": "#",
  "": "#",
  "": "#",

};



const OliBox = () => {
  return (
    <div className="wrapper-Oli-box">
      <div className="OliBox-box">
        <p>
          ʻO Kalehu ka makua,
          ʻo Wākea ka makua, <br></br>
          The parents Volcanic Ash and Sun<br></br>
          Hānau mai kā lāua ʻo Kula M he keiki<br></br>
          They give birth to the Kula soil series<br></br>
          </p>

          <p>- Ka Hānau ʻAna O Ka Papakū Honua</p>
      </div>
    </div>
  );
};

export default OliBox;
