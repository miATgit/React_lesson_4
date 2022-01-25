import { getChatList } from '../Data/data';
import { useParams } from "react-router-dom";

let chatInfo = getChatList();

export default function Chat() {
    let params = useParams();
    return(
        <div className='chatInfo'>
            <h3>{params.chatNumber}</h3> 
        </div>
    )
}