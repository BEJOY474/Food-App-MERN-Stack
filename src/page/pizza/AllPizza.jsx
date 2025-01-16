import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { getAllTodos } from "../../actions/todosAction";
import Pizza from "./Pizza";
import todosReducer from "./../../reducers/todosReducer";

const AllPizza = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  // Get data from the Redux store
  const pizzastate = useSelector((state) => state.todosReducer);
 
  const { todos, error, loading } = pizzastate;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  // Pagination
  const offset = currentPage * itemsPerPage;
  const currentItems = todos.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(todos.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const allPiza = (
    <div className="container h-auto px-4 mx-auto max-w-screen-2xl xl:px-9">
      <div className="p-4 mt-[20%] md:mt-[8%]">
        {" "}
        {/* Add margin-top conditionally */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-blue-500 h-16 w-16 animate-spin">
              <div className="border-red-500 border-t-4 border-b-4 h-full w-full absolute rounded-full"></div>
              <div className="border-green-500 border-r-4 border-l-4 h-full w-full absolute rounded-full"></div>
            </div>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-red-500 text-lg">
              Error: {error.message || "Something went wrong"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-opacity duration-500 opacity-100">
            {currentItems.map((pizza, index) => (
              <Pizza pizza={pizza} key={index} />
            ))}
          </div>
        )}
        <div className="flex justify-center mt-8">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination flex justify-center space-x-1"}
            activeClassName={"active"}
            pageClassName={"page-item"}
            pageLinkClassName={
              "page-link px-2 py-1 border rounded text-gray-700 hover:bg-gray-200 text-sm"
            }
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={
              "page-link px-2 py-1 border rounded text-gray-700 hover:bg-gray-200 text-sm"
            }
            nextLinkClassName={
              "page-link px-2 py-1 border rounded text-gray-700 hover:bg-gray-200 text-sm"
            }
            breakLinkClassName={
              "page-link px-2 py-1 border rounded text-gray-700 text-sm"
            }
            activeLinkClassName={"bg-blue-500 text-white"}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
     
      {
       (allPiza)
      }
     
    </>
  );
};

export default AllPizza;
