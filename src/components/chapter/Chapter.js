import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Divider, Header, Message, Segment } from 'semantic-ui-react'
import { selectChapter } from '../../actions/chapter'

// TODO: Edit this inline instead of forcing to go back to table
class Chapter extends Component {
    setChapterFromRoute = chapters => {
        const chapterId = this._getChapterIdFromParams()
        const chapter = chapters.filter(c => c.id === chapterId)[0]
        this.props.handleSelectChapter(chapter)
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
        return parseInt(this.props.match.params.chapterId, 10)
    }
}

const mapStateToProps = state => {
    return {
        chapters: state.chapter.chapters,
        chapter: state.chapter.selectedChapter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSelectChapter: chapter => dispatch(selectChapter(chapter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chapter)