import style from './Counter.module.scss'

const Counter = ({ count, changeCount }) => {
    return (
        <div className={style.counter} onClick={(e) => e.preventDefault()}>
            <p onClick={() => changeCount('-')}>-</p>
            <p>{count}</p>
            <p onClick={() => changeCount('+')}>+</p>
        </div>
    );
}

export default Counter;