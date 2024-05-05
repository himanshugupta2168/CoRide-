import { useState } from "react"
import DatePicker from "tailwind-datepicker-react"


const Calender = () => {
	const [show, setShow] = useState(false)
	const date = new Date();
	date.setDate(date.getDate()-1);
	// console.log(date);

	const options= {
		autoHide: true,
		todayBtn: true,
		clearBtn: true,
		minDate: date,
		// maxDate: date,
		inputDateFormatProp: {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
		},
		theme: {
			background: "dark:bg-white",
			todayBtn: "",
			clearBtn: "bg-red-500 dark:bg-red-500 border-none hover:dark:bg-red-600 hover:bg-red-600",
			icons: "bg-white dark:bg-white text-black dark:text-black hover:bg-slate-200 hover:dark:bg-slate-200",
			text: "text-black dark:text-white hover:bg-slate-200 hover:dark:bg-slate-200",
			disabledText: "bg-white text-black dark:text-black hover:bg-slate-300 hover:dark:bg-slate-300 text-slate-200 dark:text-slate-200",
			input: "bg-white text-black dark:bg-white dark:text-black border-none hover:bg-slate-100",
			inputIcon: "text-black dark:text-black",
			selected: "bg-blue-400 dark:bg-blue-400",
		},
		// theme: {
		// 	background: "dark:text-red-500 text-red-500",
		// 	todayBtn: "dark:text-red-500 text-red-500",
		// 	clearBtn: "dark:text-red-500 text-red-500",
		// 	icons: "dark:text-red-500 text-red-500",
		// 	text: "dark:text-red-500 text-red-600",
		// 	disabledText: "dark:text-red-500 text-red-500",
		// 	input: "dark:text-red-500 text-red-500",
		// 	inputIcon: "dark:text-red-500 text-red-500",
		// 	selected: "dark:text-red-500 text-red-500",
		// },
	}
	return (
			<div className="">
				<div className="py-2 lg:mx-2">
					<DatePicker show={show} setShow={(state) => setShow(state)} options={options}  />
				</div>
			</div>
	)
}

export default Calender