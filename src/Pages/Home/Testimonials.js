// import React from "react";
// import quote from "../../assets/icons/quote.svg";
// import people1 from "../../assets/images/people1.png";
// import people2 from "../../assets/images/people2.png";
// import people3 from "../../assets/images/people3.png";
// import ReviewCard from "../../Components/ReviewCard";

// const Testimonials = () => {
//   const reviews = [
//     {
//       _id: 1,
//       name: "Winson Henry",
//       reviewText:
//         "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
//       location: "California",
//       img: people1,
//     },
//     {
//       _id: 2,
//       name: "Winson Henry",
//       reviewText:
//         "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
//       location: "California",
//       img: people2,
//     },
//     {
//       _id: 3,
//       name: "Winson Henry",
//       reviewText:
//         "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
//       location: "California",
//       img: people3,
//     },
//   ];

//   return (
//     <section className="container mx-auto my-24 px-3">
//       <div className="flex justify-between border items-center">
//         <div>
//           <h4 className="text-secondary text-xl font-semibold mb-3">
//             Testimonials
//           </h4>
//           <h3 className="text-4xl font-semibold">What Our Patients Says</h3>
//         </div>
//         <div>
//           <img className="w-20 lg:w-36" src={quote} alt="" />
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 xl:gap-16 my-12">
//         {reviews.map((review) => (
//           <ReviewCard key={review._id} review={review} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
