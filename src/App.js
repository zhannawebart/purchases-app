import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {
  const [purchases, setPurchases] = useState(data);   //gifts-изначальное состояние, setGifts-придумали это имя,чтобы прописать его в кнопке в подслушке для изменения состояния,а именно - при клике на кнопку-удалятся все подарки
  //console.log(data);
  const removePurchase = (id) => {
    let newPurchases = purchases.filter(purchase => purchase.id !==id);
    //console.log(newGifts);
    setPurchases(newPurchases); 
  }

  return (
    <div className='widthContainer'>
      <div className='container'>
        <h1>List of {purchases.length} purshases</h1>
      </div>

      {purchases.map((element => {
        const {id, purchase, image} = element;

        return (
          <div key={id }>
            <div className='container'>
              <h2>{id} - {purchase}</h2>
            </div>

            <div className='container'>
              <img src={image} width="300px" alt="shoes"/>
            </div>

            <div className='container'>
              <button onClick={() => removePurchase(id)}>delete</button>
            </div>
          </div>
        )
      }))}

      <div className='container'>
        <button onClick={() => setPurchases([])} className="stylemainbtn">delete all</button>
      </div>

    </div>
  );
}

export default App;
