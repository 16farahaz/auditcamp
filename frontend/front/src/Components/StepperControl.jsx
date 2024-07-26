import React, { useState } from 'react'; // Add useState here
import { useNavigate } from 'react-router-dom';


export default function StepperControl({ handleClick, currentStep, steps,handleConfirm }) {
  const navigate = useNavigate();
  const [confirmationSuccess, setConfirmationSuccess] = useState(false);

  const handleConfirmClick = async () => {
    const isSuccessful = await handleConfirm(); // Call handleConfirm and get the success status
    if (isSuccessful) {
      setConfirmationSuccess(true);
      navigate('/cong'); // Navigate to the Cong component if successful
    } else {
      setConfirmationSuccess(false);
      alert('Data submission failed. Please try again.');
    }
  };
  return (
    <div className="container mt-4 mb-8  flex justify-around">
      <button
        onClick={() => handleClick()}
        className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
          currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
        }`}
      >
        Back
      </button>

      {currentStep === steps.length-1 ? (
        <button
        
          onClick={handleConfirmClick} 
          className="cursor-pointer rounded-lg bg-teal-600 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
        >
          Confirm
        </button>
      ) : (
        <button
          onClick={() => handleClick("next")}
          className="cursor-pointer rounded-lg bg-teal-600 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
        >
          Next
        </button>
      )}
    </div>
  );
}