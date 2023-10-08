import { clear } from "console";
import { useState, useEffect } from "react";

const UPDATE_CYCLE = 1000;

const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
    US = 'en-US',
    KR = 'ko-KR',
}

const getLocaleFromString = (text: string) => {
    switch (text) {
        case 'en-US':
            return Locale.US;
        case 'ko-KR':
            return Locale.KR;
        default:
            return Locale.US;
    }
}

const Clock = () => {
    const [timestamp, setTimestamp] = useState(new Date());
    const [locale, setLocale] = useState(Locale.US);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimestamp(new Date());
        }, UPDATE_CYCLE)
        return () => {
            clearInterval(timer)
        }
    }, [])

    useEffect(() => {
        const savedLocale = localStorage.getItem(KEY_LOCALE);
        if (savedLocale) {
            setLocale(getLocaleFromString(savedLocale));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(KEY_LOCALE, locale);
    }, [locale])

    return (
        <div>
            <p>
                <span id="current-time-label">현재 시각</span>
                <span>:{timestamp.toLocaleTimeString(locale)}</span>
                <select value={locale} onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
                    <option value={Locale.US}>en-US</option>
                    <option value={Locale.KR}>ko-KR</option>
                </select>
            </p>
        </div>
    )
}

export default Clock;