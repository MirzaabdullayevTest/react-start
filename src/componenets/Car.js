import cls from './Car.module.css'

function Car(props) {
    const classes = [cls.car]
    const inputCls = []

    const divStyle = {
        background: props.color,
    }

    if (props.hasError) {
        inputCls.push(cls.error)
    } else {
        inputCls.push(cls.success)
    }

    return (
        <div className={classes.join(' ')} style={divStyle}>
            <h2>{props.name}</h2>
            <input
                className={inputCls.join(' ')}
                type="text"
                onChange={(e) => { props.changeComponentValue(e.target.value, props.idx) }}
                value={props.name}
            />

            <p><strong>Year: </strong>{props.year}</p>

            <button
                // onClick={() => props.changeBgHandler(props.idx)}
                onClick={props.changeBgHandler.bind(this, props.idx)}
                style={{ cursor: 'pointer' }}
            >RGB
            </button>

            <button onClick={props.removeHandler.bind(this, props.idx)}>
                Remove
            </button>
        </div>
    )
}

export default Car