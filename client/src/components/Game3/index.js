import React from "react";

class GameDvoika extends React.Component {
  
    render() {
      return (
        <div className="game">
          <div style={{position: 'relative',height: 0,overflow: 'hidden',paddingBottom: '56.25%'}}>
             <iframe id="embededGame" title="dvoika" src="https://play.idevgames.co.uk/embed/dvoika/true?url=https://play.idevgames.co.uk/embed/dvoika" scrolling="no" seamless="seamless" frameBorder="0" style={{position: 'absolute',top:0,left: 0,width: '100%',height: '100%'}}>Browser not compatible.</iframe>
          </div>
        </div>
      );
    }
  }
  
  export default GameDvoika;
