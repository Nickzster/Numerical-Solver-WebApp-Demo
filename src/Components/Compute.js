export default function Compute(xInit, yInit, stepSize, xTerm) {
  let xInitial = xInit;
  let yInitial = yInit;
  let xArray = [];
  let yArray = [];
  let yNew = yInit;
  while (xInitial <= xTerm) {
    //test function: 2*x+3*y+1
    xArray.push(xInitial);
    yArray.push(yInitial);
    yNew = yInitial + stepSize * (2 * xInitial + 3 * yInitial + 1);
    xInitial += 0.05;
    yInitial = yNew;
  }
  let ArrayObject = {
    xArr: xArray,
    yArr: yArray
  };
  return ArrayObject;
}
