import { useState } from 'react';

const Calc = () => {
  const nums = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '+', '-', '*', '/'];
  const [inputValue, setInputValue] = useState('');
  const onPutNums = (el) => {
    setInputValue(inputValue + el);
  };
  const equal = () => {
    setInputValue(eval(inputValue));
  };
  return (
    <>
      <ul className="calk">
        <li className="item input ">
          <form name="form">
            <input value={inputValue} type="text" name="textview" readOnly />
          </form>
        </li>

        {nums
          .sort((x1, x2) => x2 - x1)
          .map((val, index) => (
            <li
              className="item gr up"
              key={index}
              onClick={() => {
                onPutNums(val);
              }}>
              {val}
            </li>
          ))}
        <li
          onClick={() => {
            setInputValue('');
          }}
          className="item del">
          C
        </li>
        <li
          className="item eq"
          onClick={() => {
            equal();
          }}>
          =
        </li>
      </ul>
    </>
  );
};

export default Calc;
