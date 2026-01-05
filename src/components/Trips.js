import React from "react";

function Trips() {
  const tripsData = [
    {
      year: "2025",
      title: "Mugla, Turkiye",
      description: "Off-road driving in the mountains of Mugla.",
      image: "/images/motor.jpeg",
      connectedToNext: false,
    },
    {
      year: "2025",
      title: "Vienna, Austria",
      description:
        "The place that impressed me most with its architecture during my trip to Vienna was the Wiener Staatsoper.",
      image: "/images/viyana1.jpeg",
      connectedToNext: true,
    },
    {
      year: "2025",
      title: "Vienna, Austria",
      description:
        "The Hofburg Palace and the surrounding buildings, which caught my attention with their history, were worth seeing.",
      image: "/images/viyana2.jpeg",
      connectedToNext: false,
    },
    {
      year: "2025",
      title: "Prague, Czech Republic",
      description:
        "I had walked across the Charles Bridge, one of Prague's most important landmarks, almost five or six times, enjoying its beautiful view.",
      image: "/images/prag1.jpeg",
      connectedToNext: true,
    },
    {
      year: "2025",
      title: "Prague, Czech Republic",
      description:
        "I experienced different locations with the aim of observing the Charles Bridge from different angles.",
      image: "/images/prag2.jpeg",
      connectedToNext: false,
    },
    {
      year: "2025",
      title: "Paris, France",
      description:
        "I feel lucky to have visited the magnificent Louvre Museum before the robbery.",
      image: "/images/paris1.jpeg",
      connectedToNext: true,
    },
    {
      year: "2025",
      title: "Paris, France",
      description:
        "One of the activities I enjoyed most during my trip to Paris was watching a PSG match live, as a football fan.",
      image: "/images/paris2.jpeg",
      connectedToNext: true,
    },
    {
      year: "2025",
      title: "Paris, France",
      description:
        "Even though it's nothing more than a pile of iron, the feeling it evokes is very different.",
      image: "/images/paris3.jpeg",
      connectedToNext: false,
    },
    {
      year: "2024",
      title: "Amsterdam, Netherlands",
      description:
        "Even though it was short, seeing the canals during my trip to Amsterdam was a different and beautiful experience.",
      image: "/images/hollanda.jpeg",
      connectedToNext: false,
    },
    {
      year: "2024",
      title: "Cologne, Germany",
      description:
        "Seeing Cologne Cathedral in person is a completely different and beautiful experience, unlike anything you get from pictures or videos.",
      image: "/images/almanya1.jpeg",
      connectedToNext: true,
    },
    {
      year: "2024",
      title: "Cologne, Germany",
      description:
        "I feel lucky that my trip to Cologne coincided with Christmas time. ",
      image: "/images/almanya2.jpeg",
      connectedToNext: false,
    },
  ];

  return (
    <div className="main-content active">
      <h1 className="section-title">Trips</h1>
      <div className="trips-timeline-container">
        {tripsData.map((trip, index) => {
          const prevTrip = index > 0 ? tripsData[index - 1] : null;
          const showYear = !prevTrip || !prevTrip.connectedToNext;

          return (
            <div
              className={`trips-timeline-item ${
                trip.connectedToNext ? "connected" : ""
              }`}
              key={index}
            >
              <div className="trips-timeline-year">
                {showYear ? trip.year : ""}
              </div>
              <div className="trips-timeline-dot"></div>
              <div className="trips-timeline-content">
                <h3 className="trips-timeline-title">{trip.title}</h3>
                <p className="trips-timeline-description">{trip.description}</p>
                {trip.image && (
                  <div className="trips-timeline-image">
                    <img src={trip.image} alt={trip.title} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Trips;
