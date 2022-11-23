import React, { useEffect, useState } from "react";

function ReadMore({ children }) {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const [show, setShow] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  useEffect(() => {
    if (text.length > leng) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [text]);
  var leng = 15;
  return (
    <p className="inline w-[100%]">
      {isReadMore ? text.slice(0, leng) : text}
      <span onClick={toggleReadMore} className="cursor-pointer underline">
        {show ? (isReadMore ? " ... More" : "  Less") : ""}
      </span>
    </p>
  );
}

export default ReadMore;
