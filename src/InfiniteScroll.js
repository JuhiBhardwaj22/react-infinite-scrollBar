import React, { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [count, setCount] = useState(50);
  const elements = [];
  for (let i = 1; i <= count; i++) {
    elements.push(
      <div className="count-val" key={i}>
        Count :- {i}
      </div>
    );
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [count]);

  const onScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      window.document.body.offsetHeight - 30
    ) {
      setCount(count + 50);
    }
  };

  return <div>{elements}</div>;
};

export default InfiniteScroll;
