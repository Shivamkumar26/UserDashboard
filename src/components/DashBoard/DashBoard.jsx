import React from "react";
import { useSelector } from "react-redux";
import { DiCssdeck } from "react-icons/di";
import { AiOutlinePlus } from "react-icons/ai";
import "./DashBoard.css";
import Card from "../Card/Card";

const Dashboard = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  return (
    selectedData && (
      <div className="dash-container">
        {selectedData.map((e, index) => {
          return (
            <>
              <div key={index} className="dash-card-container">
                <div className="flex-sb">
                  <div>
                    {!user ? (
                      <DiCssdeck />
                    ) : (
                      <>
                        <div className="image-container relative">
                          <img
                            className="user"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLaVtRSnUuIC4vTpZ2YU_d-zFuYm2zjjTpNQ&usqp=CAU"
                            alt="UserImage"
                          />
                        </div>
                      </>
                    )}
                    <span>
                      {" "}
                      {e[index]?.title} {e[index]?.value?.length}
                    </span>
                  </div>
                  <div>
                    <AiOutlinePlus />{" "}
                    <span style={{ letterSpacing: "2px" }}>...</span>
                  </div>
                </div>
                <div className="flex-gap-10">
                  {e[index]?.value?.map((e, ind) => {
                    return (
                      <Card id={e.id} title={e.title} tag={e.tag} />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default Dashboard;