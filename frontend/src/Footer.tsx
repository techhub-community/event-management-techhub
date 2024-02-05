interface footprobs{
    eventname:string;
    venuetime:string;
}
function Footer({eventname,venuetime}:footprobs) {
  return (
    <div className="footer">
        <div className="foothead">
            <div>
                <h4>{venuetime}</h4>
            <h3>{eventname}</h3>
            </div>
            
            <span >share</span>
            <span >Attend</span>
        </div>
            
        <div className="footbody">
          <div className="mail">
            <div className="logo"></div>
            <h3>Email:</h3>
            <a href="url">sample@gmail.com</a>
          </div>  
          <div className="link">  
            <div className="link1">
                <h3>Website Index And Links</h3>
                <ul>
                    <a href="url">Home</a><br></br>
                    <a href="url">About us</a><br></br>
                    <a href="url">Upcomming Events</a><br></br>
                    <a href="url">Faq</a>

                </ul>
            </div>
            <div className="link2">
                <h3>Our Social Network</h3>
                <ul>
                    <a href="url">Twitter</a><br></br>
                    <a href="url">Instagram</a><br></br>
                    <a href="url">Discord</a><br></br>
                    <a href="url">Linkedin</a>

                </ul>
            </div>
          </div>
        </div>
        <div className="foottail">
            <a href="url" >@copyright</a>
            <p> CODESHACK All right Reserved</p>
        </div>
    </div>
  )
}

export default Footer