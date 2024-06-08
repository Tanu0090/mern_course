import PointsContext from "../../context/pointsContext";
import Footer from "../common/Footer/footer";
import Navbar from "../common/Navbar/navbar";
import "./imageGenerator.css"
import { useState, useContext } from "react";

const ImageGenerator = (props) => {
    const cValue = useContext(PointsContext);
    const [searchText, setSearchText] = useState("");
    const [imageSrc, setImgSrc] = useState("");
    const [imageSrc1, setImgSrc1] = useState("");

    const func = (e) => {
        setSearchText(e.target.value);
    }

    const handleClick = async () => {
        cValue.setUserPoints(cValue.userPoints - 1);
        console.log(searchText)
        const res = await fetch("http://localhost:1400/api/images", {
            method: "POST",
            body: JSON.stringify({
                searchText: searchText,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        if (data?.status === 'success') {
            setImgSrc(data.data.imageUrl);
            console.log(data)
        }
    }

    return (
        <div>
            <Navbar page="imageGenerator" />
            <div>

                <div className="heading-image-generator">
                    <h1>Image Generator</h1>
                </div>
                <div className="image-generator-main-container">
                    <div className='image-search'>
                        {/* <img src={imageSrc} /> */}
                        {searchText && imageSrc1 &&
                            <img className="img-style" src={`https://loremflickr.com/400/400/${searchText}`} />
                        }
                    </div>
                    <div className="search-bar-image">
                        <div>

                            <input className="search" onChange={(e) => { func(e) }} />
                        </div>
                        <div>

                            <button className="btn" onClick={() => { setImgSrc1(searchText) }}>Generate</button>
                        </div>
                    </div>
                    {/* <button onClick={handleClick}>Generate</button> */}

                </div>
               
            </div>
            <div>
            <Footer/>

            </div>

        </div>

    )
};

export default ImageGenerator;