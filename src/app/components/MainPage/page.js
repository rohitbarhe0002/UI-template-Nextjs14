import React from "react";
import Chart from "../Chart/chartbar";


export default function page() {
  return (
    <div>
      <header className="header">
        <div class="flex justify-between flex-wrap">
          <div className="flex relative">
            <div className="text-2xl font-bold text-1C1919">12.03.2021</div>
            <div className="text-2xl font-bold text-1C1919 ms-2">Monday</div>
            <div className="text-2xl font-bold text-1C1919 ms-2  version absolute">
              Beta version
            </div>
          </div>
          <div>
            <div className="flex  justify-items-center items-center  ">
              <button className=" com_button m-2 btn_disable">
                Contact Back
              </button>
              <button className=" com_button m-2 btn_disable">
                Universal Account
              </button>

              <button className=" com_button  logout_btn">Log out</button>
            </div>
          </div>
        </div>
      </header>
      <div>
        <h4>
          Trial period remaning : <span style={{ color: "red" }}>12 days </span>
        </h4>
      </div>
      <div className="flex relative pt-[3rem] flex-wrap">
        <div className="text-1xl font-bold text-1C1919">
          <h4>
            <span style={{ color: "red" }}>Recommendation </span> start from
            Creating Financial model
          </h4>
        </div>
        <div className="text-1xl font-bold text-1C1919 ms-[0rem] lg:ms-[3rem]">
          <h4>
            <span style={{ color: "red" }}>Recommendation </span> start from
            Creating Financial model
          </h4>
        </div>
      </div>
      <div className="flex  justify-items-center items-center mt-[2rem] mb-[2rem] ">
        <button className=" com_button m-2 btn_disable disable">
          Connect Bank
        </button>
        <button className=" com_button m-2 btn_disable">
          Universal Account
        </button>
      </div>

      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
        <div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="item_box">
              <img
                src="Users.png"
                alt="Profile Icon"
                className="h-5 w-5 mr-2 "
              />
              <h4 className="font-bold	">start from Creating Financial model</h4>
            </div>
            <div className="item_box">
              <img
                src="Users.png"
                alt="Profile Icon"
                className="h-5 w-5 mr-2 "
              />

              <h4 className="font-bold	">
                See the future of your business finances{" "}
              </h4>
            </div>
          </div>
        </div>
        <div className="right_items_wrapper">
          <div className="flex right_item_container text-center p-3 gap-2">
            <div className="right_item_1">
              <h4 className="font-bold	">
                See the future of your business finances{" "}
              </h4>
              <h3 className="font-bold">10000</h3>
            </div>
            <div className="right_item_1">
              <h4 className="font-bold	">
                See the future of your business finances{" "}
              </h4>
            </div>
            <div className="right_item_1">
              <h4 className="font-bold	">
                See the future of your business finances{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* chart ----------------> */}
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 pb-[3rem]">
        <div>
        <Chart/>
        </div>
        <div className="item_box">
          <div className="flex  justify-between text-center payment_detail_header">
            <h4>Regular Monthly payments </h4>
            <h4>0</h4>
          </div>
          <div className="flex  justify-between text-center item_list ">
            <div className="text-left">
              <h4 class="font-medium	">Amazon</h4>
              <h6>Next payment</h6>
            </div>
            <div className="text-right">
              <h4 className="item_price">99</h4>
              <h6>15000000</h6>
            </div>
          </div>
          <div className="flex  justify-between text-center item_list ">
            <div className="text-left">
              <h4>Amazon</h4>
              <h6>Next payment</h6>
            </div>
            <div className="text-right">
              <h4 className="item_price">99</h4>
              <h6>15000000</h6>
            </div>
          </div>
            <div className="flex  justify-between text-center item_list ">
            <div className="text-left">
              <h4>Amazon</h4>
              <h6>Next payment</h6>
            </div>
            <div className="text-right">
              <h4 className="item_price">99</h4>
              <h6>15000000</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
