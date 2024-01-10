import style from './Input.module.scss'

const Input = (props) => {
    const { type = 'number', placeholder = '', options = ['by default'], ...otherProps } = props
    if (type === 'number') return <input type="text" placeholder={placeholder} className={style.input} {...otherProps} />
    else if (type === 'checkbox') return <input type="checkbox" className={`${style.input} ${style.input_checkbox}`} {...otherProps} />
    else if (type === 'select') {
        return (
            <select className={`${style.input} ${style.selector}`} {...otherProps}>
                {
                    options.map(option => <option key={option} value={option}>{option}</option>)
                }
            </select>
        )
    }
}

export default Input;