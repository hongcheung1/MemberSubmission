import React, { useState } from 'react';
import InputComponent from './InputComponent';
import { useDispatch } from "react-redux";
import { updateMemberInfo } from "../slices/memberSlice";

export default ({ setSubmitted }) => {
    const dispatch = useDispatch();
    const [state, updateState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address1: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        jobTitle: 'Engineer - lead',
        reason: ''
    });

    const [validation, updateValidation] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address1: '',
        phone: ''
    });

    const validateForm = () => {
        let res = true, newVal = {
            firstName: '',
            lastName: '',
            email: '',
            address1: '',
            phone: ''
        };
        
        var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        if(re.test(state.phone) === false)    {    newVal.phone = 'Phone number is invalid'; res = false; }
        if(state.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) === false)
        {
            res = false;
            newVal.email = 'Email is invalid';
        }

        if(state.firstName === '') {    newVal.firstName = 'First Name field is missing';   res = false; }
        if(state.lastName === '')  {    newVal.lastName = 'Last Name field is missing';     res = false; }
        if(state.email === '')     {    newVal.email = 'Email field is missing';            res = false; }
        if(state.address1 === '')  {    newVal.address1 = 'Address1 field is missing';      res = false; }
        if(state.phone === '')     {    newVal.phone = 'Phone field is missing';            res = false; }


        updateValidation(newVal);

        return res;
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(validateForm() === false) return;

        dispatch(updateMemberInfo(state));
        setSubmitted(true);
    }

    const onChangeInput = (e) => {
        updateState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="testbox">
            <form action="/">
                <div className="banner">
                    <h1>New Member Registration</h1>
                </div>
                <div className="colums">
                    <InputComponent 
                        name="firstName" 
                        label="First Name" 
                        required={true} 
                        value={state.firstName} 
                        onChange={onChangeInput}
                        validation={validation.firstName} />
                    <InputComponent 
                        name="lastName" 
                        label="Last Name" 
                        required={true} 
                        value={state.lastName} 
                        onChange={onChangeInput} 
                        validation={validation.lastName} />
                    <InputComponent 
                        name="email" 
                        label="Email" 
                        required={true} 
                        value={state.email} 
                        onChange={onChangeInput}
                        validation={validation.email} />
                    <InputComponent 
                        name="address1" 
                        label="Address 1" 
                        required={true} 
                        value={state.address1} 
                        onChange={onChangeInput}
                        validation={validation.address1} />
                    <InputComponent 
                        name="city" 
                        label="City" 
                        required={false} 
                        value={state.city} 
                        onChange={onChangeInput} />
                    <InputComponent 
                        name="state" 
                        label="State" 
                        required={false} 
                        value={state.state} 
                        onChange={onChangeInput} />
                    <InputComponent 
                        name="zip" 
                        label="Zip/Postal Code" 
                        required={false} 
                        value={state.zip} 
                        onChange={onChangeInput} />
                    <div className="item">
                        <label htmlFor="jobTitle">Job Title</label><br/>
                        <select name="jobTitle" value={state.jobTitle} onChange={onChangeInput}>
                            <option value="Engineer - lead">Engineer - lead</option>
                            <option value="Engineer - mid level">Engineer - mid level</option>
                            <option value="Engineer - junion">Engineer - junion</option>
                            <option value="Engineer - front end focused">Engineer - front end focused</option>
                            <option value="Engineer - backend focused">Engineer - backend focused</option>
                            <option value="Engineer - full stack">Engineer - full stack</option>
                        </select>
                    </div>
                    <InputComponent 
                        name="phone" 
                        label="Phone" 
                        required={true} 
                        value={state.phone} 
                        onChange={onChangeInput}
                        validation={validation.phone} />
                    <div className="item">
                        <label htmlFor="reason">Reason</label>
                        <textarea name="reason" onChange={onChangeInput} value={state.reason} placeholder='Describe why you are a good fit for the job you are applying for.'></textarea>
                    </div>
                </div>
                <div className="btn-block">
                    <button type="submit" href="/" onClick={onSubmitForm}>Submit</button>
                </div>              
            </form>
        </div>
    );
};