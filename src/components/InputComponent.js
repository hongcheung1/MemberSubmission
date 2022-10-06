import React from "react";

export default ({label, name, onChange, value, required, validation}) => {
    return (
        <div className="item">
            <label htmlFor={name}>{label} {required == true && <span>*</span>}</label>
            <input id={name} onChange={onChange} value={value} type="text" name={name}/>
            {validation != '' && <span>{validation}</span>}
        </div>
    );
};