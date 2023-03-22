
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
function ItemDetalle({image, nombre, genero, precio, calificacion}) {
    precio.toLocaleString("en");
    return (
      <Col lg={4}>
              <Card >
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                      <Card.Title>{nombre}</Card.Title>
                      <Card.Text>
                          <p>Genero: {genero}</p>
                          <p>Precio: $ {precio.toLocaleString("en")}</p>
                          <p>Calificacion: {calificacion} estrellas</p>
                      </Card.Text>
                  </Card.Body>
              </Card>
          </Col>
    )
}

export default ItemDetalle