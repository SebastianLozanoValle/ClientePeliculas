import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { ReviewForm } from "../reviewForm/ReviewForm";
import { addReviews } from "../../api/axiosConfig";
import { v4 as uuidv4 } from 'uuid';


const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {

    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMovieData(movieId);
        console.log("reviews",reviews);
        console.log("pelicula",movie);
        console.log("id de la pelicula",movieId);
    },[])

    const addReview = async (e) => {
        e.preventDefault();
    
        const rev = revText.current;
    
        try {
            const newReview = await addReviews(rev.value, movieId); // Ajusta el orden de los parámetros
            const updatedReviews = [...reviews, newReview];
            rev.value = "";
            setReviews(updatedReviews);
        } catch (err) {
            console.error(err);
        }
    }


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h3>Reviews</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={movie?.poster}/>
                    </Col>
                    <Col>
                        {
                            <>
                                <Row>
                                    <Col>
                                        <ReviewForm handleSubmit={addReview} revText={revText} labelText={"Write a Review?"} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>
                            </>
                        }
                        {reviews?.map((review) => {
                                return (
                                <div key={uuidv4()}>
                                    <Row key={review.id}>
                                        <Col key={uuidv4()}>{review.body}</Col>
                                    </Row>
                                    <Row key={uuidv4()}>
                                        <Col key={uuidv4()}>
                                            <hr key={uuidv4()} />
                                        </Col>
                                    </Row>
                                </div>
                                );
                            })
                        }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Reviews