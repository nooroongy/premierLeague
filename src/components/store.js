import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'useReducer',
    initialState: {
        clubs: ['Arsenal',
        'Aston Villa',
        'Brentford',
        'Brighton and Hove Albion',
        'Burnley',
        'Chelsea',
        'Crystal Palace',
        'Everton',
        'Leeds United',
        'Leicester City',
        'Liverpool',
        'Manchester City',
        'Manchester United',
        'Newcastle United',
        'Norwich City',
        'Southampton',
        'Tottenham Hotspur',
        'Watford',
        'West Ham United',
        'Wolverhampton Wanderers',
        ]
    },
    reducers: {
    }
})

export const ACTION = slice.actions;
export default configureStore({ reducer: slice.reducer })

