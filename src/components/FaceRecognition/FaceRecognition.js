import React from 'react';


const FaceRecognition = ({imageURL}) => {
    return (
      <div className="center ma">
          <div className="absolute mt4">
          <img alt="" src={imageURL} width="500p" height="auto"/>
          </div>
      </div>
    )
}

export default FaceRecognition;