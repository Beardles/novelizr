import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Divider, Header, Message, Segment } from 'semantic-ui-react'
import { selectCharacter } from '../../actions/character'

// TODO: Edit this inline instead of forcing to go back to table
class Character extends Component {
    setCharacterFromRoute = characters => {
        const characterId = this._getCharacterIdFromRoute()
        const character = characters.filter(c => c.id === characterId)[0]
        this.props.handleSelectCharacter(character)
    }

    render () {
        const { characters, character } = this.props
        
        // TODO: Research best practices for conditional rendering
        if (!characters && !character) {
            return null
        } else if (characters && !character) {
            this.setCharacterFromRoute(characters)
            return (
                <div>Loading Character...</div>
            )
        } else if (character) {
            return (
                <div>
                    <Header as='h1'>{character.fullName}</Header>
                    <Divider />
                    <Header as='h2'>{character.age}, {character.gender}</Header>
                    <Segment>
                        <div>
                            <Header sub>Birth Date</Header>
                            <span>{character.birthDate}</span>
                        </div>
                        <Divider section />
                        <div>
                            <Header sub>Education</Header>
                            <span>{character.education}</span>
                        </div>
                        <Divider section />
                        <div>
                            <Header sub>Birth Place</Header>
                            <span>{character.birthPlace}</span>
                        </div>
                        <Divider section />
                        <div>
                            <Header sub>Current Location</Header>
                            <span>{character.currentLocation}</span>
                        </div>
                        <Divider section />
                        <div>
                            <Header sub>Family Info</Header>
                            <span>{character.familyInfo}</span>
                        </div>
                        <Divider section />
                        <div>
                            <Header sub>Details</Header>
                            <span>{character.details}</span>
                        </div>
                    </Segment>
                </div>
            )
        } else {
            return (
                <div>
                    <Header as='h1'>Oh No!</Header>
                    <Message negative>
                        <Message.Header>We couldn't find that character!</Message.Header>
                        <p>Please try another character or go back to the character list.</p>
                    </Message>
                </div>
            )
        }
    }

    _getCharacterIdFromRoute () {
        return this.props.match.params.characterId
    }
}

const mapStateToProps = state => {
    return {
        characters: state.character.characters,
        character: state.character.selectedCharacter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSelectCharacter: character => dispatch(selectCharacter(character))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Character)