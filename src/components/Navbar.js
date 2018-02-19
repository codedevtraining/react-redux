import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Container } from 'semantic-ui-react';

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Container>
          <Menu.Item
            name='tarefas'
            onClick={this.handleItemClick}
            as={Link} to='/dashboard/todos'
          >
            <Icon name='tasks' size='big' />

          </Menu.Item>

          <Menu.Item
            name='tarefas'
            active={activeItem === 'tarefas'}
            onClick={this.handleItemClick}
            as={Link} to='/dashboard/todos'
          >
            Tarefas
          </Menu.Item>

          <Menu.Item
            name='sobre'
            active={activeItem === 'sobre'}  
            onClick={this.handleItemClick}
            as={Link} to='/dashboard/about'
          >
            Sobre
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}
