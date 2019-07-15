import React from 'react';
import Input from '../Input';
import TextArea from '../TextArea'

const AddAreaInput = props => {
    return (
        <div>
            <form className="container">
                <Input
                    inputType={"number"}
                    title={"Wielkość działki (ha)"}
                    name={"field_size"}
                    value={props.newArea.field_size}
                    placeholder={"Wpisz wielkość działki"}
                    handleChange={props.handleChange}
                />
                <Input
                    inputType={"text"}
                    title={"Rodzaj uprawy"}
                    name={"crop_type"}
                    value={props.newArea.crop_type}
                    placeholder={"Wpisz rodzaj uprawy"}
                    handleChange={props.handleChange}
                />
                <Input
                    inputType={"number"}
                    title={"Data zasiania"}
                    name={"since_when_sown"}
                    value={props.newArea.since_when_sown}
                    placeholder={"Wpisz datę siania"}
                    handleChange={props.handleChange}
                />
                <label>
                    Las w pobliżu
                    <input
                        checked={props.statehecked}
                        onChange={props.forestChange}
                        type="checkbox" />
                </label><br />
                <label>
                    Ugór
                    <input
                        checked={props.statefallen}
                        onChange={props.fallenChange}
                        type="checkbox" />
                </label>
                <TextArea
                    title={"Dodatkowe informacje"}
                    rows={20}
                    cols={90}
                    value={props.newArea.additional_description}
                    name={"additional_description"}
                    handleChange={props.handleTextArea}
                    placeholder={"Tutaj wpisz dodatkowe informacje o działce, okolicy, uprawie, terenie itp."}
                />
                <input onClick={props.addField} type="submit" value="Register"/>
            </form>

        </div>
    )
}

export default AddAreaInput;