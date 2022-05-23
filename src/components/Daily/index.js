import React, { useState, useEffect } from "react";
import {
  Modal,
  Row,
  Col,
  Progress,
  Card,
  Button,
  Input,
  AutoComplete,
  List,
  InputNumber,
} from "antd";
import { Text, View } from "react-native";
import { Doughnut } from "react-chartjs-2";
import "antd/dist/antd.css";
import { Activity } from "../../util/data/Activity";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { getFoodData } from "../../util/handleFirebase";
import { getFoodDB } from "../../util/data/handleFirebaseCalApp"
import { Tabs } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "./index.css";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { actData } from "../../util/data/Activity";

// import { setData } from '../../util/handleFirebaseCalApp'
// import {foodMenu} from '../../util/data/food'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

ChartJS.register(ArcElement, Tooltip, Legend);

const Daily = () => {
  const [date, setDate] = useState(null);
  // อาหาร
  const [food, setFood] = React.useState(null); // food that user picked
  const [foodData, setFoodData] = React.useState([]); // food for option
  const [allfoodInfo, setAllfoodInfo] = React.useState([]); // food from firebase
  const [foodTable, setFoodTable] = React.useState([]); // food that show on table
  // progress bar
  const [percent, setPercent] = useState(0);
  const [successPercent, setSuccessPercent] = useState(2000);
  const [totalCal, setTotalCal] = useState(0);
  // activity
  const [activity, setActivity] = React.useState(null); // act that user picked
  const [activityData, setActivityData] = React.useState([]); // act for option
  const [allActivityInfo, setAllActivityInfo] = React.useState([]); // act from activity.js
  const [activityTable, setActivityTable] = React.useState([]); // act that show on table
  const [actForDel, setActForDel] = React.useState([]); // act that show on table
  const [foodForDel, setFoodForDel] = React.useState([]); // act that show on table

  React.useEffect(() => {
    // get all menu from firebase
    getFoodforDB();
    // date
    let today = new Date();
    let date =
      today.getDate() +
      " เดือน " +
      (today.getMonth() + 1) +
      " พ.ศ. " +
      (today.getFullYear() + 543);
    setDate(date);
    // get data from localstorage

    const allTotal = JSON.parse(localStorage.getItem("result"));

    if (allTotal) {
      setSuccessPercent(parseInt(allTotal));
    }
    // get data from activity.js
    // console.log(actData)
    setAllActivityInfo(actData);
    manageOptionForActivity(actData);
  }, []);

  const getFoodforDB = async () => {
    const data = await getFoodDB();
    // const data = foodMenu
    // const data = [
    //   {
    //     name: "ข้าว",
    //   },
    // ];
    console.log(data)
    // localStorage.setItem('firebase', JSON.stringify(data));
    setAllfoodInfo(data);
    const menu = [];
    data.map((e) => {
      const b = {
        value: e.name,
      };
      menu.push(b);
    });
    setFoodData(menu);
  };
  const getData = async (value) => {
    console.log(value);
    const data = await getData(value);
  };

  const onSearch = (e) => {
    if (e.keyCode == 13) {
      console.log("value", e.target.value);
      getData(e.target.value);
    }
    console.log(e);
  };
  const selectMenu = (val, option) => {
    console.log(option.value);
    // allfoodInfo
    const dataFood = allfoodInfo.find((food) => food.name === option.value);
    console.log("x", dataFood);
    setFood(dataFood);
  };

  // const onChange = (e) => {
  //   console.log("radio checked", e.target.value);
  //   setValue(e.target.value);
  //   const dataActivity = Activity.find((x) => x.id === e.target.value);
  //   console.log(dataActivity);
  //   setActivity(dataActivity);
  // };

  const options = foodData;
  const data = {
    labels: ["โปรตีน", "ไขมัน", "คาร์โบไฮเดรต", "ใยอาหาร", "คลอเรสเตอรอล"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          food?.protein,
          food?.fat,
          food?.carbohydrate,
          food?.fiber,
          food?.cholesterol,
        ],
        backgroundColor: [
          "#33658a",
          "#86bbd8",
          "#758e4f",
          "#f6ae2d",
          "#f26419",
        ],
        hoverOffset: 4,
        borderWidth: 1,
      },
    ],
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleToggle = () => {
    // setOpen(!isOpen);
  };
  const showModalDelAct = () => {
    setIsModalDelActVisible(true);
  };
  const showModalDelFood = () => {
    setIsModalDelFoodVisible(true);
  };

  const addFood = () => {
    const x = foodTable;
    x.push(food);
    console.log(x);
    setFoodTable(x);
    setIsModalVisible(false);
    console.log("cal", food.energy);
    onAdd(food.energy);
  };

  const removeFood = (foods) => {
    console.log("del", foods.name);
    const y = foodTable.filter((el) => el.name !== foods.name);
    console.log("removeFood", y);
    setFoodTable(y);
    onDecline(foods.energy);
  };

  const onAdd = (energy) => {
    let foodNum = parseInt(energy);
    const newTotalcal = totalCal + foodNum;
    console.log("newTotalcal: ", newTotalcal);
    setTotalCal(newTotalcal);
    let newPercent = (newTotalcal / successPercent) * 100;
    console.log(newPercent);
    if (newPercent > 100) {
      newPercent = 100;
      setTotalCal(successPercent);
    }
    setPercent(newPercent);
  };

  const onDecline = (energy) => {
    let foodNum = parseInt(energy);
    console.log({foodNum})
    const newTotalcal = totalCal - foodNum;
    console.log("newTotalcal: ", newTotalcal);
    setTotalCal(newTotalcal);
    let newPercent = (newTotalcal / successPercent) * 100;
    console.log(newPercent);
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  };

  const manageOptionForActivity = (act) => {
    const actArr = [];
    act.map((e) => {
      const b = {
        value: e.Name,
      };
      actArr.push(b);
    });
    console.log(actArr);
    setActivityData(actArr);
  };

  const selectActivity = (val, option) => {
    console.log(option.value);
    // allfoodInfo
    const dataAct = allActivityInfo.find((act) => act.Name === option.value);
    console.log("dataAct", dataAct);
    setActivity(dataAct);
    addActivity(dataAct);
    onAddAct(dataAct.Energy);
  };

  const addActivity = (value) => {
    const y = activityTable;
    y.push(value);
    console.log("activity", y);
    setActivityTable(y);
  };
  const removeActivity = (act) => {
    console.log("del", act.Name);
    const removeActivity = activityTable.filter((el) => el.Name !== act.Name);
    console.log("removeActivity", removeActivity);
    setActivityTable(removeActivity);
    onDeclineAct(act.Energy);
  };

  const onAddAct = (energy) => {
    let actNum = parseInt(energy);
    const newTotalcal = totalCal - actNum;
    console.log("newTotalcal: ", newTotalcal);
    setTotalCal(newTotalcal);
    let newPercent = (newTotalcal / successPercent) * 100;
    console.log(newPercent);
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  };

  const onDeclineAct = (energy) => {
    let actNum = parseInt(energy);
    console.log({actNum})
    const newTotalcal = totalCal + actNum;
    console.log("newTotalcal: ", newTotalcal);
    setTotalCal(newTotalcal);
    let newPercent = (newTotalcal / successPercent) * 100;
    console.log(newPercent);
    // if (newPercent < 0) {
    //   newPercent = 0;
    // }
    setPercent(newPercent);
  };
  const handleOkDelAct = () => {
    setIsModalDelActVisible(false);
  };
  const handleCancelDelAct = (act) => {
    setIsModalDelActVisible(false);
  };

  const handleOkDelFood = () => {
    setIsModalDelFoodVisible(false);
    removeFood(food);
  };
  const handleCancelDelFood = () => {
    setIsModalDelFoodVisible(false);
  };

  const suiBtn =()=>{
    // setData()
  }

  return (
    
    <div >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "600",
          marginTop: "120px",
          textAlign: "center",
        }}
      >
        Daily Calories
      </h1>
      <Progress
        percent={percent}
        strokeColor={"#01bf71"}
        strokeWidth={27}
        // format={() => "0 / 2000 cal"}
        format={(percent) => (
          <h2>
            {totalCal}/{successPercent} cal
          </h2>
        )}
        style={{
          width: 600,
          margin: "10px auto",
          justifyContent: "center",
          display: "table",
        }}
      />
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ marginLeft: "2rem", padding: "0 14rem" ,marginRight:"0"}}
      >
        <Col className="gutter-row" span={12} style={{ margin: "0 auto", justify: "center",paddingLeft: "60px" }}>
          <Tabs type="card" style={{ marginTop: "20px" }}>
            {/* อาหาร */}
            <TabPane
              tab={
                <div>
                  <h3 style={{ fontFamily: "Prompt", margin: "0 5px 0 5px" }}>
                    อาหาร
                  </h3>
                </div>
              }
              key="1"
            >
              <Card
                style={{
                  width: "500px",
                  height: "560px",
                  margin: "0 auto 100px 0",
                  justifyContent: "center",
                  borderRadius: "0 10px 10px 10px",
                  backgroundColor: "#bddaff",
                }}
              >
                <AutoComplete
                  options={options}
                  onSelect={(val, option) => selectMenu(val, option)}
                  filterOption={(inputValue, option) =>
                    option.value
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  }
                  style={{
                    width: "435px",
                    display: "table",
                    margin: "20px auto",
                    justifyContent: "center",
                  }}
                >
                  <Input.Search
                    size="large"
                    placeholder="พิมพ์เพื่อค้นหาเมนูอาหาร"
                    style={{
                      width: 435,
                      borderRadiusBase: "10px",
                    }}
                  />
                </AutoComplete>
                {food ? (
                  <div>
                    <Card
                      style={{
                        borderRadius: "5px",
                        width: "436px",
                        marginLeft: "5px",
                        
                      }}
                    >
                      <Text style={{ fontSize: "18px" }}>{food.name}</Text>
                      <Button
                        style={{
                          float: "right",
                          borderColor: "#bddaff",
                        }}
                        type="ghost"
                        onClick={showModal}
                      >
                        เพิ่ม
                      </Button>
                      <Modal
                        title="รายละเอียด"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        footer={[
                          // <Button key="back">ย้อนกลับ</Button>,
                          <Button key="submit" type="primary" onClick={addFood}>
                            เพิ่มลงตาราง
                          </Button>,
                        ]}
                        width={915}
                        style={{fontFamily: "Prompt"}}>
                        {food ? (
                          <div >
                            <Row wrap={true} style={{ background: "#fff" }}>
                    <Col
                      // flex="1 0 50%"
                      // className="columnFlex"
                      // style={{ background: "transparent" }}
                      span={12}
                    >
                                <div style={{ fontSize: "20px",}}>
                                  <h2 style={{ fontWeight: 600 }}>สารอาหาร</h2>
                                  <h3 style={{ marginLeft: "15px" }}>
                                    โปรตีน: {food?.protein} กรัม
                                  </h3>
                                  <h3 style={{ marginLeft: "15px" }}>
                                    ไขมัน: {food?.fat} กรัม
                                  </h3>
                                  <h3 style={{ marginLeft: "15px" }}>
                                    คาร์โบไฮเดต: {food?.carbohydrate} กรัม
                                  </h3>
                                  <h3 style={{ marginLeft: "15px" }}>
                                    ใยอาหาร: {food?.fiber} กรัม
                                  </h3>
                                  <h3 style={{ marginLeft: "15px" }}>
                                    คอเลสเตอรอล: {food?.cholesterol} กรัม
                                  </h3>
                                </div>
                              </Col>
                              <Col
                      // flex="1 0 50%"
                      // className="columnFlex"
                      // style={{ background: "transparent" }}
                      span={12}
                    >
                              <h1
                                  style={{
                                    fontSize: "30px",
                                    fontWeight: "600",
                                  }}
                                >
                                  {food.name}
                                </h1>
                                <h3
                                  style={{
                                    fontSize: "25px",
                                    fontWeight: "500",
                                    marginLeft: "30px",
                                  }}
                                >
                                  {food.energy} cal
                                </h3>
                                <Doughnut
                                  data={data}
                                  style={{
                                    marginBottom: "50px",
                                  }}
                                />
                              </Col>
                            </Row>
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </Modal>
                    </Card>
                  </div>
                ) : (
                  <div></div>
                )}
              </Card>
            </TabPane>
            {/* กิจกรรม */}
            <TabPane
              tab={
                <div>
                  <h3 style={{ fontFamily: "Prompt", margin: "0 5px 0 5px" }}>
                    กิจกรรม
                  </h3>
                </div>
              }
              key="2"
            >
              <Card
                style={{
                  width: "500px",
                  height: "560px",
                  margin: "0 auto 40px 0",
                  justifyContent: "center",
                  borderRadius: "0 10px 10px 10px",
                  backgroundColor: "#bddaff",
                }}
              >
                <AutoComplete
                  options={activityData}
                  onSelect={(val, option) => selectActivity(val, option)}
                  filterOption={(inputValue, option) =>
                    option.value
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  }
                  style={{
                    width: "435px",
                    display: "table",
                    margin: "20px auto",
                    justifyContent: "center",
                  }}
                >
                  <Input.Search
                    size="large"
                    placeholder="พิมพ์เพื่อค้นหาข้อมูลกิจกรรม"
                    style={{
                      width: 435,
                      borderRadiusBase: "10px",
                    }}
                  />
                </AutoComplete>
                {activity ? (
                  <div>
                    <Card
                      style={{
                        borderRadius: "5px",
                        width: "400px",
                        marginLeft: "22px",
                      }}
                    >
                      <Text style={{ fontSize: "18px" }}>{activity.Name}</Text>
                      <Text style={{ fontSize: "18px", float: "right" }}>
                        {activity.Energy} cal
                      </Text>
                      {/* <Button
                        style={{
                          float: "right",
                        }}
                        // type="ghost"
                        onClick={()=> addActivity(activity)}
                      >
                        เพิ่ม
                      </Button> */}
                    </Card>
                  </div>
                ) : (
                  <div style={{ height: "auto" }}></div>
                )}
              </Card>
            </TabPane>
          </Tabs>
          {/* </div> */}
        </Col>
        <Col className="gutter-row" span={12} >
          <Card
            style={{
              width: "560px",
              height: "600px",
              margin: "45px 50px 0 65px",
              justifyContent: "center",
              borderRadius: "10px",
              backgroundColor: "#bddaff",
            }}
          >
            <View>
              <Text
                style={{
                  textAlign: "right",
                  fontSize: "15px",
                  fontFamily: "Prompt",
                }}
              >
                {"วันที่"} {date}
              </Text>
            </View>
            <Text
              style={{
                paddingLeft: "10px",
                fontSize: "20px",
                fontWeight: "400",
                fontFamily: "Prompt",
              }}
            >
              ตารางอาหาร
            </Text>
            <Text
              style={{
                float: "right",
                marginTop: "5px",
              }}
            >
              แคลอรี่
            </Text>

            <Card
              style={{
                width: 450,
                height: 300,
                backgroundColor: "#bddaff",
                borderStyle: "none",
              }}
            >
              <List
                dataSource={foodTable}
                renderItem={(item) => (
                  <List.Item>
                    <Button
                      type="primary"
                      shape="round"
                      onClick={()=>{
                        showModalDelFood()
                        setFoodForDel(item)
                        console.log('ok', item)}}
                    >
                      <DeleteOutlined />
                      {/* Delete */}
                    </Button>
                    <Modal
                    visible={isModalDelFoodVisible}
                    onOk={() => {
                      removeFood(foodForDel)
                      console.log('ok', foodForDel)
                      setIsModalDelFoodVisible(false);
                    }}
                    onCancel={handleCancelDelFood}>ต้องการลบรายการนี้ใช่หรือไม่</Modal>
                    <Text>{item.name}</Text>
                    <Text>{item.energy}</Text>
                  </List.Item>
                )}
              />
            </Card>

            <Text
              style={{
                paddingLeft: "10px",
                fontSize: "20px",
                fontWeight: "400",
                fontFamily: "Prompt",
              }}
            >
              ตารางกิจกรรม
            </Text>
            <Text
              style={{
                float: "right",
                marginTop: "5px",
              }}
            >
              แคลอรี่
            </Text>
            <Card
              style={{
                width: 450,
                height: 100,
                backgroundColor: "#bddaff",
                borderStyle: "none",
              }}
            >
              <List
                dataSource={activityTable}
                renderItem={(item) => (
                  <List.Item>
                    <Button
                      type="primary"
                      shape="round"
                      onClick={() => {
                        showModalDelAct()
                        setActForDel(item)
                      }}
                    >
                      <DeleteOutlined />
                      {/* Delete */}
                    </Button>
                    <Modal
                    visible={isModalDelActVisible}
                    onOk={()=>{
                      removeActivity(actForDel)
                      setIsModalDelActVisible(false);
                    }}
                    onCancel={handleCancelDelAct}>ต้องการลบรายการนี้ใช่หรือไม่</Modal>
                    <Text style={{ fontSize: "16px"}}>{item.Name}</Text>
                    <Text style={{ fontSize: "16px"}}>{item.Energy}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Daily;
