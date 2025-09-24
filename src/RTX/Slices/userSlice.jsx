import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state) => {
      const data = localStorage.getItem("user")
      if (data) {
        state.value = JSON.parse(data)
      }
    }, clearUser: (state) => {
      state.value = null;
      localStorage.removeItem("user");
    },
       setUser: (state, action) => {
      state.value = action.payload;
    },
  }
})

export const { getUser , clearUser ,setUser} = userSlice.actions
export default userSlice.reducer
