import React from 'react'

const Detail1 = ({ texts, title }) => {
  return (
    <div className="detial-list">
      {texts.map(test => (
        <div className="detail-preview" key={test.id}>
          <img src={test.mainimg} alt="" />
          <h2>{test.subtext}</h2>
          <h2>{test.deatiltitle}</h2>
          <p>{test.deatillegth}</p>
          <p className='text'>{test.deatilprice}</p>
          <h1>sdsds</h1>
        </div>
      ))}
    </div>
  );
};

export default Detail1