import { scientists } from '../Data/data';
import {getImageUrl} from './utils'


export default function arraylist(){
    const list = scientists.map(scientist =>
        <li key={scientist.id}>
            <img
                src={getImageUrl(scientist.imageId)}
                alt={scientist.name}
            />
            <p>
                <b>{scientist.name}</b>
                {' ' + scientist.profession + ' '}
                known for {scientist.accomplishment}
            </p>
        </li>
        );
    return(
        <ul>
            {list}
        </ul>
    )
}