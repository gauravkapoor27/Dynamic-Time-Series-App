const laplaceRandomNumber = (b) => {
  const u = Math.random();
  return u < 0.5 ? b * Math.log(u) : -b * Math.log(1 - u);
};

export default laplaceRandomNumber;
