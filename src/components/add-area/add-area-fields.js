import React from 'react';
import Input from "../registration/Input";

const AddAreaInput = props => {
    return (
        <div>
            <form className="container-fluid">
                <Input
                    inputType={"number"}
                    title={"Wielkość działki"}
                    name={"field_size"}
                    value={props.newArea.field_size}
                    placeholder={"Wpisz wielkość działki"}
                    handleChange={props.handleChange}
                />
            </form>

        </div>
    )
}

export default AddAreaInput;