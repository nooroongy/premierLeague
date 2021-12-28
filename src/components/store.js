import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'useReducer',
    initialState: {
        clubs: ['Arsenal',
        'Aston_Villa',
        'Brentford',
        'Brighton_and_Hove_Albion',
        'Burnley',
        'Chelsea',
        'Crystal_Palace',
        'Everton',
        'Leeds_United',
        'Leicester_City',
        'Liverpool',
        'Manchester_City',
        'Manchester_United',
        'Newcastle_United',
        'Norwich_City',
        'Southampton',
        'Tottenham_Hotspur',
        'Watford',
        'West_Ham_United',
        'Wolverhampton_Wanderers',
        ],
        matchs:[
            {round:1,
            home:'Brentford',
            away:'Arsenal',
            score:[2,0]
            },
            {round:1,
            home:'Manchester_United',
            away:'Leeds_United',
            score:[5,1]
            },
            {round:1,
            home:'Burnley',
            away:'Brighton_and_Hove_Albion',
            score:[1,2]
            },
            {round:1,
            home:'Chelsea',
            away:'Crystal_Palace',
            score:[3,0]
            },
            {round:1,
            home:'Everton',
            away:'Southampton',
            score:[3,1]
            },
            {round:1,
            home:'Leicester_City',
            away:'Wolverhampton_Wanderers',
            score:[1,0]
            },
            {round:1,
            home:'Watford',
            away:'Aston_Villa',
            score:[3,2]
            },
            {round:1,
            home:'Norwich_City',
            away:'Liverpool',
            score:[0,3]
            },
            {round:1,
            home:'Newcastle_United',
            away:'West_Ham_United',
            score:[2,4]
            },
            {round:1,
            home:'Tottenham_Hotspur',
            away:'Manchester_City',
            score:[1,0]
            },
        ]
    },
    reducers: {
    }
})

export const ACTION = slice.actions;
export default configureStore({ reducer: slice.reducer })

