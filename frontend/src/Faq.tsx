import { useState } from "react"
function Faq(){

    const [select,setselected]=useState()

    const toggle=(i:any)=>{
          if(select===i){
            return setselected
          }
          setselected(i)
    }

  return(
    <div className='wrapper'>
        <div className="faqheading">
        <h2>FAQ</h2><br></br>
        <h3>Got Some Quries?</h3>
        </div>
      
      <div className='accordion'>
        {
          data.map((item,i)=>(
            <div className='item'>
              <div className='title' onClick={()=>toggle(i)}>
                <h2>{item.question}</h2>
                <span>{select ===i?'-':'+'}</span>
              </div>
              <div className={select ===i?'content show':'content'}>{item.answer} </div>

            </div>
          ) )
        }
      </div>
    </div>
  )
}

const data=[
  {
      question:'1.first question',
      answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi porro repellat aspernatur! Impedit consequuntur quia, vel nam iste velit voluptas hic similique ducimus sit rem, obcaecati consectetur delectus inventore.'
  },
  {
    question:'2.second question',
    answer:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi porro repellat aspernatur! Impedit consequuntur quia, vel nam iste velit voluptas hic similique ducimus sit rem, obcaecati consectetur delectus inventore.'
  },
  {
    question:'3.Third question',
    answer:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi porro repellat aspernatur! Impedit consequuntur quia, vel nam iste velit voluptas hic similique ducimus sit rem, obcaecati consectetur delectus inventore.'
  },
  {
    question:'4.Fourth question',
    answer:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi porro repellat aspernatur! Impedit consequuntur quia, vel nam iste velit voluptas hic similique ducimus sit rem, obcaecati consectetur delectus inventore.'
  },
]
export default Faq