const Hello = () => {
    const onClick = () => {
        alert('Hello World!')
    }

    const text = 'Hello React!'

    return (
        <div onClick={onClick}>
            {text}
        </div>
    )
}

export default Hello
