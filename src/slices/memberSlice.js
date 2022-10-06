import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    address1: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    jobTitle: '',
    reason: ''
};

export const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    updateMemberInfo: (state, action) => {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.email = action.payload.email;
        state.address1 = action.payload.address1;
        state.city = action.payload.city;
        state.state = action.payload.state;
        state.zip = action.payload.zip;
        state.phone = action.payload.phone;
        state.jobTitle = action.payload.jobTitle;
        state.reason = action.payload.reason;
    }
  }
});

export const { updateMemberInfo } = memberSlice.actions;

export default memberSlice.reducer;
