import React, { useState } from 'react';
import InputComponent from './InputComponent';
import { useSelector } from "react-redux";

export default () => {
    const { firstName, lastName, state, city, phone, address1, email, jobTitle, reason, zip } = useSelector(state => state.member);
    return (
        <div className="testbox">
            <form action="/">
                <div className="banner">
                    <h1>Thanks for your submission</h1>
                </div>
                <div className="colums">
                    <div className='item'>
                        <p>First Name: <b>{firstName}</b></p>
                    </div>
                    <div className='item'>
                        <p>Last Name: <b>{lastName}</b></p>
                    </div>
                    <div className='item'>
                        <p>Email: <b>{email}</b></p>
                    </div>
                    <div className='item'>
                        <p>Address1: <b>{address1}</b></p>
                    </div>
                    <div className='item'>
                        <p>State: <b>{state}</b></p>
                    </div>
                    <div className='item'>
                        <p>City: <b>{city}</b></p>
                    </div>
                    <div className='item'>
                        <p>Zip/Postal Code: <b>{zip}</b></p>
                    </div>
                    <div className='item'>
                        <p>Phone: <b>{phone}</b></p>
                    </div>
                    <div className='item'>
                        <p>Job Title: <b>{jobTitle}</b></p>
                    </div>
                    <div className='item'>
                        <p>Reason: <b>{reason}</b></p>
                    </div>
                </div>
            </form>
        </div>
    );
};