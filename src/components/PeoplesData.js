import { useEffect, useState } from "react";

const PeoplesData = () => {
  const [people, setPeople] = useState([]);
  const [startIndex, setStartInde] = useState(0);
  const membersPerPage = 3;
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json(), {
        headers: {
          "Content-Type": "application/json",
          Accept: "applicatoion/json",
        },
      })
      .then((data) => {
        setPeople(data);
      });
  }, []);

  const endIndex = startIndex + membersPerPage;
  const peopleToShow = people.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (endIndex < people.length) {
      setStartInde(startIndex + membersPerPage);
    } else {
      alert("No more People");
    }
  };

  return (
    <div className="bg-blue-400 flex items-center justify-center w-full h-[100vh]">
      <div className=" w-[50vw] ">
        <div className="flex items-center justify-between mb-4">
          <h1 className="uppercase text-4xl font-medium text-white ">
            people data
          </h1>
          <button
            onClick={handleNextPage}
            className="bg-orange-500 uppercase text-lg font-semibold text-white px-2 py-1 rounded-xl active:ring-1 active:ring-white"
          >
            Next Person
          </button>
        </div>
        {peopleToShow.map((item, index) => {
          const { name, location } = item;
          return (
            <div className="h-20 bg-white rounded-xl flex items-center mb-4">
              <div className="h-full flex items-center bg-green-500 px-6 rounded-l-xl">
                <h1 className="text-4xl text-white font-bold">{index + 1}</h1>
              </div>
              <div className="flex flex-col justify-evenly w-full h-full  ">
                <div className="h-full flex items-center bg-gray-300 rounded-tr-xl">
                  <p className="text-xl px-2">Name : {name}</p>
                </div>
                <div className="h-full flex items-center">
                  <p className="text-xl px-2">Location : {location}</p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex items-center justify-center ">
          <p className="text-white">Currently Shows 3 Peoples</p>
        </div>
      </div>
    </div>
  );
};
export default PeoplesData;
