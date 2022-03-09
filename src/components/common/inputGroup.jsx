import React from "react";

const InputGroup = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor={name}>
        {label}
      </label>
      <select name={name} id={name} {...rest} className="form-select">
        <option value="" />
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default InputGroup;
