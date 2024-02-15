import '../css/footer.css'
import { Link } from "react-router-dom";
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
            
            <button><span >share</span></button>
           
        </div>
            
        <div className="footbody">
          <div className="mail">
            <div className="logo"></div>
            <h3>Email:</h3>
            <Link to="url">sample@gmail.com</Link>
          </div>  
          <div className="link">  
            <div className="link1">
                <h3>Website Index And Links</h3>
                <ul>
                    <Link to="url">Home</Link><br></br>
                    <Link to="url">About us</Link><br></br>
                    <Link to="url">Upcomming Events</Link><br></br>
                    
                </ul>
            </div>
            <div className="link2">
                <h3>Our Social Network</h3>
                <div className="imag">
                <Link to="https://www.twitter.com/_techhub/">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAgVBMVEUAAAD///8ICAhAQEBKSkqurq5HR0enp6fHx8fExMTw8PBxcXH6+vrPz8/V1dXt7e1qamrk5OT29vaJiYm5ubkqKirn5+dZWVnc3NxOTk58fHwcHByZmZk3NzcVFRUSEhI0NDSDg4N3d3dubm5hYWFcXFyPj48gICCqqqouLi6dnZ0YT4ehAAAIgUlEQVR4nO2dbUPiOhCFW91CA5Quygoorq508eX//8BbwNWMpDaTzEkot+fL9YNCnrucTiaZGZI0nao8z9VNutOy/rlQ8/VmMbjslAaraq3KSZoWe5rRnmZHltT/yT8BZ/l8u3pOOqq7xdvyQPMOmH8FnGSLi9ir9NPF32HRDKhWsdcnoVVWfAF89+DNU+ylSWmsrj49WJbL6U6leo29Ljk9qquyPJAlSpV72rfYi5LVtlBq/0FN8gPgNvaKpHVd5DrgOvZ65HVdaIDD2KtBaF18AOax1wLRQ7Z7libT6c3sMfZaMLqfjcqyjoPLTeyVoPRUP0prwHnsdeA03+9k/sZeBk5VUQOe5xPmXVkNOI69CKTGRTK7i70IpJ6L5Az3MLpU8jP2ErD6k1zGXgJWq+RX7CVg9Zo8xF4CVr+Tjh8ytemiB+y4esCuqwfsunrArqsH7Lp6wK6rB+y6esBaf+YZQ7CLxq32JvM/tn9lA7g4XHjb6toLo1FD/T1mA9s/s/qIPrEArxY+HE1aEz77kzI7Dw6bYIxaAs6xrvU3KBnVLnaAvwsWofx11e1Ee/kR5yNi+RQdlCxCaRtudL4r1lG1bZiIasNKf8pNeOVK1nEwog0X5ONjHSAOsgaMZ8MfN/oLc8Os/U6G2nCStkjMhvcz/WXZ9ViMrRqx4bD6eaRqq2FL2fB1Sd6W/fecvahuQ/O9tx6NZWz4TJzh8MHnABIbvhhfLfdbzfFbKp1POVwUsbIJYkPj0/pefyD42/BirvPlLqXWvHRJt+HIuN/9KWrDTOebOn3mmfmgbsOpsXpB0oYk9i4fnV6DCWhhQ901fjZ0TSDoepgZfUAbOicQROwji2A2dE8giPhnMoFs6JFAEPEBw0RDnwSCLoZ/qkZseGv6DX8beiUQRC7HhsSGP0y/4WvDgVcCQeR0Loq24SXZYPs1dDgBgqPh61Tn82wIcDvZhkZD7wSCyPHoHmhD/wSCyPVuAmbDLwmEd7WuKyDMhgIJBF2G6+3SJSYaSiQQRO7XZxAbiiQQRB73gwAbyiQQRB6A8jakCYRMv4rPDa/0pnSjb7A9EggirytsWRuKJRBEfnf0xIa/Tb9hb0O5BILID1AwNxRMIOgC/KosxGzoeQPRLN8yEiEb+t5ANMu7TkYkGtIEIvNbEZU3ILGhcWnt0ZAmEHPRVhX/Sid/GwrcQDRLoJTL24bSCQSRRK2apw3FEwgiCUC/Tal8AkHfWqLa0MeGgASCSKac0v3CApFAEAnVi7puSqVuIJolBOgYDTEJBH1foYpfJxuCEggisZJmh2iISiCI5Gq22dHwXvAGollygA88G2aX5AbCGD4lJFh1z7PhhPgPN/FFsq2AZ0NdCtfbINo3wbPhp/xvIJolCsiMhh//L5DDGGQ7XyxsODviE08giIRbexxsKJ9AEEn3LrFtCEggiKQBuTa8QU/MEu8+Y9pQ9ATNJPn2Op4N3YvQLAXoHwxbU9omAGD7pjSRqyltFaIDFHR97yZIiyuxoTEMyJZ2fydMD+8J2RADKHFhISRQFzYzGgJtiGozD91h0ShYH/2p2BAGeCo2xE1COJFoCBz1gC/tthFylsVJ2BAJeBKbUug0EgsbwqMhdtzKk575xdmUgufJxLchGPAiejQEA96REqYYNsQC0hKmKNEQCkhLmOLYEAqYpV8V3oahdjLRbAgENF6VBY+GOMBrE19tQ2MxIc6GMMDbpoEsgTelKEDSAzHa6iYLmxuCAGkJ0zgZR7MhBvC4hCnaphQCaChhipYbIgCNPRCxckMA4Ku5hGms54bhNqXygI1N1MSGwaKhOGBzEzWzmE3IhtKA3/VARLGhNOC3PRAxoqEwYEsPRIRoKAvY1gPRfkQjHg1FAdt7IIgNjUXa0jaUBLTpgRiHPikVBLTrgQhtQzlAyx6I0JtSMUDrHojA0VCsMcS+ByKsDYUAWT0QQW0oA8ibwhTUhiKA3ClM7TZ81G0YfuzYF/GnMLVvSispGwoAujRRh8sNBQBdmqjD2dAf8E3nW95b/lWwaOgN6NpEHSoa+gK6N1Hr//LAaOgJ6NFEHciGfoBeTdRhbOgF6NlEHcSGPoDeTdQhoqEHoH8TdQgbugNKTGFqP6Lx3pQ6AzbcQDCFt6EroNQYV7gNHQHFxrjCbegGKDiFiXlSyrahG6DkFCbmhQW3Y9QJkCYQj/wXIMIe0bgACk9hwtrQAVB8ChM0GvIBAVOY2qNh5WxDNiBkChMwGnIBq5H2TmJTmIA2ZAKipjDhbMgDxE1hgtmQBYicwtRuQ/3pPbO2IQdQJoFoELHhfDM+0uZWt7+1DRmAst8DcSRiw3bZ+sMe8EsCIV/DN26qETbK1obWgNLfA2HQWxOMUZY2tAaEjnE9iNiwXXYmsQWkJUy2NxBMIWxoCQge4/pPABvaAaLHuH6IZ0ObTakVIHyM6+dyxG1oA3irv+YEMcb1U0wbtu+mLACf19nwQxmWr95yvgzt9fLW+iEFd4DGVw/YdfWAXVcP2HX1gF1XD9h19YBdVw/Ydf0PAEW/iOv0dJeAhwjH1muCncQeXasE8l05p6NxAh4DHVvDpDR+D9S56JdK0rP+jI6LJC1iLwKpLE/SSRV7FThVRZ4opWIvA6dpmia5GmGnzUfUNj0AjkAXmrG1v8mpAcszfc48ZKN/gPhvJomht+ITMF3HXo28tkVNNpkkaTqtH6TF2T1odrfhO7IdYF6rQH0BYBxd7MtedmT/AFVZnNGz9D5PjwBv0tLYxNdFPakrAqgOgGmao78FKYgWWaFGZsA0nf/t+CHUXfVS1DTvgDVZvRc9VG4s1U5luhxWsl+YHlC/Fuv5oaan2NNocXAH+PHvOJpfbxarweDHXoO9ED8Pvv2Z96Kr6nab5UXx7r5i/1zZAf4HMkiXpVq9vecAAAAASUVORK5CYII=" alt="Twitter"></img> </Link><br></br>
                    <Link to="https://www.instagram.com/codeshack_community?igsh=MzRvcmN0a2JnNWI=">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram"></img> </Link><br></br>
                      <Link to="https://discord.gg/9C5r3Yb4">
                      <img src="data:image/png;base64,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" alt="Discord"></img> </Link><br></br>
                      <Link to="https://www.linkedin.com/company/techhub-community">
                      <img src="data:image/png;base64,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" alt="Linkedin"></img> </Link><br></br>
                      </div>    

                
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