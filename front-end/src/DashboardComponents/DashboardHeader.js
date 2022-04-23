import avatar from './avatar1.jpg';

export default function DashboardHeader() {
    return (
        <div class="grid-item item1">
            <img src={ avatar } alt="Avatar" className="avatar"/>
            <p className="third_p">Hello,</p>
            <h3>Lucas Grayson!</h3>
        </div>
    )}
  