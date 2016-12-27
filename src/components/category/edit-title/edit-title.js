import React from 'react';

const EditTitle = (props) => {
    const { tmpTitle, renameCategory, disableEdit, changeTmpTitle } = props;

    const onChange = (e) => {
        e.preventDefault();
        changeTmpTitle(e.target.value);
    };
    const save = (e) => {
        e.preventDefault();
        renameCategory();
        disableEdit();
    };
    const disable = (e) => {
        e.preventDefault();
        disableEdit();
    };

    return (
        <form className="edit-title" action="" onSubmit={save}>
            <div className="input-holder">
                <input type="text" value={tmpTitle} className="edit" onChange={onChange} autoFocus={true}/>
            </div>
            <div className="actions-holder">
                <div className="actions">
                    <button className="fa fa-check green" type="submit" />
                    <button className="fa fa-times red" onClick={disable} />
                </div>
            </div>
        </form>
    );
};

export default EditTitle;