import Box from "../utils/Box";
import "./textfield.css";
import { forwardRef, useImperativeHandle, useState } from "react";

// We need to wrap component in `forwardRef` in order to gain
// access to the ref object that is assigned using the `ref` prop.
// This ref is passed as the second parameter to the function component
export const TextField = forwardRef(
  ({ fieldName, placeholder, type, name, validate, classes }, ref) => {
    const [error, setError] = useState("");

    // The component instance will be extended
    // with whatever you return from the callback passed
    // as the second argument
    useImperativeHandle(ref, () => ({
      getError(param) {
        const err = validate(param);
        if (err) {
          setError(err);
          return true;
        }
        return false;
      },
    }));

    return (
      <div className={classes}>
        <div className="flex justify-between items-center">
          <label
            htmlFor={name}
            className="fieldLabel"
            style={{ color: error !== "" ? "red" : "" }}
          >
            {fieldName}
          </label>
          {error !== "" && <p className={"errorText"}>{error}</p>}
        </div>
        <Box height="10" />
        <input
          id={name}
          className={"textbox"}
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={() => {
            setError("");
          }}
          style={{ borderColor: error !== "" ? "red" : "" }}
        />
      </div>
    );
  }
);
