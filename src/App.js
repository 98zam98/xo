import {useState,useEffect} from 'react';


const App = () =>{

    const [Board, setBoard] = useState(
        [ [2,2,2], [2,2,2], [2,2,2]]
     );

     const [Turn, setTurn] = useState(0);
     const xo = ['X','O',''];


     var Xcounter = 0;
     var Ocounter = 0;

     const winner = () =>{
        
        for (let index = 0; index < 3; index++) {
            for (let jndex = 0; jndex < 3; jndex++)
            {
                if(Board[index][jndex]===0)
                {
                    Xcounter+=1;
                }
                else if(Board[index][jndex]===1)
                {
                    Ocounter+=1;
                }
            }    
            if(Xcounter===3)
            {
                return "X wins";
            }
            else if(Ocounter===3)
            {
                return "O wins";
            }
            Xcounter=0;
            Ocounter=0;     
        }
        for (let index = 0; index < 3; index++) {
            for (let jndex = 0; jndex < 3; jndex++)
            {
                if(Board[jndex][index]===0)
                {
                    Xcounter+=1;
                }
                else if(Board[jndex][index]===1)
                {
                    Ocounter+=1;
                }
            }    
            if(Xcounter===3)
            {
                return "X wins";
            }
            else if(Ocounter===3)
            {
                return "O wins";
            }
            Xcounter=0;
            Ocounter=0;     
        } 
        if((Board[0][0]===0)&&(Board[1][1]===0)&&(Board[2][2]===0))
        {
            return "X wins";
        }      
        else if((Board[0][2]===0)&&(Board[1][1]===0)&&(Board[2][0]===0))
        {
            return "X wins";
        }     
        else if((Board[0][0]===1)&&(Board[1][1]===1)&&(Board[2][2]===1))
        {
            return "O wins";
        }      
        else if((Board[0][2]===1)&&(Board[1][1]===1)&&(Board[2][0]===1))
        {
            return "O wins";
        }
        return "continue playing";
     };

     const [Counter, setCounter] = useState(winner());
     useEffect(() => {
        setCounter(winner());
     }, [Board])
     
     const chooseCell = (icurrent,jcurrent) => {
        setBoard(
            Board.map(
                (r,i)=>{
                    return (i===icurrent)?r.map(
                        (v,j)=>{
                            if((j===jcurrent)&&(v===2))
                            {
                                setTurn((Turn+1)%2);
                                return Turn;
                            }
                            return v;
                        }
                    ):r;
                }
            )
        );
     };




     return(
        <div className='App'>
            <div className='board'>
                    {
                        Board.map(
                            (r,i)=>{
                                return <div className='row' > {r.map(
                                    (v,j)=>{return (<div className='square' onClick={()=> {chooseCell(i,j); 
                                        //console.log(winner());
                                     } }> {xo[v]} </div>);}
                                )} </div> ;
                            }
            )
                    }
            </div>
            
            <div className='Counter' >{
                Counter
                }</div>

        </div>

    );
}

export default App ;
