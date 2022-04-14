import React from "react";

const PresentContext = React.createContext({
  dayNum: 1,
  setDayNum: (num) => { }
});

export default PresentContext;