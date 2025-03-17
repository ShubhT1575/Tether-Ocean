import React, { useEffect, useRef, useState } from "react";
import "../../style/matrix.css";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import { useSelector } from "react-redux";
import axios from "axios";
import { apiUrl } from "../Config";

const MatrixTree = () => {
  const [blocks, setBlocks] = useState([]);
  const [slot, setSlot] = useState(1);
  const [reEntry, setReEntry] = useState("");
  const [selectedSlot,setSelectedSlot] = useState(slot)
  const { address } = useAccount();
  const [accessAdress, setAccessAddress] = useState("");
  const { dashboardData } = useSelector((state) => state.bitgold);
  const { userDetails } = dashboardData;
  const [cycle,setCycle] = useState()

  const [childAdd, setChildAdd] = useState();
  const [childUser, setChildUser] = useState();
  
  const handleClick = (childAdd , childUser)=>{
    // console.log(childAdd, "childAdd");
    if(childAdd){
    setChildAdd(childAdd)
    setChildUser(childUser)
    }
    // console.log(childAdd, "childAdd");
  }

  useEffect(() => {
    const res = new URLSearchParams(window.location.search);
    // https://usdtocean.io/api/uwn2?user=0x13eF67AF092A521370A97FCC5cc26fBB109DDEbc&slot=1
    if (res.has("accessAddress")) {
      const ref = res.get("accessAddress");
      console.log(ref, "redddddfffff");
      setAccessAddress(ref);
    }
  }, [window.location.search]);

  const add = address ? address : accessAdress;
  const [lastBlock, setLastBlock] = useState("");

  const fetchBlockData = async (address, slot ,cycle) => {
    try {
      const response = await axios.get(apiUrl + "/uwn2", {
        params: {
          // user: address,
          user: childAdd ? childAdd : address,
          slot: slot,
          cycle: cycle,
        },
      });

      if (response.data && response.data.mergedRecords) {
        const OriginalData = response.data.mergedRecords.map(
          (item) => item
        );
        console.log(response.data.reenty, "rentry");
        setReEntry(response?.data?.reenty ?? "");
        const blockData = [...OriginalData];
        console.log("Block Data:", blockData);
        setLastBlock(response.data.mergedRecords.at(-1)?.place ?? "");
        console.log("Last Block:", lastBlock);

        return blockData;
      } else {
        console.error("Invalid response structure");
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  console.log(lastBlock, "Last Block");

  useEffect(() => {
    if (address) {
      const getBlocks = async () => {
        const blockData = await fetchBlockData(add, selectedSlot,cycle);
        setBlocks(blockData);
      };

      getBlocks();
    }
  }, [address, add, selectedSlot, childAdd,cycle]);
  console.log(blocks, "block");


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

    const [directUser, setDirectUser] = useState([]);
    // const { address } = useAccount();
    // console.log(address, 'saadnhufhuh')
    const itemsPerPage = 8; // Change this to modify items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [matrixIncome,setMatrixIncome] = useState([]);
  
    const totalPages = Math.ceil(matrixIncome.length / itemsPerPage);
  
    const paginatedLevels = matrixIncome.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    // Handle previous page
    const handlePreviousPage = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
  
    // Handle next page
    const handleNextPage = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
  
  
    const getMatrixIncome = async () => {
      try {
        const response = await axios.get(apiUrl + "/matrixincome", {
          params: {
            userId: address,
            matrix: 3,
            slot: selectedSlot
          },
        });
        if (response?.status === 200) {
        console.log(response.data.user_income, "repp")
  
          setMatrixIncome(response?.data?.user_income || [])
          console.log(matrixIncome,"Matrix")
          // setTotalPages(response?.data?.totalPages);
        } else {
          setDirectUser([]);
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };
    useEffect(() => {
      if (address) getMatrixIncome();
    }, [address, selectedSlot]);

    const hasSetCycle = useRef(false); 

    useEffect(() => {
      if (!hasSetCycle.current && reEntry !== undefined && reEntry !== null & reEntry !== "") {
        setCycle(reEntry);
        hasSetCycle.current = true; // Prevent future updates
      }
    }, [reEntry]);


  return (
    <>
      <div className="main-content app-content">
        <div className="container-fluid">
          <div style={{ marginTop: "90px" }} className="dash-head-div">
            <div className="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2 mt-3">
              <div>
                <nav>
                  <ol className="breadcrumb mb-1">
                    <li className="breadcrumb-item">
                      <a href="#"> Page </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Matrix
                    </li>
                  </ol>
                </nav>
                <h1 className="page-title fw-medium fs-18 mb-0 text-light">
                  How Does Usdtocean Uwn2 Matrix Work
                </h1>
              </div>
            </div>
          </div>
          <div className="verticals twelve">
            <section className="management-tree card custom-card school-card">
              
            <div className="btn-group align-self-end mb-3">
                <button
                  type="button"
                  className="btn btn-success-ghost btn-wave"
                >
                  {`Re-Entry #${reEntry ?? "0"}`}
                </button>
              </div>
              <div className="btn-group align-self-end mb-3">
                <button
                  type="button"
                  className="btn btn-success btn-wave"
                >
                  {`Cycle #${cycle ?? reEntry}`}
                </button>
              </div>
              <div className="btn-group align-self-end mb-3">
                <button
                  type="button"
                  disabled={cycle === 0 ? true:false}
                  className="btn btn-success btn-wave"
                  style={{marginRight: "12px"}}
                  onClick={()=>setCycle(reEntry > 0 ? cycle - 1 : "")}
                >
                {"<"}
                </button>
                <button
                  type="button"
                  className="btn btn-success btn-wave"
                  disabled={cycle === reEntry ? true:false}
                  style={{marginLeft: "12px"}}
                  onClick={()=>setCycle(reEntry > 0 ? cycle + 1 : "")}
                >
                {">"}
                </button>
              </div>

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
                      onClick={() => setSlot(1)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "10px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw2" className="side-menu__item">
                        <span className="side-menu__label">
                          Community Member
                        </span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(2)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw2" className="side-menu__item">
                        <span className="side-menu__label">Biginner</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(3)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw2" className="side-menu__item">
                        <span className="side-menu__label">Seeker</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(4)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw2" className="side-menu__item">
                        <span className="side-menu__label">Engager</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(5)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw2" className="side-menu__item">
                        <span className="side-menu__label">Motivator</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(6)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw2" className="side-menu__item">
                        <span className="side-menu__label">Explorer</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(7)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw2" className="side-menu__item">
                        <span className="side-menu__label">Soldier</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(8)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw2" className="side-menu__item">
                        <span className="side-menu__label">Promoter</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(9)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw2" className="side-menu__item">
                        <span className="side-menu__label">Advisor</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(10)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw2" className="side-menu__item">
                        <span className="side-menu__label">Director</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(11)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw2" className="side-menu__item">
                        <span className="side-menu__label">Achiever</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(12)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw2" className="side-menu__item">
                        <span className="side-menu__label">Creator</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(13)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw2" className="side-menu__item">
                        <span className="side-menu__label">Mentor</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(14)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw2" className="side-menu__item">
                        <span className="side-menu__label">Expert</span>
                      </Link>
                    </li>

                    <li
                      className="w-100"
                      onClick={() => setSlot(15)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw2" className="side-menu__item">
                        <span className="side-menu__label">Master</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(16)}
                      style={{
                        paddingBottom: "35px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw2" className="side-menu__item">
                        <span className="side-menu__label">
                          Community Legend
                        </span>
                      </Link>
                    </li>
                  </div>
                </ul>
              </div> */}

              <div className="mgt-container">
                <div className="mgt-wrapper">
                  <div className="mgt-item">
                    <div className="mgt-item-parent">
                      <div className="person">
                        <div className="person-profile"></div>
                        <p className="name">{childAdd ? childUser : userDetails?.userId}</p>
                      </div>
                    </div>

                    <div className="mgt-item-children">
                      <div className="mgt-item-child">
                        <div className="mgt-item">
                          <div className="mgt-item-parent">
                            <div className="person" onClick={()=> handleClick(blocks[0]?.user, blocks[0]?.userId)}>
                              <div className="person-profile"></div>
                              <p className="name">{lastBlock >= 1 ? blocks[0]?.userId : "N/A"}</p>
                            </div>
                          </div>

                          <div className="mgt-item-children">
                            <div className="mgt-item-child">
                              <div className="person" onClick={()=> handleClick(blocks[3]?.user, blocks[3]?.userId)}>
                                <div className="person-profile"></div>
                                <p className="name">{lastBlock >= 4 ? blocks[3]?.userId : "N/A"}</p>
                              </div>
                            </div>

                            <div className="mgt-item-child">
                              <div className="person" onClick={()=> handleClick(blocks[4]?.user, blocks[4]?.userId)}>
                                <div className="person-profile"></div>
                                <p className="name">{lastBlock >= 5 ? blocks[4]?.userId : "N/A"}</p>
                              </div>
                            </div>

                            <div className="mgt-item-child">
                              <div className="person" onClick={()=> handleClick(blocks[5]?.user, blocks[5]?.userId)}>
                                <div className="person-profile"></div>
                                <p className="name">{lastBlock >= 6 ? blocks[5]?.userId : "N/A"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mgt-item-child">
                        <div className="mgt-item">
                          <div className="mgt-item-parent">
                            <div className="person" onClick={()=> handleClick(blocks[1]?.user, blocks[1]?.userId)}>
                              <div className="person-profile"></div>
                              <p className="name">{lastBlock >= 2 ? blocks[1]?.userId : "N/A"}</p>
                            </div>
                          </div>

                          <div className="mgt-item-children">
                            <div className="mgt-item-child">
                              <div className="person" onClick={()=> handleClick(blocks[6]?.user, blocks[6]?.userId)}>
                                <div className="person-profile"></div>
                                <p className="name">{lastBlock >= 7 ? blocks[6]?.userId : "N/A"}</p>
                              </div>
                            </div>

                            <div className="mgt-item-child">
                              <div className="person" onClick={()=> handleClick(blocks[7]?.user, blocks[7]?.userId)}>
                                <div className="person-profile"></div>
                                <p className="name">{lastBlock >= 8 ? blocks[7]?.userId : "N/A"}</p>
                              </div>
                            </div>

                            <div className="mgt-item-child">
                              <div className="person" onClick={()=> handleClick(blocks[8]?.user, blocks[8]?.userId)}>
                                <div className="person-profile"></div>
                                <p className="name">{lastBlock >= 9 ? blocks[8]?.userId : "N/A"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="mgt-item-child">
                        <div class="mgt-item">
                          <div class="mgt-item-parent">
                            <div class="person" onClick={()=> handleClick(blocks[2]?.user, blocks[2]?.userId)}>
                              <div className="person-profile"></div>
                              <p class="name">{lastBlock >= 3 ? blocks[2]?.userId : "N/A"}</p>
                            </div>
                          </div>

                          <div class="mgt-item-children">
                            <div class="mgt-item-child">
                              <div class="person" onClick={()=> handleClick(blocks[9]?.user, blocks[9]?.userId)}>
                                <div className="person-profile"></div>
                                <p class="name">{lastBlock >= 10 ? blocks[9]?.userId : "N/A"}</p>
                              </div>
                            </div>

                            <div class="mgt-item-child">
                              <div class="person" onClick={()=> handleClick(blocks[10]?.user, blocks[10]?.userId)}>
                                <div className="person-profile"></div>
                                <p class="name">{lastBlock >= 11 ? blocks[10]?.userId : "N/A"}</p>
                              </div>
                            </div>

                            <div class="mgt-item-child">
                              <div class="person" onClick={()=> handleClick(blocks[11]?.user, blocks[11]?.userId)}>
                                <div className="person-profile"></div>
                                <p class="name">{lastBlock == 12 ? blocks[11]?.userId : "N/A"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-12">
                    <div>
                      <div className="card custom-card school-card" style={{margin: "0"}}>
                        <div
                          className="card-body d-flex gap-2 justify-content-between "
                          style={{ height: "150px" }}
                        >
                          
                          <div className="carousel-container bg-crypto-balance" style={{borderRadius: "20px"}}>
                            <div className="carousel">
                              {slots.map((slot) => {
                                return (
                                  <a
                                    href="#"
                                    key={slot.id}
                                    className={`product-card bg-crypto-balance bg-success slot-menu ${selectedSlot === slot.id ? "bg-warning": ""}`} 
                                    onClick={()=>setSelectedSlot(slot.id)}
                                  >
                                    <div
                                      className="carousel-card-value carousel-card-value carousel-card-value-sucess"
                                      style={{ height: "30px", fontSize: "15px" }}
                                    >
                                      {slot.name}
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
            </section>
            <div className="row">
              <div className="col-xl-12">
                <div className="card custom-card overflow-hidden">
                  <div className="card-header justify-content-between">
                    <div className="card-title">Matrix Income Data</div>
                  </div>

                  <div className="card-body active-tab">
                    <div className="table-responsive">
                      <table className="table table-bordered text-nowrap mb-0">
                        <thead>
                          <tr>
                            <th scope="col">Referrer</th>
                            <th scope="col">Matrix</th>
                            <th scope="col">Level</th>
                            <th scope="col">Slot</th>
                            <th scope="col">Amount</th>
                            {/* <th scope="col">Level</th>
                    <th scope="col">Total Reward</th>
                    <th scope="col">Status</th> */}
                          </tr>
                        </thead>
                        <tbody>
                          {paginatedLevels?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-info">{`${item.sender.slice(0, 7)}.......${item.sender.slice(-5)}`}
                        </td>
                        <td className="text-warning">{item?.matrixId}</td>
                        <td className="text-warning">{item?.level}</td>
                        <td className="text-light">
                            {item.slotId}
                        </td>
                        <td className="text-danger">$ {item.amount/1e18}</td>
                        {/* <td>{item.level}</td>
                        <td>{item.totalReward}</td> */}
                        {/* <td>
                          <span className="badge bg-success-transparent">
                            success
                          </span>
                        </td> */}
                      </tr>
                    );
                  })}
                        </tbody>
                      </table>
                      {matrixIncome?.length === 0 && (
                      <div className=" w-100">
                        <div className="w-100 text-center p-3">
                          No Data Found.
                        </div>
                      </div>
                       )} 
                    </div>
                  </div>

                  <div className="card-footer pagination-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        Showing {matrixIncome?.length || 0} Matrix Income
                        <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                      </div>
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
                        <span>Page {currentPage} of {totalPages}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatrixTree;
