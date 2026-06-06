import React from "react";

function About() {
  return (
    <div className="about">
      <div>
        <h2 className="heading">About Food Explorer</h2>
        <p className="content">
          Food Explorer is a personal food tracking application that helps users
          save and organize restaurants, cafes, and food spots they have visited
          or plan to visit. Instead of forgetting great places, users can store
          them along with useful information such as the country, city, rating,
          visit date, and personal notes. All saved locations can be viewed on
          an interactive map, making it easy to explore food experiences from
          different parts of the world. The application is designed to provide a
          simple and organized way to build a personal collection of favorite
          food destinations. Whether it is a local cafe, a famous restaurant, or
          a hidden food spot discovered during a trip, Food Explorer keeps
          everything in one place.
        </p>
      </div>

      <div>
        <h2 className="heading">Our Mission</h2>
        <p className="content">
          To help food lovers create a digital food journal where every
          restaurant, cafe, and memorable meal can be saved, organized, and
          revisited anytime.
        </p>
      </div>
      <div>
        <h2 className="heading">Why Choose Food Explorer?</h2>
        <ul className="content">
          <ol>• Save restaurants and cafes in seconds.</ol>
          <ol>• Organize locations by country and city.</ol>
          <ol>• Add personal ratings and notes.</ol>
          <ol>• View all saved places on an interactive map.</ol>
          <ol>• Keep your food memories organized in one place.</ol>
        </ul>
      </div>
    </div>
  );
}

export default About;
