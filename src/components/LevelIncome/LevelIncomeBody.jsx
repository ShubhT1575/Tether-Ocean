import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../Config";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function LevelIncomeBody() {
  const { wallet } = useSelector((state) => state.bitgold);
    const [slot, setSlot] = useState(1);
  const { walletAddress, isConnected } = wallet;
    const [selectedSlot,setSelectedSlot] = useState(slot)
  const address = walletAddress;
  const [GlobalIncome, setGlobalIncome] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const getGlobalIncome = async () => {
    try {
      const response = await axios.get(apiUrl + "/getDetailsByLevel2", {
        params: {
          address: address,
          level: selectedSlot,
        },
      });
      if (response) {
        setGlobalIncome(response?.data?.res);
        console.log(response?.data?.res,"data")
      } else {
        setGlobalIncome([]);
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };
  console;
  useEffect(() => {
    if (address) getGlobalIncome();
  }, [address, selectedSlot]);

  const slots = [
    { id: 1, price: 7, name: "Community Member" },
    { id: 2, price: 7, name: "Beginner" },
    { id: 3, price: 14, name: "Seeker" },
    { id: 4, price: 14, name: "Engager" },
    { id: 5, price: 28, name: "Motivator" },
    { id: 6, price: 28, name: "Explorer" },
    { id: 7, price: 56, name: "Soldier" },
    { id: 8, price: 56, name: "Promoter" },
    { id: 9, price: 112, name: "Advisor" },
    { id: 10, price: 112, name: "Director" },
    { id: 11, price: 224, name: "Achiever" },
    { id: 12, price: 224, name: "Creator" },
    { id: 13, price: 448, name: "Mentor" },
    { id: 14, price: 896, name: "Expert" },
    { id: 15, price: 1792, name: "Master" },
    { id: 16, price: 3584, name: "Community Legend" },
  ];
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card custom-card overflow-hidden">
          <div className="card-header justify-content-between">
            <div className="card-title">Level Team (Uwn5) Data</div>
      {/* <div className="btn-group align-self-end mb-3">
                <button
                  type=""
                  className="btn btn-primary-gradient btn-packages "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  See Packages
                </button>
                <ul className="dropdown-menu drop-ul">
                  <div className="overflow-div">
                    <li
                      className="w-100"
                      onClick={()=>setSlot(1)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "10px",
                        height: "14%",
                      }}
                    >
                      <Link to="/RankReward" className="side-menu__item">
                        <span className="side-menu__label">
                          1
                        </span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={()=>setSlot(2)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/RankReward" className="side-menu__item">
                        <span className="side-menu__label">2</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={()=>setSlot(3)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/RankReward" className="side-menu__item">
                        <span className="side-menu__label">3</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={()=>setSlot(4)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/RankReward" className="side-menu__item">
                        <span className="side-menu__label">4</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={()=>setSlot(5)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/RankReward" className="side-menu__item">
                        <span className="side-menu__label">5</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={()=>setSlot(6)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/RankReward" className="side-menu__item">
                        <span className="side-menu__label">6</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={()=>setSlot(7)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/RankReward" className="side-menu__item">
                        <span className="side-menu__label">7</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={()=>setSlot(8)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/RankReward" className="side-menu__item">
                        <span className="side-menu__label">8</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={()=>setSlot(9)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/RankReward" className="side-menu__item">
                        <span className="side-menu__label">9</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={()=>setSlot(10)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/RankReward" className="side-menu__item">
                        <span className="side-menu__label">10</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={()=>setSlot(11)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/RankReward" className="side-menu__item">
                        <span className="side-menu__label">11</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={()=>setSlot(12)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/RankReward" className="side-menu__item">
                        <span className="side-menu__label">12</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={()=>setSlot(13)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/RankReward" className="side-menu__item">
                        <span className="side-menu__label">13</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={()=>setSlot(14)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/RankReward" className="side-menu__item">
                        <span className="side-menu__label">14</span>
                      </Link>
                    </li>

                    <li
                      className="w-100"
                      onClick={()=>setSlot(15)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/RankReward" className="side-menu__item">
                        <span className="side-menu__label">15</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={()=>setSlot(16)}
                      style={{
                        paddingBottom: "35px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/RankReward" className="side-menu__item">
                        <span className="side-menu__label">
                          16
                        </span>
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>  */}
          </div>

          <div className="card-body active-tab">
            <div className="table-responsive">
              <table className="table table-bordered text-nowrap mb-0">
                <thead>
                  <tr>
                    <th scope="col">S.NO</th>
                    <th scope="col">User</th>
                    <th scope="col">Level</th>
                    <th scope="col">Direct Team</th>
                    <th scope="col">Time Stamp</th>
                    {/* <th scope="col">Status</th> */}
                  </tr>
                </thead>
                <tbody>
                  {GlobalIncome?.map((item, index) => {
                    return (
                      <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item?.userId}</td>
                        <td>
                            {item?.level+1}
                        </td>
                        <td>{item?.rank}</td>
                        <td>{item?.directteam}</td>
                        <td>{new Date(item?.time).toLocaleString()}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {GlobalIncome?.length === 0 && (
                <div className=" w-100">
                  <div className="w-100 text-center p-3">No Data Found.</div>
                </div>
              )}
            </div>
          </div>

          <div className="card-footer pagination-body">
            <div className="d-flex align-items-center justify-content-between">
              <div>Showing {GlobalIncome?.length || 0} Level Team (Uwn5)</div>
              <div>
                <nav
                  aria-label="Page navigation"
                  className="pagination-style-4"
                >
                  <ul className="pagination mb-0">
                    <button
                      className="btn btn-primary page-item btn-pagination"
                      style={{ marginRight: "10px" }}
                      disabled={currentPage === 1}
                      onClick={handlePreviousPage}
                    >
                      Prev
                    </button>

                    <button
                      className="btn btn-success page-item btn-pagination"
                      disabled={currentPage === totalPages}
                      onClick={handleNextPage}
                    >
                      Next
                    </button>
                  </ul>
                </nav>
              </div>
              <div>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-12">
                <div>
                  <div
                    className="card custom-card school-card"
                    style={{ margin: "0" }}
                  >
                    <div
                      className="card-body d-flex gap-2 justify-content-between "
                      style={{ height: "150px" }}
                    >
                      <div
                        className="carousel-container bg-crypto-balance"
                        style={{ borderRadius: "20px" }}
                      >
                        <div className="carousel">
                          {slots.map((slot) => {
                            return (
                              <a
                                href="#"
                                key={slot.id}
                                className={`product-card bg-crypto-balance bg-success slot-menu ${selectedSlot === slot.id ? "bg-warning":""}`}
                                onClick={() => setSelectedSlot(slot.id)}
                                style={{width:"80px"}}
                              >
                                <div
                                  className="carousel-card-value carousel-card-value carousel-card-value-sucess"
                                  style={{ height: "30px", fontSize: "15px" }}
                                >
                                  {slot.id}
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </div>
    </div>
  );
}

export default LevelIncomeBody;
