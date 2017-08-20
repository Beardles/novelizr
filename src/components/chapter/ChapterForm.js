import React , { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'

class ChapterForm extends Component {
    handleInputChange = evt => {
        const val = {
            [evt.target.name]: evt.target.value
        }
        this.props.updateSelectedChapter(val)
    }

    render () {
        const { chapter } = this.props
        return (
            <Form>
                <Form.Field>
                    <label>Chapter Number</label>
                    <input type='number' name='number' value={chapter.number} onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>Title</label>
                    <input type='text' name='title' value={chapter.title} onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>Summary</label>
                    <TextArea id='summary' name='summary' value={chapter.summary} onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>Details</label>
                    <TextArea id='details' name='details' value={chapter.details} onChange={this.handleInputChange} />
                </Form.Field>
            </Form>
        )
    }
}

export default ChapterForm
