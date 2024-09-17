import React, { useState, useEffect } from "react";
import { supabase } from "./services/supabaseClient";

function App() {
  // const [students, setStudents] = useState([]);
  // console.log(students);

  // useEffect(() => {
  //   fetchStudents();
  // }, []);

  // async function fetchStudents() {
  //   const { data } = await supabase.from("Students").select("*");
  //   setStudents(data);
  // }

  // return (
  //   <div>
  //     {students.map((student) => (
  //       <p key={student.id}>
  //         {student.last_name}, {student.given_name} {student.middle_name}.
  //       </p>
  //     ))}
  //   </div>
  // );
}

export default App;
