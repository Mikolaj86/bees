import React, { Component } from 'react';
import Axios from 'axios';
import AddAreaInput from '../add-area/add-area-fields'

class AddArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            areas: [
                // id: '',
                // field_size: '',
                // since_when_sown: '',
                // crop_type: '',
                // additional_description: '',
                // it_forest: false,
                // is_fallen: false,
            ],
            newArea: {},
            it_forest: false,
            is_fallen: false,
        }
    }

    handleForestChange = (e) => {
        const it_forest = e.target.checked;
        this.setState({ it_forest });
    };
    handleFallenChange = (e) => {
        const is_fallen = e.target.checked;
        this.setState({ is_fallen });
    };

    handleInput = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        this.setState( prevState => {
                return {
                    newArea : {
                        ...prevState.newArea, [name]: value
                    }
                }
            }, () => console.log(this.state.newArea)
        )
    }

    handleTextArea = (e) => {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(
            prevState => ({
                newArea: {
                    ...prevState.newArea,
                    additional_description: value
                }
            }),
            () => console.log(this.state.newArea)
        );
    }

    addField = async (event) => {
        event.preventDefault();
        let newField = {
            id: Date.now(),
            field_size: this.state.newArea.field_size,
            it_forest: this.state.it_forest,
            crop_type: this.state.newArea.crop_type,
            since_when_sown: this.state.newArea.since_when_sown,
            additional_description: this.state.newArea.additional_description,
            is_fallen: this.state.is_fallen,
        };
        this.setState({
            areas: [...this.state.areas, newField],
            newArea: {}
        })
        const {data} = await Axios.post('http://localhost:8000/todoes_create/', newField)
    }

    render() {
        return (
          <div className="Add">
              <AddAreaInput addField={this.addField} newArea={this.state.newArea} handleChange={this.handleInput} handleTextArea={this.handleTextArea}
                            statehecked={this.state.it_forest} forestChange={this.handleForestChange}
                            statefallen={this.state.is_fallen} fallenChange={this.handleFallenChange}/>

          </div>
        );
    }


}

export default AddArea;
