"use client";
import { useState, useEffect } from 'react';
import NevbarBack from "../components/NevbarBack";
import Footer from "../components/Footer";

const TAX_RATE = 0.07; // อัตราภาษี 7%

// ฟังก์ชันคำนวณราคาหลังหักส่วนลดและภาษี
const calculateFinalPrice = (price, discount = 0) => {
    const discountedPrice = price - (price * discount);
    const tax = discountedPrice * TAX_RATE;
    return {
        discountedPrice,
        tax,
        total: discountedPrice + tax
    };
};

export default function Page() {
    const [totalPrice, setTotalPrice] = useState(499); // ราคาตั้งต้น
    const [discountCode, setDiscountCode] = useState("");
    const [finalPriceData, setFinalPriceData] = useState(calculateFinalPrice(499)); // ราคาหลังหักส่วนลด
    const [error, setError] = useState(""); // ข้อความแจ้งเตือน
    const [useDiscount, setUseDiscount] = useState(false); // สถานะการใช้ส่วนลด

    // Booking info state
    const [bookingInfo, setBookingInfo] = useState({
        fullname: '',
        phone: '',
        date: '',
        time: ''
    });

    useEffect(() => {
        // Retrieve booking info from localStorage
        const fullname = localStorage.getItem('fullname') || '';
        const phone = localStorage.getItem('phone') || '';
        const date = localStorage.getItem('date') || '';
        const time = localStorage.getItem('time') || '';

        setBookingInfo({ fullname, phone, date, time });
    }, []);

    const handleCouponChange = (e) => {
        setDiscountCode(e.target.value);
    };

    const applyDiscount = () => {
        const validDiscountCodes = {
            "shabuji1234": 0.15,
            "shabuji5678": 0.15,
            "1234shabuji": 0.15,
        };

        const discount = validDiscountCodes[discountCode];

        if (useDiscount && discount) {
            const newPriceData = calculateFinalPrice(totalPrice, discount);
            setFinalPriceData(newPriceData);
            setError(""); // ล้างข้อความแจ้งเตือน
        } else {
            setError("รหัสคูปองไม่ถูกต้อง กรุณาลองอีกครั้ง");
            setFinalPriceData(calculateFinalPrice(totalPrice)); // ใช้ราคาตั้งต้น
        }
    };

    const toggleUseDiscount = () => {
        setUseDiscount(prev => !prev);
        // Reset discount code when toggling discount usage
        setDiscountCode("");
        setFinalPriceData(calculateFinalPrice(totalPrice)); // Reset to base price
    };

    return (
        <>
            <div className="bg-white">
                <NevbarBack />
                <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-black">
                    ชำระเงิน
                </h2>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-300 rounded-lg p-6 shadow-lg">
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="text-2xl font-bold leading-9 tracking-tight text-black">
                                ข้อมูลการจอง
                            </h2>
                            <p className="text-black">ชื่อ-นามสกุล: {bookingInfo.fullname}</p>
                            <p className="text-black">เบอร์โทรศัพท์: {bookingInfo.phone}</p>
                            <p className="text-black">วันที่จอง: {bookingInfo.date}</p>
                            <p className="text-black">เวลา: {bookingInfo.time}</p>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form action="#" method="POST" className="space-y-6">
                                <div>
                                    <h2 className="text-1xl font-bold leading-9 tracking-tight text-black">
                                        ราคา: ฿{totalPrice}
                                    </h2>

                                    <div>
                                        <h3 className="text-1xl font-bold leading-9 tracking-tight text-black">
                                            ใช้ส่วนลด:
                                        </h3>
                                        <button
                                            type="button"
                                            onClick={toggleUseDiscount}
                                            className={`mt-2 rounded-md px-4 py-1.5 text-white ${useDiscount ? 'bg-green-500' : 'bg-gray-500'}`}
                                        >
                                            {useDiscount ? 'ใช้ส่วนลดแล้ว' : 'ใช้ส่วนลด'}
                                        </button>
                                    </div>

                                    {useDiscount && (
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="coupon" className="text-1xl font-bold leading-9 tracking-tight text-black">
                                                    คูปองส่วนลด:
                                                </label>
                                            </div>

                                            <div className="mt-2">
                                                <input
                                                    id="coupon"
                                                    name="coupon"
                                                    type="text"
                                                    required
                                                    value={discountCode}
                                                    onChange={handleCouponChange}
                                                    className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={applyDiscount}
                                                    className="mt-2 rounded-md bg-blue-500 px-4 py-1.5 text-white font-semibold hover:bg-blue-600"
                                                >
                                                    ใช้คูปอง
                                                </button>
                                                {error && <p className="text-red-500">{error}</p>}
                                            </div>
                                        </div>
                                    )}

                                    <h2 className="text-1xl font-bold leading-9 tracking-tight text-black">
                                        ภาษี: ฿{finalPriceData.tax.toFixed(2)}
                                    </h2>

                                    <h2 className="text-1xl font-bold leading-9 tracking-tight text-black">
                                        ยอดชำระทั้งหมด: ฿{finalPriceData.total.toFixed(2)}
                                    </h2>
                                </div>

                                <div>
                                    <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-black">
                                        วิธีชำระเงิน
                                    </h2>
                                    <div>
                                        <input type="radio" id="option1" name="choice" value="option1" />
                                        <label htmlFor="option1" className="mt-1 text-1xl font-bold leading-9 tracking-tight text-black mx-4">โมบายแบงค์กิ้ง</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="option2" name="choice" value="option2" />
                                        <label htmlFor="option2" className="mt-1 text-1xl font-bold leading-9 tracking-tight text-black mx-4">บัตรเครดิต</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="option3" name="choice" value="option3" />
                                        <label htmlFor="option3" className="mt-1 text-1xl font-bold leading-9 tracking-tight text-black mx-4">QR code</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="mt-8 text-center text-1xl font-bold leading-9 tracking-tight text-red-600">
                        หากต้องการจองโต๊ะหรือจองคิว
                    </h2>
                    <h2 className="text-center text-1xl font-bold leading-9 tracking-tight text-red-600">
                        ลูกค้าต้องชำระเงินจำนวนเต็มเพื่อสงวนสิทธิ์หรือโต๊ะ
                    </h2>
                    <h2 className="text-center text-1xl font-bold leading-9 tracking-tight text-red-600">
                        หากไม่ชำระภายใน 20 นาที จะถือว่าการจองไม่สำเร็จ
                    </h2>
                </div>
                <div className="flex justify-center mt-20">
                    <a href="/bill"
                        className="flex justify-center rounded-md bg-orange-400 px-3 py-1.5 text-1xl font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        ชำระเงิน
                    </a>
                </div>
                <Footer />
                </div>
            </div>
        </>
    );
}
