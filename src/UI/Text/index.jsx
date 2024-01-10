import style from './Text.module.scss'

const Text = (props) => {
    const { text = '__text__', type = 'p', color = 'black', ...otherProps } = props
    if (type === 'h1') return <h1 className={`${style[color]} ${style.h1} ${style[otherProps?.className]}`}>{text}</h1>
    if (type === 'h2') return <h2 className={`${style[color]} ${style.h2} ${style[otherProps?.className]}`}>{text}</h2>
    else return <p className={`${style[color]} ${style.p} ${style[otherProps?.className]}`}>{text}</p>
}

export default Text;