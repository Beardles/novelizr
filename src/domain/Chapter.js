class Chapter {
    constructor (props = {}) {
        this.id = props.id || null
        this.number = props.number || 0
        this.title = props.title || ''
        this.summary = props.summary || ''
        this.details = props.details || ''
    }
}

export default Chapter