import React, { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Senin = React.lazy(() => import("../components/Mapel/Senin"))
const Selasa = React.lazy(() => import("../components/Mapel/Selasa"))
const Rabu = React.lazy(() => import("../components/Mapel/Rabu"))
const Kamis = React.lazy(() => import("../components/Mapel/Kamis"))
const Jumat = React.lazy(() => import("../components/Mapel/Jumat"))

const Schedule = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const [selectedDay, setSelectedDay] = useState(new Date().getDay())

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    let piketGroup = []

    // Menentukan kelompok piket berdasarkan hari
    piketGroup = [
        ["sebali", "dita", "marco", "jason", "archie"],
        ["revand", "maria", "devin", "octa", "leon"],
        ["vanessa", "shasya", "izabel", "dwayane", "kenzie", "jonathan"],
        ["made", "wayane", "celine", "hyunwoo", "Agung", "tasya"],
        ["gerald", "cia", "naomi", "deya", "adryan", "ode"],
    ]

    const dayComponents = [
        null, // Kosongkan indeks 0
        Senin,
        Selasa,
        Rabu,
        Kamis,
        Jumat,
    ]

    // Menampilkan komponen berdasarkan hari yang dipilih
    const TodayComponent = dayComponents[selectedDay]

    // Menampilkan nama-nama piket sesuai dengan hari yang dipilih
    const currentPiketNames = piketGroup[selectedDay - 1]

    return (
        <>
            {/* Dropdown untuk memilih hari */}
            <div className="flex justify-center mt-8">
                <select
                    className="p-2 bg-gray-800 text-white rounded-md border border-gray-600"
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(Number(e.target.value))}>
                    {daysOfWeek.map((day, index) => (
                        <option key={index} value={index}>
                            {day}
                        </option>
                    ))}
                </select>
            </div>

            {/* Jadwal Mapel */}
            <div className="lg:flex lg:justify-center lg:gap-32 lg:mb-10 lg:mt-16 ">
                <div className="text-white flex flex-col justify-center items-center mt-8 md:mt-3 overflow-y-hidden">
                    <div className="text-2xl font-medium mb-5" data-aos="fade-up" data-aos-duration="500">
                        {daysOfWeek[selectedDay]}
                    </div>
                    <div data-aos="fade-up" data-aos-duration="400">
                        {TodayComponent ? (
                            <React.Suspense fallback={<p>Loading...</p>}>
                                <TodayComponent />
                            </React.Suspense>
                        ) : (
                            <p className="opacity-50">Tidak Ada Jadwal Hari Ini</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Jadwal Piket */}
            <div className="text-white flex flex-col justify-center items-center mt-8 lg:mt-0 lg:mb-[10rem] mb-10 overflow-y-hidden">
                <div
                    className="text-2xl font-medium mb-5 text-center"
                    data-aos="fade-up"
                    data-aos-duration="500">
                    Piket
                </div>
                {currentPiketNames && currentPiketNames.length > 0 ? (
                    currentPiketNames.map((piketName, index) => (
                        <div
                            key={index}
                            className={` border-t-2 border-white flex justify-center py-[0.50rem] w-72 px-3 ${
                                index === currentPiketNames.length - 1 ? "border-b-2" : ""
                            }`}
                            data-aos="fade-up"
                            data-aos-duration={600 + index * 100}>
                            <div className="text-base font-medium">{piketName}</div>
                        </div>
                    ))
                ) : (
                    <p className="opacity-50">Tidak Ada Jadwal Hari Ini</p>
                )}
            </div>
        </>
    )
}

export default Schedule
