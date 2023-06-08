import { createSlice } from "@reduxjs/toolkit";

export const ProfileSlice = createSlice({
    name: 'profileData',
    initialState:{
     value:{
        activation_date: '',
        email:'',
        joining_date:'',
        level_team:[],
        level_upline:[],
        name:'',
        password:'',
        phone:'',
        profile_pic:'',
        sponsor_id:'',
        sponsor_name:'',
        status:'',
        user_id:'',
     }
    },
    reducers:{
        setProfileData: (state, action) =>{
            state.value = action.payload
        }
    }
})
export const{setProfileData} = ProfileSlice.actions
export default ProfileSlice.reducer