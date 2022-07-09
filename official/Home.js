// * A Simple Component
class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>
  }
}

ShadowRoot.render(<HelloMessage name="Taylor"/>);



