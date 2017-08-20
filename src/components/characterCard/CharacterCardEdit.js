import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import CharacterCardForm from './CharacterCardForm'

const CharacterCardEdit = ({ open, characters, selectedCharacterCard, updateSelectedCharacterCard, handleCreateComplete, handleEditCancel }) => {
    if (selectedCharacterCard === null) {
        return null
    }

    return (
        <Modal open={open} closeIcon={true} onClose={handleEditCancel}>
            <Header icon='plus'
                content='Create a New Characterization' />
            <Modal.Content>
                <CharacterCardForm 
                    characters={characters} 
                    characterCard={selectedCharacterCard}
                    updateSelectedCharacterCard={updateSelectedCharacterCard} />
            </Modal.Content>
            <Modal.Actions>
                <Button color='green' 
                    onClick={() => handleCreateComplete(selectedCharacterCard)}>
                    <Icon name='checkmark' /> Save Characterization
                </Button>
                <Button color='yellow'
                    onClick={handleEditCancel}>
                    <Icon name='close' /> Cancel
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default CharacterCardEdit