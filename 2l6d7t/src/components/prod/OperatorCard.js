import React from 'react'
import './operatorcard.css'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useDispatch } from "react-redux";
import { deleteOperator } from '../redux/actions';




const OperatorCard = ({dataop}) => {
    //const dispatch = useDispatch();
    //const handleDelete = dispatch(deleteOperator());
    return (
        
        <div className="op-container">
        <p className="op"> <br/>Name: {dataop.name}</p>
        <p className="op"> <br/>Objective: {dataop.objective}</p>
        <p className="op"> <br/>In Progress: {dataop.inprogress}</p>
        <p className="op-icon"> <br/><span ><HighlightOffIcon ></HighlightOffIcon></span></p>
        </div>
        
        )
}

export default OperatorCard
