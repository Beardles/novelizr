import React from 'react'
import { Button, Card, Header, Icon } from 'semantic-ui-react'

const CharacterCard = ({ characterCard, handleDeleteClick }) => (
    <Card>
        <Card.Content header={characterCard.character} />
        <Card.Content>
            <Header sub>Details</Header>
            <p>{characterCard.details}</p>
        </Card.Content>
        <Card.Content>
            <Header sub>Motivations</Header>
            <p>{characterCard.motivations}</p>
        </Card.Content>
        <Card.Content>
            <Header sub>Interactions</Header>
            <p>{characterCard.interactions}</p>
        </Card.Content>
        <Card.Content extra>
            <Button color='red' onClick={() => handleDeleteClick(characterCard.id)}>
                <Icon name='close' />
                Delete
            </Button>
        </Card.Content>
    </Card>
)

export default CharacterCard
