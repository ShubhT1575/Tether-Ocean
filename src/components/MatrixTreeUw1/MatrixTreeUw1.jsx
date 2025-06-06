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
  // const address = "0x712c68Ef82502DFC310dD4aaA6B8050481375bd5"
  const [accessAdress, setAccessAddress] = useState("");
  const { dashboardData } = useSelector((state) => state.bitgold);
  const { userDetails } = dashboardData;
  const [childAdd, setChildAdd] = useState();
  const [childUser, setChildUser] = useState();
  const [cycle,setCycle] = useState()
  
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

  const fetchBlockData = async (address, slot,cycle) => {
    try {
      const response = await axios.get(apiUrl + "/uwn1", {
        params: {
          // user: address,
          user: childAdd ? childAdd :  address,
          slot: slot,
          cycle: cycle
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
        console.log("Block Data:", blocks);
      };

      getBlocks();
    }
  }, [address, add, selectedSlot,childAdd,cycle]);
  // console.log(blocks, "block");

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
            matrix: 2,  
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

        const [place1, setPlace1] = useState({});
        const [place2, setPlace2] = useState({});
        const [place3, setPlace3] = useState({});
        const [place4, setPlace4] = useState({});
        const [place5, setPlace5] = useState({});
        const [place6, setPlace6] = useState({});
        // const [place7, setPlace7] = useState({});
        // const [place8, setPlace8] = useState({});
        // const [place9, setPlace9] = useState({});
        // const [place10, setPlace10] = useState({});
        // const [place11, setPlace11] = useState({});
        // const [place12, setPlace12] = useState({});
        
    
        useEffect(() => {
    
          setPlace1({});
          setPlace2({});
          setPlace3({});
          setPlace4({});
          setPlace5({});
          setPlace6({});
          // setPlace7({});
          // setPlace8({});
          // setPlace9({});
          // setPlace10({});
          // setPlace11({});
          // setPlace12({});
    
        blocks.forEach((block) => {
          if (block.place === 1) {
            setPlace1(block);
          } else if (block.place === 2) {
            setPlace2(block);
          } else if (block.place === 3) {
            setPlace3(block);
          } else if (block.place === 4) {
            setPlace4(block);
          } else if (block.place === 5) {
            setPlace5(block);
          } else if (block.place === 6) {
            setPlace6(block);
          } 
          // else if (block.place === 7) {
          //   setPlace7(block);
          // } else if (block.place === 8) {
          //   setPlace8(block);
          // } else if (block.place === 9) {
          //   setPlace9(block);
          // } else if (block.place === 10) {
          //   setPlace10(block);
          // } else if (block.place === 11) {
          //   setPlace11(block);
          // } else if (block.place === 12) {
          //   setPlace12(block);
          // }
          
        }
        );
        console.log(place1, "place1");
        console.log(place2, "place2");
        console.log(place3, "place3");
        console.log(place4, "place4");
      },[blocks,address, add, selectedSlot, childAdd,cycle]);

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
                  How Does Usdtocean Uwn1 Matrix Work
                </h1>
              </div>
            </div>
          </div>
          <div className="verticals twelve">
            <section className="management-tree card custom-card school-card">
              <div className="d-flex justify-content-end align-items-center gap-3 flex-wrap mb-2" >
              <div className="btn-group ">
              <button
                  type="button"
                  className="btn btn-success-ghost btn-wave"
                  style={{whiteSpace: "nowrap"}}
                >
                  {`Re-Entry #${reEntry ?? "0"}`}
                </button>
              </div>
              <div className="btn-group ">
                <button
                  type="button"
                  className="btn btn-success btn-wave"
                  style={{whiteSpace: "nowrap"}}
                >
                  {`Cycle #${cycle ?? reEntry}`}
                </button>
              </div>
              <div className="btn-group ">
                <button
                  type="button"
                  disabled={blocks[0]?.cycle === 0 ? true:false}
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
                      <Link to="/MatrixTreeUw1" className="side-menu__item">
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
                      <Link to="/MatrixTreeUw1" className="side-menu__item">
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
                      <Link to="/MatrixTreeUw1" className="side-menu__item">
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
                      <Link to="/MatrixTreeUw1" className="side-menu__item">
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
                      <Link to="/MatrixTreeUw1" className="side-menu__item">
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
                      <Link to="/MatrixTreeUw1" className="side-menu__item">
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
                      <Link to="/MatrixTreeUw1" className="side-menu__item">
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
                      <Link to="/MatrixTreeUw1" className="side-menu__item">
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
                      <Link to="/MatrixTreeUw1" className="side-menu__item">
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
                      <Link to="/MatrixTreeUw1" className="side-menu__item">
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
                      <Link to="/MatrixTreeUw1" className="side-menu__item">
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
                      <Link to="/MatrixTreeUw1" className="side-menu__item">
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
                      <Link to="/MatrixTreeUw1" className="side-menu__item">
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
                      <Link to="/MatrixTreeUw1" className="side-menu__item">
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
                      <Link to="/MatrixTreeUw1" className="side-menu__item">
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
                      <Link to="/MatrixTreeUw1" className="side-menu__item">
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
                            <div className="person" onClick={()=> handleClick(place1?.user, place1?.userId)}>
                              <div className="person-profile"></div>
                              <p className="name">{place1?.userId ??  "N/A"}</p>
                            </div>
                          </div>

                          <div className="mgt-item-children">
                            <div className="mgt-item-child">
                              <div className="person" onClick={()=> handleClick(place3?.user, place3?.userId)}>
                                <div className="person-profile"></div>
                                <p className="name">{place3?.userId ?? "N/A"}</p>
                              </div>
                            </div>

                            <div className="mgt-item-child">
                              <div className="person" onClick={()=> handleClick(place4?.user, place4?.userId)}>
                                <div className="person-profile"></div>
                                <p className="name">{place4?.userId ?? "N/A"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mgt-item-child">
                        <div className="mgt-item">
                          <div className="mgt-item-parent">
                            <div className="person" onClick={()=> handleClick(place2?.user, place2?.userId)}>
                              <div className="person-profile"></div>
                              <p className="name">{place2?.userId ?? "N/A"}</p>
                            </div>
                          </div>

                          <div className="mgt-item-children">
                            <div className="mgt-item-child">
                              <div className="person" onClick={()=> handleClick(place5?.user, place5?.userId)}>
                                <div className="person-profile"></div>
                                <p className="name">{place5?.userId ?? "N/A"}</p>
                              </div>
                            </div>

                            <div className="mgt-item-child">
                              <div className="person" onClick={()=> handleClick(place6?.user, place6?.userId)}>
                                <div className="person-profile"></div>
                                <p className="name">{place6?.userId ?? "N/A"}</p>
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
                                    className={`product-card bg-crypto-balance bg-success slot-menu ${selectedSlot === slot.id ? "bg-warning":""}`} 
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
                        <td className="text-info">{`${item.sender.slice(0, 7)}.......${item.sender.slice(-5)}`}  <span className="text-light"> ({item?.senderId})</span>
                        </td>
                        <td className="text-warning">{item?.matrixId}</td>
                        <td className="text-warning">{item?.level}</td>
                        <td className="text-light">
                            {item.slotId}
                        </td>
                        <td className="text-danger">$ {item.amount/1e18 === 0? "Income used for recycle" : "$" + item.amount/1e18}</td>
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
