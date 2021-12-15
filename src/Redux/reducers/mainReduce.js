import produce from 'immer';
import createReducer from "./ReducerUtils";
const initialState = {
  name: "",
  go: false,
  test: 0,
  arrDiv: [ {"i": 0, "action": null }, {"i": 1, "action": null }, {"i": 2, "action": null },],
  random:Math.floor(Math.random() * (2))

};
const mainReducer = {


  setName(state, action) {
    
    state.name = action.payload;
  },

  setTest(state, action) {
    state.test++;
  },
  setGo(state, action) {
      
    state.go = action.payload.act;

  },
  setArrDiv(state, action) {
    
    state.arrDiv[action.payload.i] = action.payload;
  },
  
  setRandom(state, action) {
    
    state.random +=  action.payload;
  },


};

export default produce((state, action) => createReducer(state, action, mainReducer), initialState);


