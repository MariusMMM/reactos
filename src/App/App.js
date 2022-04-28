import React, {useEffect, useState} from 'react'
import FlexH from './components/layout/FlexH/FlexH'
import FlexW from './components/layout/FlexW/FlexW'
import MemeForm from './components/ui/MemeForm/MemeForm'
import MemeSvgViewer from './components/ui/MemeSvgViewer/MemeSvgViewer'
import Navbar from './components/ui/Navbar/Navbar'
import {REST_ADR, REST_RESOURCES} from './config/config.js'
import store from './store/store';

const appInitialState={
  meme:{
    text:'react c cool',
    x:20,
    y:20,
    fontSize:20,
    fontWeight:'900',
    color:'#ACB0A1',
    imageId:0,
    underline:true,
    italic:false,
    name:'mon 1er meme'
  },
  images: [],
  memes:[]
  /*
  images:
  [
    {
      id:0,
      name:'image',
      url:'illus_51.jpg',
      w:1100,
      h:730
    },
    {
      id:1,
      name:'image',
      url:'illus_86.jpg',
      w:720,
      h:407
    },  
  ]
  */
}

let isLoaded = false;

function App(props) {
  const [state,setstate] = useState(appInitialState)
  useEffect(()=>{
    if(isLoaded){return}
    isLoaded=true;
    const promiseMemes = fetch(`${REST_ADR}${REST_RESOURCES.MEMES}`, {
      headers:{Accept: "application/json"},
      method: "GET",
    }).then((f)=>{
      console.log(f);
      return f.json()
    })
    const promiseImages = fetch(`${REST_ADR}${REST_RESOURCES.IMAGES}`).then((f)=>{
      console.log(f);
      return f.json()
    })
    Promise.all([promiseImages, promiseMemes])
    .then((tab_promiseObject)=>{
      setstate({
        ...state,
        images:tab_promiseObject[0],
        memes:tab_promiseObject[1]
      });
    });
  },[]);

  return (
    <div className='App' style={{height:'90vh'}}>
      <div>Header</div>
      <Navbar />
      <FlexH>
        <FlexW>
        <MemeSvgViewer 
        meme={state.meme} 
        image={state.images.find((img) => img.id === state.meme.imageId)}/>
        <MemeForm 
        meme={state.meme} 
        images={state.images} 
        onFormChange={(newMeme)=>setstate({...state,meme:newMeme})}
         />
        </FlexW>
      </FlexH>
      <div>Footer</div>
    </div>
  )
}

export default App
//     <div>{JSON.stringify(state.images)}</div>
