import React, { Component } from 'react'
import { Form, Select, TextArea } from 'semantic-ui-react'

class CharacterCardForm extends Component {
    handleInputChange = evt => {
        const val = {
            [evt.target.name]: evt.target.value
        }
        this.props.updateSelectedCharacterCard(val)
    }

    handleSelectChange = evt => {
        const val = {
            'character': evt.target.innerText
        }
        this.props.updateSelectedCharacterCard(val)
    }

    render () {
        const { characterCard, characters } = this.props
        const characterOptions = characters.map(character => {
            return {
                text: character.fullName,
                value: character.id
            }
        })
        return (
            <Form>
               <Form.Field>
                   <label>Character</label>
                    <Select placeholder='Choose a character' options={characterOptions} onChange={this.handleSelectChange} />
                </Form.Field>
                <Form.Field>
                    <label>Details</label>
                    <TextArea name='details' value={characterCard.details} onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>Motivations</label>
                    <TextArea name='motivations' value={characterCard.motivations} onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>Interactions</label>
                    <TextArea name='interactions' value={characterCard.interactions} onChange={this.handleInputChange} />
                </Form.Field>
            </Form>
        )
    }
}

export default CharacterCardForm