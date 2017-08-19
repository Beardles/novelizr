import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import ChapterForm from './ChapterForm'

const ChapterEdit = ({ open, selectedChapter, updateSelectedChapter, handleCreateComplete, handleEditComplete, handleEditCancel }) => {
    if (selectedChapter === null) {
        return null
    }

    const isNew = !selectedChapter.id
    
    return (
        <Modal open={open} closeIcon={true} onClose={handleEditCancel}>
            <Header icon={isNew ? 'plus' : 'pencil' }
                content={isNew ? 'Create a New Chapter' : `Edit Chapter ${selectedChapter.number}` } />
            <Modal.Content>
                <ChapterForm chapter={selectedChapter} updateSelectedChapter={updateSelectedChapter} />
            </Modal.Content>
            <Modal.Actions>
                <Button color='green' 
                    onClick={() => isNew ? handleCreateComplete(selectedChapter) : handleEditComplete(selectedChapter)}>
                    <Icon name='checkmark' /> Save Chapter
                </Button>
                <Button color='yellow'
                    onClick={handleEditCancel}>
                    <Icon name='close' /> Cancel
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ChapterEdit