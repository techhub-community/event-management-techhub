interface statementprop{
  state1:string;
  state2:string;
  eventname:string;
}

const Header = ({state1,state2,eventname}:statementprop)=> {
  return (
    <div className='headbar'>
       <header>
         <h1>{eventname} </h1>
         <div className="data">
            <div className="headlogo"></div>
            <div>
                <h2>{state1}</h2>
                <h3>{state2}</h3>
            </div>
         </div>
       </header>
    </div>
  )
}

export default Header