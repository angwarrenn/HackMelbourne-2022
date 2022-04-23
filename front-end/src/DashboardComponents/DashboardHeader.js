import avatar from './avatar1.jpg';

export default function DashboardHeader() {
    return (
        <>
            <img src={ avatar } alt="Avatar" className="avatar"/>
            <p className="third_p">Hello,</p>
            <h3>Duolingo Wong!</h3>
        </>
    )}
  