import React from "react";

const NewsLetter = () => {
  return (
    <div className="md:mx-8 md:my-16 m-4">
      <h1 className="text-red-500 text-center text-4xl">Brief</h1>
      <h1 className=" text-center text-3xl my-5">
        Let’s subscribe so you don’t miss the latest updates
      </h1>
      <form className=" flex gap-3 justify-center" action="">
        <input
          className="border rounded-xl bg-gray-100 w-full md:w-1/3 p-4"
          type="email"
          name=""
          placeholder="Your Email"
          id=""
        />
        <button className="p-4 text-white bg-red-400 rounded-xl">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
