"use client";
import NevbarBack from "../components/NevbarBack";
import Footer from "../components/Footer";
import { useState } from 'react';

export default function Page() {
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Validate inputs
        if (!fullname || !phone || !date || !time) {
            setError('กรุณากรอกข้อมูลให้ครบทุกช่อง');
            return;
        }

        // Validate name (only letters, including Thai and English)
        if (!/^[ก-๙A-Za-z\s]+$/.test(fullname)) {
            setError('กรุณากรอกชื่อ-นามสกุลด้วยตัวอักษรภาษาไทยหรือภาษาอังกฤษเท่านั้น');
            return;
        }

        // Validate phone number (only numbers)
        if (!/^\d+$/.test(phone)) {
            setError('กรุณากรอกเบอร์โทรศัพท์ด้วยตัวเลขเท่านั้น');
            return;
        }

        setError(''); // Clear error message

        // Save data to localStorage
        localStorage.setItem('fullname', fullname);
        localStorage.setItem('phone', phone);
        localStorage.setItem('date', date);
        localStorage.setItem('time', time);

        // Redirect to payment page without using Router
        window.location.href = '/payment'; // Update this to your payment page
    };

    return (
        <>
            <div className="bg-white">
                <NevbarBack />
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-black">
                            จองคิว
                        </h2>
                    </div>

                    <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-300 rounded-lg p-6 shadow-lg">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-1xl font-bold leading-9 tracking-tight text-gray-600">
                                        ชื่อ-นามสกุล
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        onChange={(e) => setFullname(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <p className="mt-1 text-gray-500 text-sm">
                                        * กรุณากรอกชื่อ-นามสกุลของคุณด้วยตัวอักษรภาษาไทยหรือภาษาอังกฤษเท่านั้น
                                    </p>
                                </div>

                                <div>
                                    <label htmlFor="number" className="block text-1xl font-medium leading-6 text-gray-900">
                                        เบอร์โทรศัพท์
                                    </label>
                                    <input
                                        id="number"
                                        type="tel"
                                        required
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <p className="mt-1 text-gray-500 text-sm">
                                        * กรุณากรอกเบอร์โทรศัพท์ของคุณด้วยตัวเลขเท่านั้น
                                    </p>
                                </div>

                                <div>
                                    <label htmlFor="date" className="block text-1xl font-medium leading-6 text-gray-900">
                                        ว/ด/ป
                                    </label>
                                    <input
                                        id="date"
                                        type="date"
                                        required
                                        onChange={(e) => setDate(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <p className="mt-1 text-gray-500 text-sm">
                                        * กรุณาเลือกวันที่ที่คุณต้องการจอง
                                    </p>
                                </div>

                                <div>
                                    <label htmlFor="time" className="block text-1xl font-medium leading-6 text-gray-900">
                                        เวลา
                                    </label>
                                    <select
                                        id="time"
                                        required
                                        onChange={(e) => setTime(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        {Array.from({ length: 12 }, (_, i) => {
                                            const hour = (i * 2) % 24;
                                            const formattedHour = hour < 10 ? `0${hour}` : hour;
                                            return (
                                                <option key={i} value={`${formattedHour}:00`}>
                                                    {formattedHour}:00
                                                </option>
                                            );
                                        })}
                                    </select>
                                    <p className="mt-1 text-gray-500 text-sm">
                                        * กรุณาเลือกเวลาที่คุณต้องการจอง
                                    </p>
                                </div>

                                {error && (
                                    <div className="text-red-500 text-center mt-2">
                                        {error}
                                    </div>
                                )}
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-1xl font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    คลิก! ชำระเงิน
                                </button>
                            </form>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}
