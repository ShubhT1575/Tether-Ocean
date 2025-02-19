import React, { useEffect, useState,useRef } from "react";
import "../../style/matrix.css";
import { Link } from "react-router-dom";
import { apiUrl } from "../Config";
// import { useAccount } from "wagmi";
import axios from "axios";
import { useSelector } from "react-redux";
import { getBalance } from "viem/actions";
import { getUSDT } from "../web3";
import "../../style/dashboard.css";
// import { FaLock } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { MdOutlineDoneOutline } from "react-icons/md";
// import { buySlot, checkAllowance, getActiveSlotData,  } from "../web3";
import toast from "react-hot-toast";
// import { getBalance } from "@wagmi/core";
import {
  buyPackage,
  // checkAllowance,
  getOwner,
  // getUSDT,
  tokenApprove,
  UserExist,
} from "../web3";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { useAccount, useChainId } from "wagmi";
import { setWalletDetails } from "../../Redux/Slice";
import { TokenAddres } from "../Config.js";
import { config } from "../../main.jsx";
// import { useHighlighted } from "@mui/x-charts";

const MatrixTree = () => {
  // const [dateType, setDateType] = useState("Yearly");
  const [blocks, setBlocks] = useState([]);
  const [slot,setSlot] = useState(1)
  const [reEntry,setReEntry] = useState("")
  const { address } = useAccount();
  const [accessAdress, setAccessAddress] = useState("");
  const { dashboardData } = useSelector((state) => state.bitgold);
  const { userId } = dashboardData;

  useEffect(() => {
    const res = new URLSearchParams(window.location.search);
    // https://usdtocean.io/api/uw?user=0x13eF67AF092A521370A97FCC5cc26fBB109DDEbc&slot=1
    if (res.has("accessAddress")) {
      const ref = res.get("accessAddress");
      console.log(ref, "redddddfffff");
      setAccessAddress(ref);
    }
  }, [window.location.search]);

  const add = address ? address : accessAdress;
  const [lastBlock,setLastBlock] = useState("")

  const fetchBlockData = async (address,slot) => {
    try {
      const response = await axios.get(apiUrl + "/uw", {
        params: {
          user: address,
          slot: slot,
        },
      });

      if (response.data && response.data.matrixstruct) {
        const OriginalData = response.data.matrixstruct.map((item) => item.userId);
        console.log(response.data.reenty,"rentry")
        setReEntry(response?.data?.reenty??"")
        const blockData = [...OriginalData].reverse();
        console.log("Block Data:", blockData);
        setLastBlock(response.data.matrixstruct.at(-1)?.place?? "");
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
  console.log(lastBlock, "Last Block")

  useEffect(() => {
    if(address){
    const getBlocks = async () => {
      const blockData = await fetchBlockData(add,slot);
      setBlocks(blockData);
    };

    getBlocks();
  }  
  }, [address,add,slot]);
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
                  How Does Usdtocean Uw Matrix Work
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
                  {`Re-Entry #${reEntry??"0"}`}
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
                      onClick={()=>setSlot(1)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "10px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw" className="side-menu__item">
                        <span className="side-menu__label">
                          Community Member
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
                      <Link to="/MatrixTreeUw" className="side-menu__item">
                        <span className="side-menu__label">Biginner</span>
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
                      <Link to="/MatrixTreeUw" className="side-menu__item">
                        <span className="side-menu__label">Seeker</span>
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
                      <Link to="/MatrixTreeUw" className="side-menu__item">
                        <span className="side-menu__label">Engager</span>
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
                      <Link to="/MatrixTreeUw" className="side-menu__item">
                        <span className="side-menu__label">Motivator</span>
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
                      <Link to="/MatrixTreeUw" className="side-menu__item">
                        <span className="side-menu__label">Explorer</span>
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
                      <Link to="/MatrixTreeUw" className="side-menu__item">
                        <span className="side-menu__label">Soldier</span>
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
                      <Link to="/MatrixTreeUw" className="side-menu__item">
                        <span className="side-menu__label">Promoter</span>
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
                      <Link to="/MatrixTreeUw" className="side-menu__item">
                        <span className="side-menu__label">Advisor</span>
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
                      <Link to="/MatrixTreeUw" className="side-menu__item">
                        <span className="side-menu__label">Director</span>
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
                      <Link to="/MatrixTreeUw" className="side-menu__item">
                        <span className="side-menu__label">Achiever</span>
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
                      <Link to="/MatrixTreeUw" className="side-menu__item">
                        <span className="side-menu__label">Creator</span>
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
                      <Link to="/MatrixTreeUw" className="side-menu__item">
                        <span className="side-menu__label">Mentor</span>
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
                      <Link to="/MatrixTreeUw" className="side-menu__item">
                        <span className="side-menu__label">Expert</span>
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
                      <Link to="/MatrixTreeUw" className="side-menu__item">
                        <span className="side-menu__label">Master</span>
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
                      <Link to="/MatrixTreeUw" className="side-menu__item">
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
                    {/* <div className="mgt-item-parent">
                      <div className="person">
                        <div className="person-profile"></div>
                        <p className="name">UPLINE</p>
                      </div>
                    </div> */}
                    
                    <div className="mgt-item-children">
                      <div className="mgt-item-child">
                        <div className="mgt-item">
                          <div className="mgt-item-parent">
                            <div className="person">
                              <div className="person-profile"></div>
                              <p className="name">{userId? userId : "N/A"}</p>
                            </div>
                          </div>

                          <div className="mgt-item-children">
                            <div className="mgt-item-child">
                              <div className="person">
                                <div className="person-profile"></div>
                                <p className="name">{lastBlock != 3 ? blocks?.[0] ?? "N/A" : "N/A"}</p>
                              </div>
                            </div>

                            <div className="mgt-item-child">
                              <div className="person">
                                <div className="person-profile"></div>
                                <p className="name">{lastBlock == 1 || lastBlock == 3 ? "N/A" :   blocks?.[1] ?? "N/A"}</p>
                              </div>
                            </div>

                            <div className="mgt-item-child">
                              <div className="person">
                                <div className="person-profile"></div>
                                <p className="name">{lastBlock == 3 || lastBlock== 1 || lastBlock == 0? "N/A" : "Recycle"}</p>
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
                                    className={`product-card bg-crypto-balance bg-success slot-menu`} 
                                    onClick={()=>setSlot(slot.id)}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default MatrixTree;
