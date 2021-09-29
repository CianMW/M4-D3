import Badge from 'react-bootstrap/Badge'



const MyBadge = (props) => {
    return(<Badge variant={props.color} >{props.string}</Badge>)
    
}

export default MyBadge