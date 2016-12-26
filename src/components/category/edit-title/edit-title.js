import React from 'react';

const EditTitle = (props) => {
    const { tmpTitle, onChange, save, disableEdit } = props;
    return (
        <form className="edit-title" action="" onSubmit={save}>
            <div className="input-holder">
                <input type="text" value={tmpTitle} className="edit" onChange={onChange} autoFocus={true}/>
            </div>
            <div className="actions-holder">
                <div className="actions">
                    <button className="fa fa-check green" type="submit">{' '}</button>
                    <button className="fa fa-times red" onClick={disableEdit}>{' '}</button>
                </div>
            </div>
        </form>
    );
};

export default EditTitle;