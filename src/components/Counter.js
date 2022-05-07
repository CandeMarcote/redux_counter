import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch();

  function incrementButtonHandler() {
    dispatch(counterActions.increment())
  }

  function increaseButtonHandler() {
    dispatch(counterActions.increase(5))
  }

  function decreaseButtonHandler() {
    dispatch(counterActions.decrease(5))
  }

  function decrementButtonHandler() {
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementButtonHandler}>Increment</button>
      <button onClick={decrementButtonHandler}>Decrement</button>
      <br />
      <button onClick={increaseButtonHandler}>Increase by 5</button>
      <button onClick={decreaseButtonHandler}>Decrease by 5</button>
      <br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
