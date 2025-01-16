import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import { addToCart } from '../../actions/cardAction';

const Pizza = ({ pizza }) => {
  const [variant, setVariant] = useState('small');
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const price = pizza.prices[0][variant] || 0;
  const totalPrice = price * quantity;

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const dispatch = useDispatch();

  // Traditional function instead of arrow function
  const addtocart = () => {
    notify()
    dispatch(addToCart(pizza, quantity, variant));
  }

  const notify = () => {
    const isMobile = window.innerWidth <= 768; // Check if the screen width is <= 768px (mobile device)
  
    toast("Item added successfully!", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        position: 'relative',
        top: '70px', // Adjust the top position as needed
        width: isMobile ? '80%' : '400px', // Set width for mobile devices or default for larger screens
        maxWidth: isMobile ? '90%' : '400px', // Ensures the toast won't exceed the screen width on mobile
        margin: isMobile ? '0 auto' : 'inherit', // Center the toast on mobile devices
      },
    });
  };


  return (
    <div className="flex justify-center p-4 shadow-2xl">
      <div className="card bg-base-100 max-w-sm md:max-w-md lg:max-w-lg w-full">
        <div className="card-header text-center mb-2">
          <h2 className="text-xl mt-1 md:text-2xl lg:text-3xl font-bold">
            {pizza.name}
          </h2>
        </div>

        <figure className="p-2">
          <img
            src={pizza.image}
            alt="Pizza"
            className="rounded-md w-36 h-36 object-cover mx-auto cursor-pointer"
            onClick={handleImageClick}
          />
        </figure>

        <div className="p-4">
          <div className="mb-2 flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
            <div className="flex flex-col items-center w-full md:w-1/2">
              <label className="text-center font-semibold mb-1">Variant</label>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
                className="select select-bordered w-full"
              >
                {pizza.variants.map((variant) => (
                  <option key={variant} value={variant}>
                    {variant}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col items-center w-full md:w-1/2">
              <label className="text-center font-semibold mb-1">Quantity</label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="select select-bordered w-full"
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="rating text-center flex justify-center items-end mt-4">
            {[...Array(5)].map((_, i) => (
              <input
                key={i}
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange-400 text-xs md:text-base lg:text-2xl"
                defaultChecked={i === 1}
              />
            ))}
          </div>

          <div className="card-actions justify-center md:justify-between mt-2">
            <span className="text-lg font-semibold">Price: {totalPrice} BDT</span>
            <button className="btn btn-primary btn-md" onClick={addtocart}>
              Add to Cart
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <dialog id="my_modal_3" open className="modal sm:right-2 modal-open">
          <div className="modal-box relative right-2">
            <button onClick={handleCloseModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

            <h2 className="text-lg font-bold mb-1">{pizza.name}</h2>
            <hr />

            <figure className="p-2">
              <img
                src={pizza.image}
                alt="Pizza"
                className="rounded-md w-36 h-36 object-cover mx-auto cursor-pointer"
              />
            </figure>

            <p className="text-justify text-sm py-2">{pizza.description}</p>
            <hr />
            <div className="modal-action">
              <button onClick={handleCloseModal} className="btn btn-primary">
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Pizza;
