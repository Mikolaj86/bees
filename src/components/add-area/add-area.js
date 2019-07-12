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
                // it_forest: false,
                // since_when_sown: '',
                // crop_type: '',
                // additional_description: '',
            ],
            newArea: {},
        }
    }

    handleInput(e) {
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

    addField = async (event) => {
        event.preventDefault();
        let newField = {
            id: Date.now(),
            field_size: this.state.newArea.field_size,
            it_forest: this.state.newArea.it_forest,
            crop_type: this.state.newArea.crop_type,
            since_when_sown: this.state.newArea.since_when_sown,
            additional_description: this.state.newArea.additional_description,
        };
        this.setState({
            areas: [...this.state.todos, newField],
            newArea: {}
        })
        const {data} = await Axios.post('http://localhost:8000/todoes_create/', newField)
    }

    render() {
        return (
          <div className="Add">
              <AddAreaInput newArea={this.state.newArea} handleChange={this.handleInput} />
          </div>
        );
    }


}

export default AddArea;
