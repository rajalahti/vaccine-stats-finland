import React from "react";
import { Typography } from "@material-ui/core";
import "./Timeline.css";

export default function Timeline(props) {
  const { daysUntillVaccinated70, date70Vaccinated, daysUntillVaccinated100, date100Vaccinated } = props.data;
  return (
    <section className="timeline_grid">
      <img
        className="timeline_background"
        src="./covid_vaccine.jpg"
        alt="Kovid rokote"
      />
      <blockquote className="timeline_overlay_top">
        <Typography variant="h5" component="h3" className="timeline_p">
          "EU-komissio esittää jäsenmaille tavoitteeksi, että unionin
          aikuisväestöstä 70 prosenttia olisi rokotettu kesään mennessä."
        </Typography>
      </blockquote>
      <blockquote className="timeline_overlay_bottom">
        <Typography variant="h5" component="h3">
          Nykyisellä rokotustahdilla tavoite on mahdollista saavuttaa{" "}
          <span style={{fontWeight: 'bold'}}>{date70Vaccinated}</span> eli <span style={{fontWeight: 'bold'}}>{daysUntillVaccinated70}</span> päivässä.
        </Typography>
        <Typography variant="h5" component="h3" style={{ marginTop: 40 }} className="timeline_p">
          100 % rokotekattavuus olisi mahdollista 
          saavuttaa <span style={{fontWeight: 'bold'}}>{date100Vaccinated}</span> eli <span style={{fontWeight: 'bold'}}>{daysUntillVaccinated100}</span> päivässä.
        </Typography>
      </blockquote>
    </section>
    
  );
}
