import { useEffect, useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";
const Home = () => {

   
  const [allActors, setAllactors] = useState([]);
   const[seceltedActors,setSelector]=useState([])
  const[remaining,setRemaining]=useState(0)
  const [cost,setCost]=useState(0)

  const handleseceltedActors= (actor1)=>{

const newActor=[...seceltedActors,actor1]

    const totalActorCost= newActor.reduce((total,act)=>act.salary+total,0)
    // setCost(totalActorCost)
    const remainBalance= 20000-totalActorCost
    //  setRemaining(remainBalance)
    if( totalActorCost>20000){
      alert("taka nai")
    } else{
       setRemaining(remainBalance)
      setCost(totalActorCost)
    }

const isExist = seceltedActors.find((item) => item.id == actor1.id);
if(isExist){
  alert("booked id cant addd")
}else{setSelector(newActor)}

  }
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllactors(data));
  }, []);
  return (
    <div className=" text-sky-50">
     <h2>Dtaa:{allActors.length}</h2>
   
   

    <div className=" max-w-6xl flex m-4">
        
      <div
        className="Home-container  w-[800px]
        flex justify-between text-white"
      >
        <div
          className="cart-container grid grid-cols-2 gap-5 w-[400px]"
        >
         
          {allActors.map((actor, idx) => (
            <div
              key={idx}
              className="card
          w-48 h-56 border-2 p-1"
            >
              <div className=" w-20 ">
                <img className="rounded-full" src={actor.image} alt="" />
              </div>
              <h2>{actor.name}</h2>
              <h2>{actor.role}</h2>
              <p>
                <small>adipisicing elit. Molestias, alias!</small>{" "}
              </p>
              <h2>salary: ${actor.salary}</h2>
              <div className="flex justify-center">
                {" "}
                <button onClick={()=>{handleseceltedActors(actor)}}
                className="btn bg-green-500 border-1 rounded-xl p-1 flex text-center">
                  Salary
                </button>
              </div>
            </div>
          ))}
        </div>
        <Cart seceltedActors={seceltedActors}
        cost={cost}
        remaining={remaining}
        
        >

        </Cart>
      </div>
    </div>
    </div>
  );
};

export default Home;
