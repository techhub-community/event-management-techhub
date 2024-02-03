interface info{
  date:any;
  time:any;
}
function Boby({date,time}:info) {
  return (
    <div className='body'>

      <div className="datetime">Date: {date}<br></br> Time: {time}</div>
      
      <div className='eventpicture'></div>
      <h2>About This Event</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero qui veniam recusandae nobis facere exercitationem voluptatem numquam rerum quos quisquam nulla molestiae voluptas, incidunt ratione perspiciatis! Reiciendis, debitis provident? Aut.</p><br></br>
      <div className="attendees">
        <h2>Attendees</h2>
        <div className="pro">
          <div className="subpro">100</div>
          <div className="subpro">2</div>
          <div className="subpro">3</div>
          <div className="subpro">4</div>
          <div className="subpro">5</div>
          <div className="subpro">6</div>
        </div>
      </div>
    </div>
  )
}

export default Boby