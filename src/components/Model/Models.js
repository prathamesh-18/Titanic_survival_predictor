import React from 'react';

// import useStyles from "./styles";
import './style.css'
export default function Models() {
//   const classes = useStyles();

  return (
    <div className="root">
        <img className="img" src={require('../images/o1.png').default} height={800} width={800}></img><br/>
        <img className="img" src={require('../images/o2.png').default} height={800} width={800}></img><br/>
        <img className="img" src={require('../images/pic.png').default} height={800} width={800}></img><br/>
        <img className="img" src={require('../images/pic2.png').default} height={800} width={800}></img><br/>
        <img className="img" src={require('../images/o4.png').default} height={800} width={800}></img><br/>
        <img className="img" src={require('../images/o5.png').default} height={800} width={800}></img><br/>
    </div>
  );
}
