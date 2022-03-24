import Car from './componenets/Car'

function App() {
    const divStyle = {
        display: 'flex',
        justifyContent: 'center'
    }
    return (
        <div className="cars" style={divStyle}>
            <Car name="Ford" year="2020" />
            <Car name="Audi" year="2019" />
            <Car name="BMW" year="2022" />
            <Car name="Tesla" year="2022"></Car>
        </div >
    )
}

export default App