import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Header, Icon, Table } from 'semantic-ui-react'
import { selectChapter, createChapter, updateChapter, deleteChapter, updateSelectedChapter } from '../../actions/chapter'
import ChapterEdit from './ChapterEdit'
import Chapter from '../../domain/Chapter'


class ChapterList extends Component {
    showEditModal = false

    handleEditClick = (chapter) => {
        this.props.handleSelectChapter(chapter)
        this.showEditModal = true
    }

    handleAddNewClick = () => {
        this.props.handleSelectChapter(new Chapter())
        this.showEditModal = true
    }

    handleDeleteClick = (id) => {
        this.props.deleteChapter(id)
    }

    viewChapter = (chapter) => {
        this.props.handleSelectChapter(chapter)
        this.props.history.push(`/chapters/${chapter.id}`)
    }

    render () {
        return (
            <div>
                <Header as='h1'>Chapters</Header>
                <div className='mb-35'>
                    <Button color='teal' onClick={this.handleAddNewClick}>
                        <Icon name='plus' />
                        Add New
                    </Button>
                </div>
                <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>#</Table.HeaderCell>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>Summary</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        { this.props.chapters.map(c => (
                            <Table.Row key={c.id}>
                                <Table.Cell selectable onClick={() => this.viewChapter(c)}>
                                    <Link to={`/chapters/${c.id}`} onClick={() => this.viewChapter(c)}>{ c.number }</Link>
                                </Table.Cell>
                                <Table.Cell selectable>
                                    <Link to={`/chapters/${c.id}`} onClick={() => this.viewChapter(c)}>{ c.title }</Link>
                                </Table.Cell>
                                <Table.Cell>{ c.summary }</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    <Icon link name='eye' onClick={() => this.viewChapter(c)} />
                                    <span className='action-separator'>|</span>
                                    <Icon link name='pencil' onClick={() => this.handleEditClick(c)} />
                                    <span className='action-separator'>|</span>
                                    <Icon link name='delete' onClick={() => this.handleDeleteClick(c.id)} />
                                </Table.Cell>
                            </Table.Row>
                        ))}  
                    </Table.Body>
                </Table>

                <ChapterEdit open={this.showEditModal} {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chapters: state.chapter.chapters,
        selectedChapter: state.chapter.selectedChapter
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        handleCreateComplete: (chapter) => {
            dispatch(createChapter(chapter))
        },
        handleEditComplete: (chapter) => {
            dispatch(updateChapter(chapter))
        },
        handleEditCancel: () => {
            dispatch(selectChapter(null))
        },
        handleSelectChapter: (chapter) => {
            dispatch(selectChapter(chapter))
        },
        updateSelectedChapter: (value) => {
            dispatch(updateSelectedChapter(value))
        },
        deleteChapter: (id) => {
            dispatch(deleteChapter(id))
        }
    }
}

export default connect(mapStateToProps, mapDistpatchToProps)(ChapterList)