import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectCharacter } from '../../actions/character'
import { Button, Header, Icon, Table } from 'semantic-ui-react'
import Character from '../../domain/Chapter'

class CharacterList extends Component {
    showEditModal = false

    handleAddNewClick = () => {
        this.props.selectCharacter(new Character())
        this.showEditModal = true
    }

    handleEditClick = (chapter) => {
        this.props.selectChapter(chapter)
        this.showEditModal = true
    }

    handleDeleteClick = (id) => {
        this.props.deleteChapter(id)
    }

    viewCharacter = (character) => {
        this.props.selectCharacter(character)
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

                        </Table.Row>
                    </Table.Header>

                    <Table.Body>

                    </Table.Body>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = {
    selectCharacter
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)