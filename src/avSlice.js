import { createSlice } from "@reduxjs/toolkit";
import projector from './pics/business-20031_1280.jpg';
import speakers from './pics/speakers-4109274_1280.jpg';
import microphone from './pics/public-speaking-3926344_1280.jpg';
import whiteboard from './pics/whiteboard-2903269_1280.png';
import signs from './pics/signpost-235079_1280.jpg';

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
        img: projector,
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: speakers,
        name: "Speakers",
        cost: 35,
        quantity: 0,
    },
    {
        img: microphone,
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: whiteboard,
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },
    {
        img: signs,
        name: "Signage",
        cost: 80,
        quantity: 0,
    }
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if(item){
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if(item && item.quantity > 0){
            item.quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
