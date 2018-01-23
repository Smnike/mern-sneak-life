import React from 'react'
import Shoe-List from './Shoe-List'
import axios from 'axios'

class ShoeContainer extends Component {
    state = {
        shoes: [],
        currentIndex: 4
    }
}

// componentDidMount

render () {
    let shoe = this.state.shoes[this.state.currentIndex]
    return (
        <div>
            <main>
                <div className='container'>
                {shoe &&
                <Shoe-List list={shoe}}
                </div>
            </main>
        </div>
        )
     }
