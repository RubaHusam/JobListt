import React, {useState,useEffect,useRef} from 'react'
import data from './data.json'
import './JopList.css'

export default function JopList() {
  
  const [data1,setData]=useState(data)
  const [data2,setData2]=useState(data1)
  const [filter,setFilter]=useState([])
  
 
  let length=filter.length;
  let length2=data2.length;

  
useEffect(()=> {

console.log(data2) 
  console.log(filter) 
 
}, [filter])

const x=(e)=>{
if(filter.includes(e)){return("")}

  setFilter([...filter,e])
  
  data1.map((element)=>{
   
    if( element.role === e){
    
  return (
  setData2(data1.filter((element) =>  element.role === e))
  )}
  else if( element.level=== e){
    return (
    setData2(data1.filter((element) =>  element.level === e))
    )}
    else if( element.languages.includes(e)){
      return (
        setData2(data1.filter((element)=>element.languages.includes(e)) )          

      )}
      else if( element.tools.includes(e)){
        return (
          setData2(data1.filter((element)=>element.tools.includes(e)) )          
  
        )}
     
})
}

const handleRemoveItem = (e) => {
  
   setFilter(filter.filter(item => item !== e));
  setData2(data1)

 };

const handleClearItem =()=>{
 setFilter([])
 setData2(data1)
};
  
  
  


  return (

    <div  >
    <div className="job-list">
    <div  key={Math.random}  className={`${length &&'fil'}`}> 
   
       
    
    {
      
      filter.map((fil1)=>{
     
    return(
      <div key={Math.random()} >
      <div>
      <a>{fil1}</a>
      <button   onClick={()=>handleRemoveItem(fil1)} >&times;</button>
      </div>

      </div>
      
    )
  })}

  <div className={length ? "show"&&"clear" : "hide"}>
   <p className="clear2" onClick={()=>handleClearItem()}>Clear</p>
   </div>
   
    </div>
     </div>
    {data2.map((d)=> {
    return (
    <div key={d.id} className="job-list">
    

      <div  className={`card ${d.featured && 'card2'}`}>
      <div >
        <img src={`${d.logo}`} className="card__img"/>
      </div>
      <div className="part2">
      <h3 >
      {d.company}
      {d.new?(<span className="span1 span2" >NEW! </span>):('')}
      {d.featured?(<span className="span1">FEATURED</span>):('')}
      </h3>
      <h2 >{d.position}</h2>
      <p className="p2">
      {d.postedAt} * {d.contract} * {d.location}
      </p>
     </div>
   
     <div className='b2'></div>
     
      <div className='btn'>
      <span className='b'>
      {
        d.role?(<a hraf='#' onClick={()=>(x(d.role))} > {d.role } </a>):('')
      }
     </span>
     <span className='b'>
      {
        d.level?(<a hraf='#' onClick={()=> (x(d.level))} >{d.level } </a>):('')
      }
    </span>
     
      {
        d.languages ?( d.languages.map((language) => 
        {
          return(<span className='b'>
            <a key={Math.random()} hraf='#' onClick={()=> x(language)} >{language } </a>
             </span>
        )
          })
        ):('')
      }
   
    
    
      {
        d.tools ?( d.tools.map((tool) => 
        {
          return(
          <span className='b'>
            <a key={Math.random()} hraf='#' onClick={()=>x(tool)} >{tool} </a>
             </span>
        )
          })
        ):('')
      }
     
  </div>
     </div>

    </div>
      
    
    )
    }
    
     )}
    

    </div>

  )
}
