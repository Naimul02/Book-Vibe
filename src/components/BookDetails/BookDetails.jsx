import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  saveStoredToLocalStorageRead,
  saveStoredToLocalStorageWish,
} from "../../localStorage/localStorage";
const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const book = books.find((book) => book.id === idInt);

  const handleRead = (id) => {
    saveStoredToLocalStorageRead(id);
  };
  const handleWish = (id) => {
    saveStoredToLocalStorageWish(id);
  };

  return (
    <div className="min-h-screen my-10">
      <div className="flex flex-col lg:flex-row">
        <img
          src={book.book_img}
          className="lg:w-[575px] lg:h-[770px] rounded-lg bg-base-200 px-10 py-10"
        />
        <div className="ml-6 mt-6 lg:mt-0">
          <h1 className="text-3xl lg:text-5xl font-bold">{book.bookName}</h1>
          <h3 className="mt-2">
            By : <span className="text-lg font-bold">{book.author}</span>
          </h3>
          <h2 className="text-2xl font-bold my-3 border-y py-2">
            {book.category}
          </h2>
          <p className="py-6">
            <span className="text-lg font-bold">Review : </span>
            {book.review}
          </p>
          <div className="flex flex-col lg:flex-row gap-2 border-y-2 py-4">
            <h2 className="text-xl font-bold">Tags : </h2>
            <span className="font-semibold text-xl text-green-600 bg-base-200 rounded-full px-4 py-1 mr-2">
              #{book.tags[2]}
            </span>
            <span className="font-semibold text-xl text-green-600 bg-base-200 rounded-full px-4 py-1 mr-2">
              #{book.tags[1]}
            </span>
          </div>
          <div className="md:w-[400px] mr-3 lg:mr-0">
            <div className="flex items-center justify-between">
              <p>Number of Pages :</p>
              <p className="text-xl font-bold">{book.totalPages}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Publisher :</p>
              <p className="text-xl font-bold">{book.publisher}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Year of Publishing :</p>
              <p className="text-xl font-bold">{book.yearOfPublishing}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Rating :</p>
              <p className="text-xl font-bold">{book.rating}</p>
            </div>
          </div>

          <div className="mt-4">
            <button
              className="btn btn-outline px-8"
              onClick={() => handleRead(idInt)}
            >
              Read
            </button>

            <button
              onClick={() => handleWish(idInt)}
              className="btn btn-warning ml-3 px-8"
            >
              Wishlist
            </button>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
