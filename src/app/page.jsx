import Image from "next/image";
import Footer from "./components/Footer";
import Nevbar from "./components/Nevbar";

export default function Home() {
  return (
    <>
      <div as="nav" className="bg-white fullscreen">
        <Nevbar />
        <main>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Content */}
            <Image
              src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.15752-9/462348361_1271566654281761_6063916151914206361_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=or6ACC2rtWQQ7kNvgEcqXC7&_nc_zt=23&_nc_ht=scontent.fcnx4-1.fna&_nc_gid=A9P1C8LlolxK09R5DCk1P7C&oh=03_Q7cD1QHGc7-l-uqIkntoWDlBaE6KyVLFCjK3RVGb31xtpWBLzQ&oe=67323034"
              alt="ร้านชาบูจิ"
              width={1500}
              height={300}
            />
            <p className="text-center max-w-7xl px-4 py-10 sm:px-6 lg:px-8 text-3xl font-medium leading-6 text-orange-700 font-bold">
              ร้านชาบูจิ
            </p>
            <p className="text-center max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-900">
              เป็นร้านชาบูที่เน้นการให้บริการที่ครอบคลุมทุกสไตล์การทานชาบู ตั้งแต่ห้องวีไอพีสุดหรูสำหรับลูกค้ากลุ่มพิเศษ ไปจนถึงโต๊ะธรรมดาและ
            </p>
            <p className="text-center max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-900">
              โซนชาบูสายพานสุดสะดวก ลูกค้าสามารถเลือกสไตล์การรับประทานที่ตรงกับความต้องการของตนได้ ทำให้เหมาะกับการมาทานทั้งแบบกลุ่มครอบครัว เพื่อนฝูง หรือแบบเดี่ยว
            </p>

            <p className="mt-8 text-center text-xl max-w-7xl px-4 sm:px-6 lg:px-8 text-black">
              อัตราค่าบริการ &quot;ร้านชาบูจิ&quot;
            </p>
            <p className="text-center max-w-7xl px-4 sm:px-6 lg:px-8 text-black mt-4">
              ราคาสำหรับที่นั่งทั่วไป
            </p>
            <p className="text-center max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-500">
              โซนสายพาน หยิบไม่อั้นบุฟเฟต์ ราคา 499/ท่าน อร่อยไม่อั้นกว่า 160 รายการ
            </p>
            <p className="text-center max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-500">
              โซนนั่งทั่วไป สั่งไม่อั้น ราคา 499/ท่าน อร่อยไม่อั้นกว่า 160 รายการ
            </p>
            <p className="text-center max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-500">
              (*ราคายังไม่รวมภาษี 7%)
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/seat"
                className="rounded-md bg-orange-400 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                จองที่นั่งทั่วไป</a>
            </div>
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
