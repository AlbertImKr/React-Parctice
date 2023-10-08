import React, { useState, useMemo } from "react"

const UseMemoSample = () => {
    const [text, setText] = useState('')
    const [items, setItems] = useState<string[]>([])

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const onClickButton = () => {
        setItems((prevItems) => {
            return [...prevItems, text]
        })

        setText('')
    }
    const numberOfCharacters1 = items.reduce((sub, item) => {
        console.log(`Current sub: ${sub}, Current item: ${item}, Item Length: ${item.length}`);
        return sub + item.length;
    }, 0);

    const numberOfCharacters2 = useMemo(() => items.reduce((sub, item) => {
        console.log('numberOfCharacters2')
        return sub + item.length
    },0), [items])

    return (
        <div>
            <p>UseMemoSample</p>
            <div>
                <input value={text} onChange={onChangeInput} />
                <button onClick={onClickButton}>Add</button>
            </div>
            <div>
                {items.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div>
                <p>Number of characters: {numberOfCharacters1}</p>
                <p>Number of characters: {numberOfCharacters2}</p>
            </div>
        </div>
    )
}

export default UseMemoSample
