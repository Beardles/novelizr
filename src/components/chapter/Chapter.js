import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { Button, Divider, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'
import { selectChapter } from '../../actions/chapter'
import { createCharacterCard, selectCharacterCard, deleteCharacterCard, updateSelectedCharacterCard } from '../../actions/characterCard'
import Card from '../../domain/CharacterCard'
import CharacterCard from '../characterCard/CharacterCard'
import CharacterCardEdit from '../characterCard/CharacterCardEdit'

// TODO: Edit this inline instead of forcing to go back to table
class Chapter extends Component {
    editingCharacterCard = false

    setChapterFromRoute = chapters => {
        const chapterId = this._getChapterIdFromParams()
        const chapter = chapters.filter(c => c.id === chapterId)[0]
        this.props.handleSelectChapter(chapter)
    }

    handleAddNewCharacterCardClick = () => {
        this.props.handleSelectCharacterCard(new Card({ chapterId: this.props.chapter.id }))
        this.editingCharacterCard = true
    }

    render () {
        const { chapters, chapter } = this.props

        // TODO: This feels really messy -- need to research into best practices for conditional rendering
        // Perhaps this will be handled better with error boundaries in 16?
        if (!chapters && !chapter) {
            return null
        } else if (chapters && !chapter) {
            this.setChapterFromRoute(chapters)
            const chapterId = this._getChapterIdFromParams()
            return (
                <div>Loading Chapter {chapterId}...</div>
            )
        } else if (chapter) {
            return (
                <div>
                    <Header as='h1'>Chapter {chapter.number}</Header>
                    <Divider />
                    <Header as='h2'>{chapter.title}</Header>
                    <Segment>
                        <div>
                            <Header sub>Summary</Header>
                            <span>{chapter.summary}</span>
                        </div>
                        <Divider section />
                        <div>
                            <Header sub>Details</Header>
                            <span>{chapter.details}</span>
                        </div>
                    </Segment>
                    <Divider />
                    <Header as='h2'>Character Details</Header>
                    <div className='mb-35'>
                        <Button color='teal' onClick={this.handleAddNewCharacterCardClick}>
                            <Icon name='plus' />
                            Add New
                        </Button>
                    </div>
                    <Grid>
                        <Grid.Row columns={3}>
                            { this.props.characterCards.map(characterCard => (
                                <Grid.Column key={characterCard.id}>
                                    <CharacterCard
                                        characterCard={characterCard}
                                        handleDeleteClick={() => this.props.handleDeleteCharacterCard(characterCard.id)}
                                    />
                                </Grid.Column>
                            ))}
                        </Grid.Row>
                    </Grid>

                    <CharacterCardEdit open={this.editingCharacterCard} {...this.props} />
                </div>
            )
        } else {
            return (
                <div>
                    <Header as='h1'>Oh No!</Header>
                    <Message negative>
                        <Message.Header>We couldn't find that chapter!</Message.Header>
                        <p>Please try another chapter number or go back to the chapter list.</p>
                    </Message>
                </div>
            )
        }
    }

    _getChapterIdFromParams = () => {
        return this.props.match.params.chapterId
    }
}

// Computed State
const characterCardsSelector = state => state.characterCard.characterCards
const selectedChapterSelector = state => state.chapter.selectedChapter
const characterCardsForChapterSelector = createSelector(
    characterCardsSelector,
    selectedChapterSelector,
    (characterCards, selectedChapter) => !selectedChapter ? [] : characterCards.filter(characterCard => characterCard.chapterId === selectedChapter.id)
)

const mapStateToProps = state => {
    return {
        chapters: state.chapter.chapters,
        chapter: state.chapter.selectedChapter,
        characters: state.character.characters,
        characterCards: characterCardsForChapterSelector(state),
        selectedCharacterCard: state.characterCard.selectedCharacterCard
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSelectChapter: chapter => dispatch(selectChapter(chapter)),
        handleSelectCharacterCard: characterCard => dispatch(selectCharacterCard(characterCard)),
        handleDeleteCharacterCard: id => dispatch(deleteCharacterCard(id)),
        handleEditCancel: () => {
            dispatch(selectCharacterCard(null))
        },
        handleCreateComplete: characterCard => {
            dispatch(createCharacterCard(characterCard))
        },
        updateSelectedCharacterCard: characterCard => dispatch(updateSelectedCharacterCard(characterCard))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chapter)