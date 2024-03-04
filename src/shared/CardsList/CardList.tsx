import React, { useContext } from 'react';
import { Card } from "./Card/Card";
import style from './cardslist.css';
import { postContext, IPostDataContext } from '../../context/postContext';

export const CardsList = () => {
  const best = useContext(postContext);

  return (
    <ul className={style.cardslist}>
      {best.map((p: IPostDataContext) => (
        <Card key={p.id}
          id={p.id}
          subreddit={p.subreddit}
          title={p.title}
          create_at={p.datePostUtc}
          author={p.author}
          score={p.score}
          avatar={p.avatar}
          imgSrc={p.previewImg} />
      ))}
    </ul>
  );
};
