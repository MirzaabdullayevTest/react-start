import { Component } from 'react'
import './Car.css'

class Car extends Component {
    state = {
        name: 'Ford',
        year: 2022,
        background: 'indigo',
        opacity: null,
    }

    constructor(props) {
        super()
        this.name = props.name
        this.year = props.year
    }

    render() {
        const divStyle = {
            'textAlign': 'center',
            margin: '10px',
            border: '1px solid #ccc',
            boxShadow: '0 0 8px #ccc',
            padding: '10px 50px',
            display: 'inline-block',
            cursor: 'pointer',
            transition: ".5s",
            background: this.state.background,
            color: 'white'
        }

        const func = () => {
            let r = Math.floor(Math.random() * 256)
            let g = Math.floor(Math.random() * 256)
            let b = Math.floor(Math.random() * 256)
            let rgb = `rgb(${r}, ${g}, ${b})`

            console.log(rgb);

            this.setState({ background: rgb })
        }

        return (
            <div className='car' style={divStyle}>
                {/* <h2 style={{ color: 'red', fontSize: '30px' }}>{this.name}</h2>
                <p><strong>Year:</strong> {this.year}</p>
                <p><strong>Age: </strong> {2022 - this.year}</p>
                <p><strong>Id: </strong> {Math.floor(Math.random() * 100)}</p> */}

                <h2>{this.state.name}</h2>
                <p><strong>Year: </strong>{this.state.year}</p>
                <button onClick={func} style={{ cursor: 'pointer' }}>RGB </button>
            </div>
        )
    }
}

// function Car(props) {
//     const divStyle = {
//         'textAlign': 'center',
//         margin: '10px',
//         border: '1px solid #ccc',
//         boxShadow: '0 0 8px #ccc',
//         padding: '10px 50px',
//         display: 'inline-block',
//         cursor: 'pointer',
//         transition: ".5s"
//     }


//     return (
//         <div className='car' style={divStyle}>
//             <h2 style={{ color: 'red', fontSize: '30px' }}>{props.name}</h2>
//             <p><strong>Year:</strong> {props.year}</p>
//             <p><strong>Age: </strong> {2022 - props.year}</p>
//             <p><strong>Id: </strong> {Math.floor(Math.random() * 100)}</p>
//         </div>
//     )
// }

// const Car = ({ name, year }) => {
//     return (
//         <div className='car'>
//             <h2>{name}</h2>
//             <p><strong>Year:</strong> {year}</p>
//         </div>
//     )
// }

// export default Car
// export default function Car({ name, year }) {
//     return (
//         <div className='car'>
//             <h2>{name}</h2>
//             <p><strong>Year:</strong> {year}</p>
//         </div>
//     )
// }

export default Car