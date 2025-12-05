import React, {useState, useMemo} from 'react';
function isPrime(n) {
  if (n < 2) return false;
  let prime = true;
  for (let i = 2;  i <= n/2; i++) {
    if (n % i === 0){ prime =false;}
  }
  if (prime == true){return true}
  else{return false}
}
const rooms = new Array(100000).fill(0).map((e,i)=>{
    return{
        id: i,
        isAvailable: isPrime(i)
    }
})
export default function Rooms(){
    const [available, setAvailable] = useState(rooms);
    const availableRooms = useMemo(()=>{
        return available.filter(room => room.isAvailable === true)
    },[available])
    return(
        <>
         <div >
        {availableRooms.slice(0, 100).map(room => ( 
          <div key={room.id} >
            Room #{room.id}
          </div>
        ))}
      </div>
        </>
    )
}