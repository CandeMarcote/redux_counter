import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions, IDENTIFIERS } from '../store/index';
/* import { IDENTIFIERS } from '../store/index'; */

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter)
  const dispatch = useDispatch();

  function incrementButtonHandler() {
    dispatch(counterActions.increment())
  }

  function increaseButtonHandler() {
    dispatch(counterActions.increase(5))
    /* dispatch({ type: 'INCREASE', amount: 5}) */
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
      <button onClick={decreaseButtonHandler}>Decrease by 5</button>
      <button onClick={incrementButtonHandler}>Increment</button>
      <button onClick={decrementButtonHandler}>Decrement</button>
      <button onClick={increaseButtonHandler}>Increase by 5</button>
      <br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
