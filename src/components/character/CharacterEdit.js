import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import CharacterForm from './CharacterForm'

const CharacterEdit = ({ open, selectedCharacter, updateSelectedCharacter, handleCreateComplete, handleEditComplete, handleEditCancel }) => {
    if (selectedCharacter === null) {
        return null
    }

    const isNew = !selectedCharacter.id

    return (
        <Modal open={open} closeIcon={true} onClose={handleEditCancel}>
            <Header icon={isNew ? 'plus' : 'pencil'}
                content={isNew ? 'Create a New Character' : `Edit ${selectedCharacter.fullName}`} />
            <Modal.Content>
                <CharacterForm character={selectedCharacter} updateSelectedCharacter={updateSelectedCharacter} />
            </Modal.Content>
            <Modal.Actions>
                <Button color='green' 
                    onClick={() => isNew ? handleCreateComplete(selectedCharacter) : handleEditComplete(selectedCharacter)}>
                    <Icon name='checkmark' /> Save Character
                </Button>
                <Button color='yellow'
                    onClick={handleEditCancel}>
                    <Icon name='close' /> Cancel
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default CharacterEdit