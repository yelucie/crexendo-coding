import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        name: "Lucie Ye",
        role: "Junior Full Stack Developer",
        email: "lye10@hawk.iit.edu",
        phone: "3124839626",
        notes: 
`Hey, nice to meet you! This is Lucie. 
Thanks for this opportunity to show my skillset and capabilities. I've just finished my academic journey, and am not familiar with React-Redux yet. This task allowed me to learn new things, and the process was super fun!
I hope you like my work. Thanks again!`,
    profile: "/default.jpg",
    },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;