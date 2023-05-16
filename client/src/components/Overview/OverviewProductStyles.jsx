import react,  {useState, useEffect, useRef, useLayoutEffect}from 'react';

import OverviewStyleItem from './OverviewStyleItem.jsx'
export default function ({productStyles, currentStyle, setCurrentStyle}){
  const [styles, setStyles] = useState([]);
  console.log(productStyles)
  useEffect(()=> {

    if(productStyles){

      setStyles([]);
      productStyles.map((style) => {

        setStyles(styles =>[...styles, style])

      });
    }


  },[productStyles])

  useEffect(()=>{
    console.log(styles)
  }, [styles])


  if (styles && productStyles !== undefined) {



    return (
      <div className="overviewStyleSelectionDiv">
        {styles.map((style, index)=> {
          return(
            <OverviewStyleItem key={index} style={style} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle}/>

          )

        })}
      </div>

    )
  }

  return(
    <progress></progress>
  )
}