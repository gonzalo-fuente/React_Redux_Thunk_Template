/* Redux */
import { useSelector, useDispatch } from "react-redux";
import { setIncrement, setDecrement } from "../store/counter/counterAction";

export default function Counter() {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <div className="p-4 text-center bg-white rounded-lg border shadow-md sm:p-8 mx-auto w-fit">
      <h3 className="mb-4 text-3xl font-bold text-gray-900 ">
        Counter: {counter}
      </h3>
      <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <button
          onClick={() => {
            dispatch(setDecrement());
          }}
          className="w-full sm:w-auto flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 "
        >
          <div className="text-left">
            <div className="-mt-1 font-sans text-sm font-semibold">
              Decrement
            </div>
          </div>
        </button>
        <button
          onClick={() => {
            dispatch(setIncrement());
          }}
          className="w-full sm:w-auto flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 "
        >
          <div className="text-left">
            <div className="-mt-1 font-sans text-sm font-semibold">
              Increment
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
