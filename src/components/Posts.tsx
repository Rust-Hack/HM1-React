import { useState } from 'react';
import './posts.css'

const Posts = () => {

    const post = [{
        numberText: 1,
        text: 'Если у вас закончилась мазь от зуда, — Не спешите выбрасывать тюбик.Его уголком очень удобно чесаться.'
    }, {
        numberText: 2,
        text: 'Хирург говорит пациенту: — К сожалению вам требуется пересадка головного мозга.У меня есть мужской за сто долларов и женский за три тысячи.Доктор, а почему такая разница?— Видите-ли, женским не пользовались.'
    }, {
        numberText: 3,
        text: 'Бармен спрашивает пьяного посетителя:— Я вижу, у вас пустой стакан. Не хотите ли еще один?А на хрена мне два пустых стакана?'
    }, {
        numberText: 4,
        text: 'Шел Рабинович по улице. Нашел деньги. Посчитал. — Не хватает!'
    }, {
        numberText: 5,
        text: 'Двое воров ночью забрались на хлебозавод. Их встретили хлебом с солью. Хлеб был прямо из печи, а соль из ружья сторожа Петровича.'
    }]

    const [ likes, setLikes ] = useState<{[key: number]: number}>({});

    const like = (index: number) => {
        setLikes(prevLikes => {
            return { ...prevLikes, [index]: (prevLikes[index] || 0) + 1 };
        });
    };

    const createPosts = (item: any, index: number) => {
        return (
            <div className='post' key={index}>
                <h1>{item.numberText}</h1>
                <p>{item.text}</p>
                <p>{likes[index] || 0}</p>
                <button className='likeBtn' onClick={() => like(index)}>like</button>
            </div>
        )
    }

    return (
        <div className='blockPost'>
            {post.map((item, index) => createPosts(item, index))}
        </div>
    )
}

export default Posts;