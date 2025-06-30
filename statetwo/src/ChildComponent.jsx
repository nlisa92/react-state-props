function ChildComponent({name, state}) {
    return (
        <>
        <h2>Привет, {name}!</h2>
        <p>Текущий счетчик: {state} </p>
        </>
    )
}

export default ChildComponent 