import React from 'react'
import { Link } from 'react-router-dom'
import { Icon, Menu } from 'semantic-ui-react'

const Sidebar = () => (
    <Menu vertical fixed='left' icon='labeled' color='teal' inverted widths={8}>
        <Menu.Item header className='menu-header'>
            <Icon name='idea' />
            Novelizr
        </Menu.Item>
        <Menu.Item>
            <Link to='/characters'>Characters</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/chapters'>Chapters</Link>
        </Menu.Item>
    </Menu>
)

export default Sidebar