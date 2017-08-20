import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import Sidebar from './components/layout/Sidebar'
import ChapterList from './components/chapter/ChapterList'
import Chapter from './components/chapter/Chapter'
import CharacterList from './components/character/CharacterList'
import { fetchChapters } from './actions/chapter'
import { fetchCharacters } from './actions/character'

class App extends Component {
  componentWillMount () {
    this.props.fetchChapters()
    this.props.fetchCharacters()
  }

  render() {
    return (
      <Router>
        <div>
          <Sidebar />
          <div className='page-content'>
            <Container>
              <Switch>
                <Route exact path='/' component={ChapterList} />
                <Route exact path='/chapters' component={ChapterList} />
                <Route path='/chapters/:chapterId' component={Chapter} />
                <Route exact path='/characters' component={CharacterList} />
              </Switch>
            </Container>
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = {
  fetchChapters,
  fetchCharacters
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
