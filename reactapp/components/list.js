import React, {useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import list from "./list.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setUserData} from "../redux/reduser/users"
import styles from "../styles/AppStyles.module.css";
    const Listul = (props) => {


    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setUserData({username : "mohammad"}));
    },[])


    const userData = useSelector(x => x.userData);

    console.log(userData);
    return (
        <div>
            <li className={styles.li}>
                    {props.name}
            </li>
        </div>
    );
};

export default Listul;