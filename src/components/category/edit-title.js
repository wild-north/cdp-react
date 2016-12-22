import React, {Component} from 'react';

export default class EditTitle extends Component {
    componentDidMount() {
        /**
         * sorry for that but I couldn't find another way for automatic focus
         */
        document.querySelector('.edit-title input[type=text]').focus();
    }

    render() {
        const { tmpTitle, item, onChange, save, disableEdit } = this.props;

        return (
            <form className="edit-title" action="" onSubmit={save(item.id)}>
                <div className="input-holder">
                    <input type="text" value={tmpTitle || ''} className="edit" onChange={onChange}/>
                </div>
                <div className="actions-holder">
                    <div className="actions">
                        <button className="fa fa-check green" type="submit">{' '}</button>
                        <button className="fa fa-times red" onClick={disableEdit}>{' '}</button>
                    </div>
                </div>
            </form>
        );
    }
}