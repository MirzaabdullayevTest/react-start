import { Component } from 'react'
import Car from './componenets/Car'

class App extends Component {
    state = {
        cars: [
            { name: 'Ford', year: 1990, color: 'red' },
            { name: 'BMW', year: 2020, color: 'black' },
            { name: 'Mazda', year: 2022, color: 'blue' },
        ],
        title: 'React components',
        val: null,
        show: true,
        hasError: false
    }

    /* ============= Handler functions started */
    changeTitleHandler = () => {
        this.setState({ title: this.state.val })
    }

    changeInputValue = (e) => {
        this.setState({ val: e.target.value })
    }

    changeBG = (index) => {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        let rgb = `rgb(${r}, ${g}, ${b})`

        // let cars = this.state.cars.concat()

        let cars = [...this.state.cars]
        cars[index].color = rgb
        this.setState({ cars })
    }

    changeComponentValue = (name, index) => {
        let cars = [...this.state.cars]
        cars[index].name = name

        if (name.length <= 0) {
            this.setState({ hasError: true })
        } else {
            this.setState({ hasError: false })
        }

        this.setState({ cars })
    }

    toggleHandler = () => {
        this.setState({ show: !this.state.show })
    }

    removeHandler = (idx) => {
        let cars = this.state.cars.concat() // 
        cars.splice(idx, 1)
        this.setState({ cars })
    }

    /* ============= Handler functions started */

    render() {
        const divStyle = {
            display: 'flex',
            justifyContent: 'center'
        }
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>{this.state.title}</h1>
                <input type="text" onChange={this.changeInputValue} />
                <input type="submit" value="Change title" onClick={() => { this.changeTitleHandler() }} />

                <button onClick={this.toggleHandler}>Show/Hide</button>
                {
                    this.state.show ?
                        <div className="cars" style={divStyle}>
                            {this.state.cars.map((car, index) => {  /* key bo'lishi kerak */
                                return (
                                    <Car
                                        hasError={this.state.hasError}
                                        key={index}
                                        idx={index}
                                        name={car.name}
                                        year={car.year}
                                        color={car.color}
                                        onClickHandler={this.changeTitleHandler}
                                        changeBgHandler={this.changeBG}
                                        changeComponentValue={this.changeComponentValue}
                                        removeHandler={this.removeHandler}
                                    />
                                )
                            })}
                        </div >
                        : null
                }
            </div>
        )
    }
}

export default App
