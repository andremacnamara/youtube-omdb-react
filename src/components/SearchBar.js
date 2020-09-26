import React from 'react';
import Form from './styles/Form';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return (
            <Form onSubmit={this.onFormSubmit} >
                <label>Enter Your Search Term</label>
                <input 
                    type="text" 
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
            </Form>
        )
    }
};

export default SearchBar;