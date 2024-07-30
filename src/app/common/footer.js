export default function Footer() {
    return (
        <div className="Footer">
            <div className="wrapper">
                <div className="footerL">
                    <img src="./img/logo.png" className="logo" alt="" />
                </div>
                <div className="social-group">
                   <a href="https://www.facebook.com/profile.php?id=100091499252113" target="_blank"><i className="fab fa-facebook-square share social-icon"></i></a>
                   <a href="https://www.instagram.com/sunderban_weald_camp" target="_blank"><i className="fab fa-instagram-square share social-icon"></i></a>
                    <a href="https://www.youtube.com/@sunderbanwealdcamp" target="_blank"><i className="fab fa-youtube-square share social-icon"></i></a>
                </div>
                <div className="footerM">
                    <h4>Location</h4>
                    <p>Bali 9, Bali Hatkhola, Gosaba, South 24 Pgs, West Bengal 743370, India.</p>
                </div>
                <div className="footerR">
                    <h4>Contact</h4>
                    <p><span className="material-symbols-outlined">mail</span> sunderbanwealdcamp@gmail.com</p>
                    <p><span className="material-symbols-outlined">call</span> 9007627990  &nbsp;| 9903355699</p>
                </div>
            </div>
        </div>
    )
}