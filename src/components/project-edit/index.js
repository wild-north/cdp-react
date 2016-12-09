import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router';
import { CAT_ID } from '../../constants';

export default class ProjectEdit extends Component {
    constructor() {
        super();
        // const { title, comment, isActive } = this.props.item;

        this.state = {
            title: '',
            description: '',
            isActive: false
        };
    }
    componentWillMount() {
        this.setState({
            title: this.props.item.title,
            isActive: this.props.item.isActive,
            description: this.props.item.description || ''
        });
        console.log(this.props);
    }
    render() {
        const { routeParams } = this.props;
        const { title, description, isActive } = this.state;
        console.log(title);
        console.log(description);
        console.log(isActive);
        return (
            <div className="content project-info">
                <div className="row" style={{'height': 44}}></div>
                <div className="row right">
                    <button className="action-btn accept">Save changes <i className="fa fa-floppy-o">{' '}</i></button>
                    <Link to={`category/${routeParams[CAT_ID]}`}>
                        <button className="action-btn decline">Cancel <i className="fa fa-times">{' '}</i></button>
                    </Link>
                </div>
                <form>
                    <div className="row">
                        <input type="text" value={title} onChange={() => {}}/>
                    </div>
                    <div className="row">
                        <label htmlFor="is-project-active">Active</label>
                        <input type="checkbox" id="is-project-active" checked={isActive} onChange={() => {}}/>
                    </div>
                    <div className="row">
                        <textarea cols="30" rows="10" value={description} onChange={() => {}}/>
                    </div>
                </form>
            </div>
        );
    }
};