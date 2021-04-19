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
import history from '../redux/actions/history';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Adds = () => {
    var t = false;
    const dispatch = useDispatch();
    //const [modalIsOpen,setIsOpen] = useState(false);
    var arr = [];

    const [modalShow, setModalShow] = useState(false);

    const [url, seturl] = useState("");

    console.log(localStorage.getItem('Interests'))
    if (localStorage.getItem('Interests') == null) {
        console.log("Line 28")
        history.push('/profile');
        toast.error("You have no interest present in profile kindly add interests to watch adds");

    }
    else if (localStorage.getItem('Interests') == "undefined") {
        console.log("line 26")
        history.push('/profile');
        setTimeout(() => { window.location.reload(true) }, 5000);
        toast.error("Please fill your interest");
    }
    // const [loading,setloading]=useState(true);
    // const profile = useSelector(state=>state);
    // console.log(profile);

    function modalCall(e) {
        console.log(e);
        setModalShow(true);
        seturl(e);
    }

    //const [video, setVideo] = useState("");
    const getAdds = useSelector(state => state.getAdds.adds);
    const loading = useSelector(state => state.getAdds.loading)
    const image1 =
        "https://wallpapercave.com/wp/wp3422169.jpg";
    useEffect(() => {
        dispatch(getalladds());
    }, [dispatch])
    return (
        <div>
            <NavBar />
            <Parallax bgImage={image1} strength={100} style={{ height: "100%" }}>
                <div>

                    <div className="row" style={{ justifyContent: "center" }}>
                        {
                            loading ? (
                                <div className="justify-content-center" style={{marginTop:"8rem",marginBottom:"3rem"}}>
                                    <Spinner />
                                </div>
                            ) : (getAdds[0].map((e) => {
                                console.log(e);
                                return (
                                    <div className=" col-md-5 col-sm-12 card m-2" style={{ backgroundColor: "linear-gradient(#fb3640, #ff8303, #8ab6d6)" }}>
                                        <div className="card-image m-1"  >
                                            <img src={e.thumbnailurl} onClick={() => modalCall(e)} />
                                        </div>
                                        <div className="card-body">
                                            <p>{e.writeup}</p>
                                        </div>
                                    </div>
                                )
                            })
                            )
                        }

                    </div>
                </div>
            </Parallax>
            {/* {console.log(e)} */}
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                e={url}
            />
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
            <Modal.Body>
                {/* {console.log(props.e)} */}
                <Video url={props.e} />
            </Modal.Body>
        </Modal>
    );
}

export default Adds;

