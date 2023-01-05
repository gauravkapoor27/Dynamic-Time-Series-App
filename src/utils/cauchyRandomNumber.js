const cauchyRandomNumber = (g) => {
  const x = Math.random() - 0.5;
  return g * Math.tan(Math.PI * x);
};

export default cauchyRandomNumber;
