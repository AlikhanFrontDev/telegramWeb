import React, { useEffect } from 'react'
import { useTelegram } from '../hooks/usetelegram';
import "./Form.css"

export default function Form() {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'send data'
        })
    }, [])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }
    return (
        <>
            <h1>form</h1>
            <div className={"form"}>
                <h3>Введите ваши данные</h3>
                <input
                    className={'input'}
                    type="text"
                    placeholder={'Страна'}
                    value={country}
                    onChange={onChangeCountry}
                />
                <input
                    className={'input'}
                    type="text"
                    placeholder={'Улица'}
                    value={street}
                    onChange={onChangeStreet}
                />
                <select
                    value={subject}
                    onChange={onChangeSubject}
                    className={'select'}>
                    <option value={'physical'}>Физ. лицо</option>
                    <option value={'legal'}>Юр. лицо</option>
                </select>
            </div>
        </>

    )
}
