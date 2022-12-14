import React from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import ImageList from "./ImageList";


class App extends React.Component {
    //the constructor allows to pass the entry props to the child components
    constructor(props) {
        super(props)

        //add the state; it's going to be an object called 'images' containing an array
        this.state = { images: [] }
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }
    //CALLBACK METHOD for the search entry 
    //Async keyword
    async onSearchSubmit(entry) {

        //HERE WE CREATE THE REQUEST TO THE pixabay.com API ; we need a key, by the way...
        //creat a variable to store the request
        const response = await axios.get(`https://pixabay.com/api/?key=31498837-7b30d1c88dd1a3ec86df7daa8&q=${entry}&image_type=photo`);
        //console.log(response.data.this);

        //update the state
        this.setState({ images: response.data.hits })
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '30px' }} >
                <SearchInput onSearchSubmit={this.onSearchSubmit} />

                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;
