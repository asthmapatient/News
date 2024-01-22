import React from "react";

const Footer = () => {
  const footerArray = [
    {
      heading: "Sports",
      content: ["Football", "Basketball", "Tennis", "Golf", "Swim"],
    },
    {
      heading: "Politics",
      content: ["Government", "President", "DPR", "Patrai", "Democrat"],
    },
    {
      heading: "Health",
      content: ["Covid-19", "Cough", "Dizzy", "Sprain", "Typhus"],
    },
    {
      heading: "Environment",
      content: ["River", "Sea", "Mainland", "Mountains", "Ricefield"],
    },
    {
      heading: "Health",
      content: ["Covid-19", "Cough", "Dizzy", "Sprain", "Typhus"],
    },
    {
      heading: "Health",
      content: ["Covid-19", "Cough", "Dizzy", "Sprain", "Typhus"],
    },
    {
      heading: "Health",
      content: ["Covid-19", "Cough", "Dizzy", "Sprain", "Typhus"],
    },
  ];
  return (
    <div className="md:mx-8 md:my-16 m-4 pt-10 border-t-2 border-black">
      <div className=" flex justify-between flex-wrap gap-5 items-center">
        {footerArray.map((item) => {
          return (
            <div>
              <h1 className="font-bold mb-3">{item.heading}</h1>
              {item.content.map((item) => {
                return (
                  <a href="#" className="block mb-2">
                    {item}
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
