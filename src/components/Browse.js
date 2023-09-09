import { useSelector } from "react-redux";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Browse = () => {
    const userInfo = useSelector((state) => {return(state.userInfo)});
    const navigate = useNavigate();

    useEffect(() => {
        if(!userInfo) {
            navigate("/");
            return(() => {});
        }
    }, []);    

    return(
        <div>
            <Header />
            Browse
        </div>
    );
};

export default Browse;