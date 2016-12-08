import React, { Component } from 'react';
import './styles.css';

export default class AddItem extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        };
        this.onChange = this.onChange.bind(this);
        this.add = this.add.bind(this);
    }
    onChange(e) {
        this.setState({
            text: e.target.value
        });
    }
    add(e) {
        e.preventDefault();
        this.props.add(this.state.text);
    }
    render() {
        const { placeholder } = this.props;
        const { text } = this.state;
        return (
            <div className="add-item">
                <form action="" onSubmit={this.add}>
                    <input type="text" placeholder={placeholder} value={text} onChange={this.onChange}/>
                    <button className="fa fa-plus-square" type="submit">{' '}</button>
                </form>
            </div>
        );
    }
};