import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Barchart from './Barchartcomponent'
import axios from 'axios'
import NavBar from '../../components/home/Navbar'
import Spinner from '../../components/Spinner'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


const CompanyStats = () => {
    const [arrfinal,setarrfinal]= useState([]);
    const [loading, setLoading] = useState(true);
    var arr = [];
    useEffect(() => {
        const id = localStorage.getItem('id');
        const details = {
            id
        }
        axios.post('http://localhost:5000/companyProfile/getcompanyvideos', details)
            .then((res) => {
                console.log(res.data);
                arr = res.data;
                if(arr.length==0)
                {
                    toast.dark("Hey add Some addvertisement to have stats");
                    
                }
                console.log(arr);
                var tap = [];
                
                for (let i = 0; i < arr.length; i++) {
                    tap.push({ "name": arr[i].writeup, "views": arr[i].views })
                }

                console.log(tap);
                setarrfinal(tap)
                setLoading(false);
            })    

            // console.log(arrfinal);
    },[])
    
    console.log(arrfinal);

    return (
        <div>
            <NavBar />
            {loading ?
                <div><Spinner /></div> :
                <div className="row">
                    <div className="contianer-fluid col-md-12 col-sm-12 mt-4 " style={{ height: "500px" }}>
                        {console.log(arrfinal)}
                        <Barchart array={arrfinal} />
                    </div>
                </div>
            }
        </div>
    )
}

export default CompanyStats;
