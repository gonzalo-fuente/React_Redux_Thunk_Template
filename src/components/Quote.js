import { useEffect } from "react";

/* Redux */
import { useSelector, useDispatch } from "react-redux";
import { fetchQuote } from "../store/quote/quoteAction";

export default function Quote() {
  const { quote, author, isLoading, error } = useSelector((state) => ({
    quote: state.quote.quote,
    author: state.quote.author,
    isLoading: state.quote.isLoading,
    error: state.quote.error,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuote());
  }, []);

  return (
    <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mx-auto mt-10">
      {isLoading ? (
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          Loading...
        </h5>
      ) : (
        <div>
          {error.length !== 0 ? (
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Oops...
            </h5>
          ) : null}
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {quote}
          </h5>
          <p className="text-right mb-3 font-normal text-gray-700">{author}</p>

          <button
            onClick={() => dispatch(fetchQuote())}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
          >
            New Quote
          </button>
        </div>
      )}
    </div>
  );
}
