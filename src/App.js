import React, {useState} from 'react';
import 'sass/style.css'

const Package = (props) => {
  const {description, title, name, portion, mice, customerSatisfied, weight, capture, disable} = props;

  const [chosen, setChosen] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="package-inner">
        <div
          className={`package ${active ? 'active' : 'default'} ${disable ? 'disable' : ''} `}
          onClick={() => {
            if (!disable) {
              setChosen(!chosen);
            }
          }}
          onMouseLeave={(event) => {
            if (chosen) {
              setActive(true);
            } else {
              setActive(false);
            }
          }}
        >
          <div className="package__description">{description || "Сказочное заморское яство"}</div>
          <div className="package__title">{title || "Нямушка"}</div>
          <div className="package__subtitle">{`с ${name}`}</div>
          <div className="package__detailed">
            <div className="package-detail__item">{`${portion} порций`}</div>
            <div className="package-detail__item">{`${mice} в подарок`}</div>
            {customerSatisfied && (
              <div className="package-detail__item">заказчик доволен</div>
            )}
          </div>
          <div className="package__img"/>
          <div className="package__weight">
            {weight}
            <div>кг</div>
          </div>

        </div>
        <div className="capture">
          {chosen || disable ? (
            <>
              {capture}
            </>
          ) : (
            <>
              Чего сидишь? Порадуй котэ,
              <button
                className="btn-buy"
                onClick={() => {
                  if (!disable) {
                    setChosen(!chosen);
                    setActive(!active);
                  }
                }}>
                &nbsp;купи
              </button>
              <span className="capture-dot">.</span>
            </>
          )}
        </div>
      </div>


    </>
  )
}

function App() {
  return (
    <>
      <section className="main">
        <div className="container">
          <h1 className="main__title">Ты сегодня покормил кота?</h1>
          <div className="main__content">
            <Package
              type={1}
              name="фуа-гра"
              portion={10}
              mice="мышь"
              weight="0,5"
              capture="Вкуснейшая фуа-грушка с Карибских островов."
            />
            <Package
              type={2}
              name="рыбой"
              portion={40}
              mice="2 мыши"
              weight="2"
              capture="Головы щучьи с чесноком да свежайшая сёмгушка."
            />
            <Package
              disable
              name="курой"
              portion={100}
              mice="5 мышей"
              customerSatisfied
              weight="5"
              capture="Печалька, с курой закончился."
            />
          </div>
        </div>

      </section>
    </>
  );
}

export default App;
