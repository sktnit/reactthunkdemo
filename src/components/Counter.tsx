import { increment, decrement } from "../reducers/counterSlice";
import { useAppDispatch } from "../utils/hook";

const Counter = () => {
  const dispatch = useAppDispatch();
  const handleClick = (func: any) => {
    dispatch(func());
  };
  return (
    <>
      <div onClick={() => handleClick(increment)}>+</div>
      <div onClick={() => handleClick(decrement)}>-</div>
    </>
  );
};

export default Counter;
