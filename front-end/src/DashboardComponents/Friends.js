import avatar2 from './avatar2.png';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.png';
import avatar5 from './avatar5.png';
import avatar6 from './avatar6.png';
import avatar7 from './avatar7.png';

export default function FriendsWidget(){
    return (
        <div className="friendswidget">
            <h4>Friends</h4>
            <br></br>
            
            <img src={ avatar2 } alt="Avatar" className="frensavatar"/>
            <h2>Benjamin Calzini</h2>

            <img src={ avatar3 } alt="Avatar" className="frensavatar"/>
            <h2>Deborah Hernadez</h2>

            <br></br>
            <img src={ avatar4 } alt="Avatar" className="frensavatar"/>
            <h2>Olivia Ginderwal</h2>

            <img src={ avatar5 } alt="Avatar" className="frensavatar"/>
            <h2>Olivia Gee</h2>

            <br></br>
            <img src={ avatar6 } alt="Avatar" className="frensavatar"/>
            <h2>Ronarld Ramirez</h2>

            <img src={ avatar7 } alt="Avatar" className="frensavatar"/>
            <h2>Adelle Cornelia</h2>
            
            
        </div>
    )
}
