import { useState } from "react";

export function Form({onSubmit}) {
    const [isVisiblePassword, setStateVisiblePassword] = useState(false)
    const [formData, setFormData] = useState({
        login: '',
        password: '',
    })
    
    /*
        const handleLoginInput = (e) => {
            const value = e.target.value;
        
            setFormData({
                password: formData.password,
                login: value,
            })
        }

        const handlePasswordInput = (e) => {
            const value = e.target.value;
        
            setFormData({
                login: formData.login,
                password: value,
            })
        }
    */

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(formData)
            }}
        >
            <table>
                <caption>Авторизация</caption>
                <tbody>
                    <tr>
                        <td>Логин: </td>
                        <td>
                            <input 
                                name="login" 
                                type="text" 
                                value={formData.login}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>Пароль: </td>
                        <td>
                            <input 
                                name="password" 
                                value={formData.password}
                                type={isVisiblePassword ? "text" : "password"}
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <button 
                                type="button"
                                onClick={() => setStateVisiblePassword(prev => !prev)}
                            >
                                {isVisiblePassword ? '~' : 'o'}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button>Сохранить</button>
        </form>
    )
}