import React from "react";
import {useState, useEffect} from "react";
import ItemList from "./ItemList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";


function ItemListContainer(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c79e7e7e6cmsh683efddd71985f5p1775a0jsn14de7de2f7c4',
            'X-RapidAPI-Host': 'moviesapil.p.rapidapi.com'
        }
    };
    
    const [posts, setPosts] = useState([])
    const {id} = useParams ();
    const getPost = async () => {
         const response = await fetch('https://moviesapil.p.rapidapi.com/', options)
         const data = await response.json()
         //console.log(data.results)
         const filteredArray = []
         const  promesa = new Promise((resolve) => {
            filteredArray = resolve(id? data.filter(posts => posts.genero == id):data)
         });
         promesa.then((data) => {
            setPosts(data)
        })
         //console.log("filtro:"+ data)
        setPosts(filteredArray)
    }
    
    useEffect(() => {
        getPost()
    }, [id])
    return(
        <Container fluid>
            { <Row>
               {posts.map(p => <ItemList key={p.id}  image={p.imgUrl} nombre={p.nombre} genero={p.genero} idP={p.id}/>)}
              
            </Row> }
        </Container>
        
    )
}
export default ItemListContainer;