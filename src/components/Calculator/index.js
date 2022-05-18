
import React, { useState } from "react";
// import * as React from 'react';
import { Form, Input, Button, Radio, Card, Select } from "antd";
import "antd/dist/antd.css";
import {Container} from "./CalculatorElements"
const Calculator = () => {
const [result, setResult] = useState(0);

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };
  // const [form] = Form.useForm();
  // const [formLayout, setFormLayout] = useState("horizontal");

  // const onFormLayoutChange = ({ layout }) => {
  //   setFormLayout(layout);
  // };

  // const useLocalStorage = (storageKey, fallbackState) => {
  //   const [value, setValue] = React.useState(
  //     JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
  //   );
  //   React.useState(() => {
  //     localStorage.setItem(storageKey, JSON.stringify(value));
  //   }, [value, storageKey]);
  //   return [value, setValue];
  // };

  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    // setActivity(e.activity.value);
    setValue(e.target.value)
  };
  // const [isOpen, setOpen] = useLocalStorage("is-open", false);
  const handleToggle = () => {
    // setOpen(!isOpen);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    var bmr = 0;
    var level = 0;
    var result = 0;
    if (values.layout === "male") {
      bmr = 66 + 13.7 * values.weight + 5 * values.height - 6.8 * values.age;
    } else if (values.layout === "female") {
      bmr = 665 + 9.6 * values.weight + 1.8 * values.height - 4.7 * values.age;
    }
    console.log("level", level);
    if (value === 1) {
      level = bmr * 1.2;
    } else if (value === 2) {
      level = bmr * 1.375;
    } else if (value === 3) {
      level = bmr * 1.55;
    } else if (value === 4) {
      level = bmr * 1.725;
    } else if (value === 5) {
      level = bmr * 1.9;
    }
    console.log("level", level);

    if (values.target == "lose") {
      result = level * 0.8;
    } else if (values.target == "gain") {
      result = level * 1.2;
    } else if (values.target == "stable") {
      result = level;
    }
    console.log("result", result.toFixed(2));
    setResult(result.toFixed(2));
    window.localStorage.setItem('result', JSON.stringify(result));
  };

  //   console.log("data", data);
  // };

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  return (
    <Container
    style={{
        display: "table",
        margin: "0 auto",
        justifyContent: "center",
        fontFamily: "Prompt, sans-serif"
        
    }}
    >
    <Form
        name="basic"
        // labelCol={{
        //   span: 12,
        // }}
        wrapperCol={{
        span: 7,
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <h1
        style={{
            fontSize: "48px",
            fontWeight: "600",
            marginTop: "120px",
            textAlign: "center",
            fontFamily: "Roboto, sans-serif"
            
        }}
        >
        Calories Calculator
        </h1>
        <Form.Item
        label="เพศ"
        name="layout"
        style={{ justifyContent: "center" }}
        rules={[
        {
        required: true,
        message: "Please input your gender!",
        },
        ]}
        >
        <Radio.Group name="radiogroup">
            <Radio value="male">ชาย</Radio>
            <Radio value="female">หญิง</Radio>
        </Radio.Group>
        </Form.Item>

        <Form.Item
        label="น้ำหนัก"
        name="weight"
        style={{ justifyContent: "center" }}
        rules={[
            {
            required: true,
            message: "Please input your weight!",
            },
        ]}
        >
        <Input placeholder="กิโลกรัม" style={{ borderRadius: "7px" }} />
        </Form.Item>

        <Form.Item
        label="ส่วนสูง"
        name="height"
        style={{ justifyContent: "center" }}
        rules={[
            {
            required: true,
            message: "Please input your height!",
            },
        ]}
        >
        <Input placeholder="เซนติเมตร" style={{ borderRadius: "7px" }} />
        </Form.Item>

        <Form.Item
        label="อายุ"
        name="age"
        style={{ justifyContent: "center"
                
                }}
        rules={[
            {
            required: true,
            message: "Please input your age!",
            },
        ]}
        >
        <Input placeholder="ปี" style={{ borderRadius: "7px" }} />
        </Form.Item>

        <Card
        style={{
            width: "600px",
            justifyContent: "center",
            border: "0.5px solid#000",
            borderRadius: "10px",
            backgroundColor: "#bddaff",
        }}
        >
        <p
            style={{ textAlign: "center", fontSize: "24px", fontWeight: "600" }}
        >
            โปรดใส่ข้อมูลเพิ่มเติม
        </p>
        <Form.Item
            name="target"
            label="เป้าหมายของคุณคือ"
            style={{ justifyContent: "center" }}
            rules={[
            {
                required: true,
                message: "Please choose your target!",
            },
            ]}
        >
            <Select
            placeholder="เลือกเป้าหมาย"
              // onChange={onGenderChange}
            allowClear
            >
            <Select.Option value="lose">ลดน้ำหนัก</Select.Option>
            <Select.Option value="stable">คงที่น้ำหนัก</Select.Option>
            <Select.Option value="gain">เพิ่มน้ำหนัก</Select.Option>
            </Select>
        </Form.Item>

        <p
            style={{ textAlign: "center", fontSize: "17px", fontWeight: "600" }}
        >
            คุณทำกิจกรรมต่อวันมากน้อยแค่ไหน
        </p>
          {/* <Form.Item name="targetA" valuePropName="checked"> */}
          {/* <Radio.Group onChange={onChange} value={activity} name="activity"> */}
        <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>
            น้อยมาก - ทำงานออฟฟิต นั่งหน้าจอคอม แทบไม่ได้ออกกำลังกาย
            </Radio>
            <Radio value={2}>
            น้อย - ออกกำลังกายแบบเบาๆ 1-3 ชั่วโมง / สัปดาห์
            </Radio>
            <Radio value={3}>ปานกลาง - ออกกำลังกาย 3-5 ชั่วโมงต่อสัปดาห์</Radio>
            <Radio value={4}>
            สูง - ออกกำลังกายอย่างหนักวันละ 1 ชั่วโมงทุกวัน
            </Radio>
            <Radio value={5}>
            สูงมาก - ออกกำลังกายอย่างหนักวันละ 2 ชั่วโมงเป็นอย่างต่ำทุกวัน
              {/* {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null} */}
            </Radio>
        </Radio.Group>
          {/* </Form.Item> */}
        </Card>

        <Form.Item
        style={{
            marginTop: "20px",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
        }}
          // wrapperCol={{
          //   offset: 13,
          //   span: 16,
          // }}
        >
        <Button
            type="primary"
            htmlType="submit"
            style={{ borderRadius: "7px", background: "#01bf71" }}
            onClick={handleToggle}
        >
            คำนวณ
        </Button>
        </Form.Item>
    </Form>
    <div
        style={{
        display: "table",
        margin: "0 auto",
        justifyContent: "center",
        textAlign: "center",
        }}
    >
        <Card
        title="แคลอรี่ที่แนะนำต่อวัน"
        bordered={false}
        style={{
            borderRadius: "10px",
            border: "0.5px solid#000",
            width: "270px",
            marginBottom: "20px",
        }}
        >
        <p style={{ fontSize: "35px", fontWeight: "600" }}>{result} Cal</p>
        </Card>
    </div>
    </Container>
)
}

export default Calculator
