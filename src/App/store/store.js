 import {createStore} from 'redux';
 
export const ACTIONS_CURRENT=Object.freeze({
    UPDATE_CURRENT:'UPDATE_CURRENT',
    CLEAR_CURRENT:'CLEAR_CURRENT'
})

export const initialCurrentMeme={
    text:'',
    x:0,
    y:20,
    fontSize:20,
    fontWeight:'500',
    color:'#000',
    imageId:-1,
    underline:false,
    italic:false,
    name:''
  }

/**
 * Reducer pour la gestion du meme current
 * @param {object} state état lors de l'appel du reducer 
 * @param {object} action action à mettre en oeuvre {type,value|values} 
 * @returns nouvelle valeur du state non muté
 */
function currentReducer(state=initialCurrentMeme,action) {
    switch(action.type) {
        case ACTIONS_CURRENT.UPDATE_CURRENT:return {...state,...action.value};
        case ACTIONS_CURRENT.CLEAR_CURRENT:return {...initialCurrentMeme};
        default:return state;
    }
}

export const store=createStore(currentReducer);
store.subscribe(()=>{
    console.log(store.getState());
})

export default store;

store.dispatch({type:ACTIONS_CURRENT.UPDATE_CURRENT,value:{imageId:1,color:'blue'} })
store.dispatch({type:ACTIONS_CURRENT.CLEAR_CURRENT})
store.dispatch({type:ACTIONS_CURRENT.UPDATE_CURRENT,value:{text:'hello',imageId:1,color:'blue'} })

/*
let state=currentReducer(undefined, {type:'ini'});
console.log(state);
state=currentReducer(state,{type:ACTIONS_CURRENT.UPDATE_CURRENT, value:{imageId:1,color:'blue'}});
console.log(state);
state=currentReducer(state,{type:ACTIONS_CURRENT.CLEAR_CURRENT});
console.log(state);
*/
