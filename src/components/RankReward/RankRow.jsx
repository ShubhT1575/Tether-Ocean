import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../Config";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RankRow() {
  const { wallet } = useSelector((state) => state.bitgold);
    const [slot, setSlot] = useState(1);
  const { walletAddress, isConnected } = wallet;
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
      const response = await axios.get(apiUrl + "/getDetailsByLevel", {
        params: {
          address: address,
          level: slot,
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
  }, [address, slot]);
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card custom-card overflow-hidden">
          <div className="card-header justify-content-between">
            <div className="card-title">Rank Reward Data</div>
      <div className="btn-group align-self-end mb-3">
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
              </div> 
          </div>

          <div className="card-body active-tab">
            <div className="table-responsive">
              <table className="table table-bordered text-nowrap mb-0">
                <thead>
                  <tr>
                    <th scope="col">S.NO</th>
                    <th scope="col">User</th>
                    <th scope="col">Level</th>
                    <th scope="col">Rank</th>
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
                            {item?.level}
                        </td>
                        <td>{item?.rank}</td>
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
              <div>Showing {GlobalIncome?.length || 0} Rank Reward</div>
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
      </div>
    </div>
  );
}

export default RankRow;
