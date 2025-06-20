import { useRef } from "react";
function Input({ addItem }) {
  const tName = useRef(null);
  const tDate = useRef(null);
  return (
    <>
      <div className="row g-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Task"
            aria-label="Task"
            ref={tName}
          />
        </div>

        <div className="col">
          <input
            type="date"
            className="form-control"
            placeholder="Date"
            aria-label="date"
            ref={tDate}
          />
        </div>

        <div className="col p">
          <button
            onClick={(e) => {
              addItem(tName.current.value, tDate.current.value);
              tName.current.value = "";
              tDate.current.value = "";
            }}
            type="button"
            className="btn btn-success"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Input;
