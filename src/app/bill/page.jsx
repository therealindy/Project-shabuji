"use client";
import { useEffect, useState } from "react";
import NevbarBack from "../components/NevbarBack";
import Footer from "../components/Footer";

export default function Page() {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [queueNumber, setQueueNumber] = useState(1); // Default queue number

  // Retrieve booking data from localStorage on load
  useEffect(() => {
    const storedFullname = localStorage.getItem("fullname");
    const storedPhone = localStorage.getItem("phone");
    const storedDate = localStorage.getItem("date");
    const storedTime = localStorage.getItem("time");
    const storedQueueNumber = localStorage.getItem("queueNumber");

    if (storedFullname) setFullname(storedFullname);
    if (storedPhone) setPhone(storedPhone);
    if (storedDate) setDate(storedDate);
    if (storedTime) setTime(storedTime);

    // Check if a queue number is stored
    if (storedQueueNumber) {
      setQueueNumber(parseInt(storedQueueNumber, 10)); // Use stored value
    }
  }, []);

  return (
    <>
      <div className="bg-white fullscreen min-h-screen">
        <NevbarBack />
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-300 rounded-lg p-6 shadow-lg">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="text-center text-xl font-bold leading-9 tracking-tight text-green-500">
                ชำระเงินสำเร็จ
              </h2>
              <h2 className="text-black text-center">#Q{queueNumber}</h2>
              <h2 className=" text-2xl font-bold leading-9 tracking-tight text-gray-600">
                ข้อมูล
              </h2>
              <h2 className="text-black mt-4">ชื่อผู้จอง: {fullname}</h2>
              <h2 className="text-black">เบอร์โทรศัพท์: {phone}</h2>
              <h2 className="text-black">วันที่จอง: {date}</h2>
              <h2 className="text-black">เวลาที่จอง: {time}</h2>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-20 text-center text-1xl font-bold leading-9 tracking-tight text-red-500 ">
            หมายเหตุ: *โปรดบันทึกหน้าจอ* หากท่านมาถึงร้าน โปรดแจ้งชื่อของท่านและโชว์สลิปให้แก่พนักงานของเราเพื่อทำให้สะดวกต่อการหาโต๊ะของท่าน
          </h2>
        </div>
        
        <Footer />
      </div>
      </div>
    </>
  );
}
