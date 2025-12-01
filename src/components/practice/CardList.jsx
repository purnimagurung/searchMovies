// import React, { useState } from 'react'

// //child 
// const CardList = ({ cards = []}) => {
//   const [hasWatched, setHasWatched ] =useState(false);

//   const handleWatched =() => {
//     setHasWatched(true);
//     console.log("Watched:", hasWatched);
//   }
//   return (
//     <>
//       <ul>
//       {cards.map((card, index) => (
//         <li key={index}>
//           <h1>{card.name}</h1>
//           <p>{card.genre}</p>
//           <p>{card.rating}</p>
//         </li>
//       ))}
//     </ul>
//     <button style={{backgroundColor:"green", padding:"10px", margin:"10px"} }
//     onClick={handleWatched}>
//       Watch
//       </button>
//     </>
//   )
// }

// export default CardList
