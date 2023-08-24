import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { isLoading, page, nbPages, handelPage } = useGlobalContext();
  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={() => handelPage("decrease")}>
        prev
      </button>
      <p>{page +1} of {nbPages}</p>
      <button disabled={isLoading} onClick={() => handelPage("increase")}>
        next
      </button>
    </div>
  );
};

export default Buttons;
