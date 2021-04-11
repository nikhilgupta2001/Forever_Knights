import React, { useState, useEffect } from 'react';
import Video from './Video';
import NavBar from './home/Navbar';
import axios from 'axios';
import { getalladds } from '../redux/actions/getdata';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Modal, Button } from 'react-bootstrap';
// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Parallax, Background } from "react-parallax";
import Spinner from './Spinner';
const Adds = () => {
    var t = false;
    const dispatch = useDispatch();
    //const [modalIsOpen,setIsOpen] = useState(false);
    var arr = [];

    const [modalShow, setModalShow] = useState(false);
    const [url,seturl] = useState("");

    function modalCall(e){
        console.log(e);
        setModalShow(true);
        seturl(e);
    }
    //const [video, setVideo] = useState("");
    const getAdds = useSelector(state => state.getAdds.adds);
    const loading = useSelector(state => state.getAdds.loading)
    const image1 =
        "https://t4.ftcdn.net/jpg/03/59/98/31/360_F_359983118_OUEqWt9VPKM2rysrc0S9AeQ2vP1VrkZ6.jpg";
    useEffect(() => {
        dispatch(getalladds());
    }, [dispatch])
    return (
        <div>
            <NavBar />
            <Parallax bgImage={image1} strength={100}>
                <div >

                    <div className="row">
                        {
                            loading ? (
                                <Spinner />
                            ) : (getAdds[0].map((e) => {
                                // console.log(e);
                                return (
                                  
                                        <div className=" col-md-6 col-sm-12 card ">
                                            <div className="card-image">
                                            <img src={e.video[0].thumbnailurl} style={{ maxHeight: "300px", objectFit: "fill" }} onClick={() => modalCall(e)} />
                                            </div>
                                        </div>
                                )
                            })
                            )
                        }
                        <div>
                        {/* {console.log(e)} */}
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            e={url}
                        />
            </div>
                    </div>
                </div>
            </Parallax>
        </div>
    )
}



function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <Modal.Header>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Header> */}

            <Modal.Body>
                {/* {console.log(props.e)} */}
                <Video url={props.e} />
            </Modal.Body>
        </Modal>
    );
}

export default Adds;