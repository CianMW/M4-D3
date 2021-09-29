import Alert from 'react-bootstrap/Alert'

const WarningAlert = (props) => {
 return (
    <Alert variant="danger" dismissible>
    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
    <p>
     {props.comment}
    </p>
  </Alert>
 )


}

export default WarningAlert