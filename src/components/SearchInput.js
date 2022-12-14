import React from "react";

class SearchInput extends React.Component {
    /*callback function to handle user input . It is a community convention (name, and so on)
    onInputChange(event) {

    }   */

    //move to a Controlled Component using state to handle the form's input data 
    constructor(props) {

        super(props)

        this.state = { entry: '' }

    }

    //EVENT HANDLER for submit input; always use an arrow function syntax to avoid errors
    onFormSubmit = (event) => {
        event.preventDefault(); // to avoid the input to disappear when we press Enter key

        this.props.onSearchSubmit(this.state.entry)
    }
    //SEARCH ENTRY FORM
    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <div className='ui massive icon input'>
                            <input
                                type="text"
                                placeholder='search...'
                                onChange={(event) => this.setState({ entry: event.target.value })}
                                value={this.state.entry}
                            />
                            <i className='search icon'></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

export default SearchInput;