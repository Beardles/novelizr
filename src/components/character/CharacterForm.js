import React, { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'

class CharacterForm extends Component {
    handleInputChange = evt => {
        const val = {
            [evt.target.name]: evt.target.value
        }
        this.props.updateSelectedCharacter(val)
    }

    render () {
        const { character } = this.props
        return (
            <Form>
                <Form.Field>
                    <label>Honorific</label>
                    <input type='text' name='honorific' value={character.honorific} onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>First Name</label>
                    <input type='text' name='firstName' value={character.firstName} onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>Middle Name</label>
                    <input type='text' name='middleName' value={character.middleName} onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input type='text' name='lastName' value={character.lastName} onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>Suffix</label>
                    <input type='text' name='suffix' value={character.suffix} onChange={this.handleInputChange} />
                </Form.Field>
                    <label>Gender</label>
                    <input type='text' name='gender' value={character.gender} onChange={this.handleInputChange} />
                <Form.Field>
                </Form.Field>
                <Form.Field>
                    <label>Age</label>
                    <input type='number' name='age' value={character.age} onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>Birth Date</label>
                    <input type='text' name='birthDate' value={character.birthDate} onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>Education</label>
                    <input type='text' name='education' value={character.education} onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>Birth Place</label>
                    <input type='text' name='birthPlace' value={character.birthPlace} onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>Current Location</label>
                    <input type='text' name='currentLocation' value={character.currentLocation} onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>Family Info</label>
                    <TextArea name='familyInfo' value={character.familyInfo} onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>Details</label>
                    <TextArea name='details' value={character.details} onChange={this.handleInputChange} />
                </Form.Field>
            </Form>
        )
    }
}

export default CharacterForm