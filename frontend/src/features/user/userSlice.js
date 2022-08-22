import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: "",
    token: "",
    assets: [],
    id: "",
    gold: 0,
    exp: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loadUser: (state, {payload}) => {

            state.username = payload.username;
            state.token = payload.token;
            state.assets = payload.assets;
            state.id = payload.id || payload._id;
            state.gold = payload.gold;
            state.exp = payload.exp;
            state.energy = Number(payload.energy);
            state.actualStage = payload.actualStage;
        }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { loadUser } = userSlice.actions
  
  export default userSlice.reducer