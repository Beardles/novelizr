import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectCharacter, createCharacter, updateCharacter, updateSelectedCharacter, deleteCharacter } from '../../actions/character'
import { Button, Header, Icon, Table } from 'semantic-ui-react'
import Character from '../../domain/Character'
import CharacterEdit from './CharacterEdit'

class CharacterList extends Component {
    showEditModal = false

    handleAddNewClick = () => {
        this.props.handleSelectCharacter(new Character())
        this.showEditModal = true
    }

    handleEditClick = character => {
        this.props.handleSelectCharacter(character)
        this.showEditModal = true
    }

    handleDeleteClick = id => {
        this.props.deleteCharacter(id)
    }

    viewCharacter = character => {
        this.props.handleSelectCharacter(character)
        this.props.history.push(`/characters/${character.id}`)
    }

    render () {
        return (
            <div>
                <Header as='h1'>Characters</Header>
                <div className='mb-35'>
                    <Button color='teal' onClick={this.handleAddNewClick}>
                        <Icon name='plus' />
                        Add New
                    </Button>
                </div>
                <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Age</Table.HeaderCell>
                            <Table.HeaderCell>Gender</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        { this.props.characters.map(c => (
                            <Table.Row key={c.id}>
                                <Table.Cell selectable>
                                    <Link to={`/characters/${c.id}`} onClick={() => this.viewCharacter(c)}>{c.fullName}</Link>
                                </Table.Cell>
                                <Table.Cell>{c.age}</Table.Cell>
                                <Table.Cell>{c.gender}</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    <Icon link name='eye' onClick={() => this.viewCharacter(c)} />
                                    <span className='action-separator'>|</span>
                                    <Icon link name='pencil' onClick={() => this.handleEditClick(c)} />
                                    <span className='action-separator'>|</span>
                                    <Icon link name='delete' onClick={() => this.handleDeleteClick(c.id)} />
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>

                <CharacterEdit open={this.showEditModal} {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        characters: state.character.characters,
        selectedCharacter: state.character.selectedCharacter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSelectCharacter: character => {
            dispatch(selectCharacter(character))
        },
        handleCreateComplete: character => {
            dispatch(createCharacter(character))
        },
        handleEditComplete: character => {
            dispatch(updateCharacter(character))
        },
        handleEditCancel: () => {
            dispatch(selectCharacter(null))
        },
        updateSelectedCharacter: value => {
            dispatch(updateSelectedCharacter(value))
        },
        deleteCharacter: id => {
            dispatch(deleteCharacter(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)