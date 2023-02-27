import React from "react";

function Error() {
  const handleBack = () => window.history.back();
  return (
    <>
      <div className="text-center container py-5 my-5">
        <h2 className="fw-bold fs-1 my-5 text-danger">Error :)</h2>
        <p className="fs-4 text-primary ">Page not found!!!</p>
        <button className="btn btn-success w-25" onClick={handleBack}>
          Back
        </button>
      </div>
    </>
  );
}

export default Error;
