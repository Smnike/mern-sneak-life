import React, {Component} from 'react'
import ShoeList from './ShoeList'
import axios from 'axios'

class ShoeContainer extends Component {
    state = {
        shoes: []
        // currentIndex: 
    }

//Assisted by Kevon
    componentDidMount () {
        axios.get('https://safe-gorge-55726.herokuapp.com/sneakers')
        .then(response => this.setState({shoes:response.data}))
    }

render () {
    let shoes = this.state.shoes
    return (
        <div>
            <main>
                <div className='container'>
                {
                    this.state.shoes.map((shoe, shoeIndex) => {
                        return <li key={shoeIndex}>{shoe.brand} {shoe.name}</li>
                    })
                }
                {/* <ShoeList /> */}
                </div>
                {/* console.log("ShoeList") */}
            </main>
        </div>
        )
     }
}

export default ShoeContainer
