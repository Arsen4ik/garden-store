import { useForm } from "react-hook-form";
import Button from "../../UI/Button";
import Text from "../../UI/Text";
import style from './Form.module.scss'

const Form = ({ onSubmit, children, classN }) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: 'onChange' })

    const onSubmitLocal = (data) => {
        onSubmit(data)
        reset()
    }

    const inputName = {
        ...register('firstname', {
            required: 'обязательно к заполнению',
            minLength: {
                value: 2,
                message: 'не менее 2 букв'
            },
            maxLength: {
                value: 10,
                message: 'не более 10 символов'
            }
        })
    }
    const inputPhone = {
        ...register('phone', {
            required: 'обязательно к заполнению',
            minLength: {
                value: 11,
                message: 'не менее 11 цифр'
            }
        })
    }
    const inputEmail = {
        ...register('email', {
            required: 'обязательно к заполнениюа',
            pattern: {
                value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/,
                message: 'Указана неверная почта',
            },
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmitLocal)} className={classN === 'basket_form' ? style.basket_form : ''}>
            {children}
            <input {...inputName} type="text" placeholder='Name' />
            {errors.firstname && <Text text={errors.firstname.message} color={classN === 'basket_form' ? 'black' : "white"} className="p-smaller" />}
            <input {...inputPhone} type="number" placeholder='Phone number' />
            {errors.phone && <Text text={errors.phone.message} color={classN === 'basket_form' ? 'black' : "white"} className="p-smaller" />}
            <input {...inputEmail} type="text" placeholder='Email' />
            {errors.email && <Text text={errors.email.message} color={classN === 'basket_form' ? 'black' : "white"} className="p-smaller" />}
            <Button onClick={() => handleSubmit(onSubmitLocal)} type="submit" size="max" color="white" text="Get a discount" />
        </form>
    );
}

export default Form;