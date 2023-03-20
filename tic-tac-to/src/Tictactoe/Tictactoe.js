import { click } from '@testing-library/user-event/dist/click'
import React,{useState} from 'react'
import "./Tictactoe.css"

const Tictactoe = () => {
    const [value,setValue]=useState("x")
    const [point,setpoint]=useState(Array(9).fill(""))
    const [winner,setWinner]=useState("winner")
     
   console.log("winner...",winner)
   const Player=()=>{
    console.log("sdfghj",value)
   return( <h2>Next Player : {value}</h2>)
}

    const handelClick=(num)=>{
        
        // alert(num)
        let cells=point
        if(cells[num]!==""){
            alert("Alered clickes")
            return
        }
        Player()
        if(value==="x"){
            cells[num]="x"
            setValue("o")
        }else{
            cells[num]="o"
            setValue("x")
        }
        calculateWinner(cells)
        setpoint(cells)
        console.log(point)      
    }
    const Cell=({num})=>{
        return(<td onClick={()=>handelClick(num)}>{point[num]}</td>)
        
    }
    const calculateWinner=(cells)=> {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          console.log(a,b,c)
          if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            console.log("winner",cells[a])
            setWinner(cells[a])
             

          }
        }
        console.log(point[1])
        return null;
      }
      const Win=({winner})=>{
        if(winner!==''){
        <h1>"winner is"{winner}</h1>
    } 
}
    const handelRestart=()=>{
        setpoint(Array(9).fill(''))
        setWinner("")
    }
   
       
      
  return (
    <div>
    <div className='container'>
        <table>
            <tbody> 
                <tr>
                   <Cell num={0}/>
                   <Cell num={1}/>
                   <Cell num={2}/>
                </tr>
                <tr>
                   <Cell num={3}/>
                   <Cell num={4}/>
                   <Cell num={5}/>
                </tr>
                <tr>
                   <Cell num={6}/>
                   <Cell num={7}/>
                   <Cell num={8}/>
                </tr>
                
            </tbody>
             

         </table>
         <Player/>
         </div>
         {winner && (
            <>
           <div className='winner'>
           <h3>{winner} is winner</h3>
            <button onClick={handelRestart}>Play Again</button></div>  
           
            </>
         )}
    </div>
  )
}

export default Tictactoe