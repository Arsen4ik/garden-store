import style from './Button.module.scss'

const Button = ({ text, size = 'small', color = 'green', ...otherProps }) => {
    return (
        <button className={`${style.button} ${style[size]} ${style[color]} ${style[otherProps?.className]}`} {...otherProps}>{text}</button>
    );
}

export default Button;