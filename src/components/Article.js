import React from "react";

function Article(props) {
  const minutes = props.minutes
  const readLengthArray= []
  let readLengthLine = ''


  if(minutes<30){
    const closestFives = Math.ceil(minutes / 5);
    for ( let i = 0; i < closestFives; i++){
      readLengthArray.push('☕️')
    }
    readLengthLine = ` • ${readLengthArray.join('')} ${minutes} minutes to read`
  }else{
    const closestTens = Math.ceil(minutes / 10);
    for ( let i = 0; i < closestTens; i++){
      readLengthArray.push('🍱')
    }
    readLengthLine = ` • ${readLengthArray.join('')} ${minutes} minutes to read`
  }


  return (
    <article>
      <h3>{props.title}</h3>
      <small>{props.date || "January 1, 1970"}{readLengthLine}</small>
      <p>{props.preview}</p>
    </article>
  );
}

export default Article;
