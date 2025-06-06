import React, { useEffect, useState } from "react";
import ConnectWallet from "./ConnectWallet";
import { useAccount, useChainId } from "wagmi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setDashboardData,
  setTokenData,
  setWalletDetails,
} from "../Redux/Slice";
import { getUser } from "../API/Api";
import { getUSDT } from "./web3";

function Header() {
  const dispatch = useDispatch();
  const chainId = useChainId();
  // const address = "0x06e796a9cEa2CA661Ff1B425F4d344BA92996434";
  const { address } = useAccount();
  const navigate = useNavigate();
  const [accessAdress, setAccessAddress] = useState("");
  const { connector, isConnected, status, isDisconnected } = useAccount();

  useEffect(() => {
    const res = new URLSearchParams(window.location.search);
    if (res.has("accessAddress")) {
      const ref = res.get("accessAddress");
      console.log(ref, "redddddfffff");
      setAccessAddress(ref);
    }
  }, [window.location.search]);

  const add = address ? address : accessAdress;

  useEffect(() => {
    dispatch(
      setWalletDetails({
        walletAddress: add,
        chainId,
        isConnected,
        isDisconnected,
        connector,
        status,
      })
    );
  }, [dispatch, chainId, add, isConnected, isDisconnected, accessAdress]);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (!add) {
  //       navigate("/SignIn");
  //     }
  //   }, 2000);
  
  //   return () => clearTimeout(timeout); 
  // }, [add, navigate]);
  

  useEffect(() => {

    getUser(add)
      .then((res) => {
        console.log(res, "res");
        if (res?.status == 200) {
          console.log(res?.data?.userDetails, "ghfsdatgcgt");
          dispatch(setDashboardData(res?.data));
        } else {
          dispatch(setDashboardData({}));
        }
      })
      .catch((error) => {
        console.log(error, "ERROR:::");
      });
  }, [add]);

  

  function isCollapsed() {
    const side = document.getElementById("sidebar");
    if (window.innerWidth <= 992) {
      if (side.classList.contains("t")) {
        side.classList.replace("t", "y");
      } else if (side.classList.contains("y")) {
        side.classList.replace("y", "t");
      }
    }
  }

  // const handleOpenPDF = () => {
  //   window.open("/pdf/CoreCrowd.pdf", "_blank");
  // };

  useEffect(() => {
    if (address)
      getUSDT().then((res) => {
        // console.log(res);
        dispatch(
          setTokenData({
            address: res?.address,
            decimals: res?.decimals,
            symbol: res?.symbol,
          })
        );
      });
  }, [address]);

  return (
    <header className="app-header header-ll sticky" id="header">
      <div className="main-header-container container-fluid align-items-center">
        <div className="header-content-left  d-flex align-items-center ">
          <div
            className="header-element mx-lg-0 mx-2 head-tog"
            onClick={isCollapsed}
            id="ic"
          >
            <a
              aria-label="Hide Sidebar"
              className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
              data-bs-toggle="sidebar"
              href="#"
            >
              <span></span>
            </a>
          </div>
          <div className=" d-flex align-items-center">
            <span className="fw-bold head-welcome" style={{ fontSize: "22px" }}>
              Welcome Back...
              <span className="text-warning">
                {address ? `${address.slice(0, 4)}...${address.slice(-4)}` : ""}
              </span>
            </span>
          </div>
          {/* <button class="Documents-btn" onClick={handleOpenPDF}>
            <span class="folderContainer">
              <svg
                class="fileBack"
                width="146"
                height="113"
                viewBox="0 0 146 113"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z"
                  fill="url(#paint0_linear_117_4)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_117_4"
                    x1="0"
                    y1="0"
                    x2="72.93"
                    y2="95.4804"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#a040fd"></stop>
                    <stop offset="1" stop-color="#5f41f3"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <svg
                class="filePage"
                width="88"
                height="99"
                viewBox="0 0 88 99"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="88"
                  height="99"
                  fill="url(#paint0_linear_117_6)"
                ></rect>
                <defs>
                  <linearGradient
                    id="paint0_linear_117_6"
                    x1="0"
                    y1="0"
                    x2="81"
                    y2="160.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white"></stop>
                    <stop offset="1" stop-color="#686868"></stop>
                  </linearGradient>
                </defs>
              </svg>

              <svg
                class="fileFront"
                width="160"
                height="79"
                viewBox="0 0 160 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z"
                  fill="url(#paint0_linear_117_5)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_117_5"
                    x1="38.7619"
                    y1="8.71323"
                    x2="66.9106"
                    y2="82.8317"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#a040fd"></stop>
                    <stop offset="1" stop-color="#5251f2"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <p class="text">View Plan</p>
          </button> */}
        </div>
        <ul className="header-content-right">
          <ConnectWallet />
        </ul>
      </div>
    </header>
  );
}

export default Header;
