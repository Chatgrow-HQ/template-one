import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiCalendar, FiMapPin, FiUsers } from "react-icons/fi";

export default function Form() {
    const navigate = useNavigate();

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate("/contact-us");
    };

    return (
        <form onSubmit={submit} className="p-5 md:p-6 bg-white dark:bg-slate-900 rounded-xl shadow-xl dark:shadow-gray-700">
            <div className="flex flex-col lg:flex-row lg:items-end gap-4">
                <div className="flex-1">
                    <label htmlFor="destination" className="form-label font-medium text-slate-900 dark:text-white">Where do you want to go?</label>
                    <div className="relative mt-2">
                        <FiMapPin className="size-4.5 absolute top-2.5 inset-s-3 text-primary" />
                        <input id="destination" name="destination" className="w-full py-2 px-3 ps-10 h-11 bg-transparent rounded-md outline-none border border-gray-100 dark:border-gray-800" placeholder="e.g. Italy, Bali, somewhere warm…" />
                    </div>
                </div>
                <div className="lg:w-52">
                    <label htmlFor="month" className="form-label font-medium text-slate-900 dark:text-white">When?</label>
                    <div className="relative mt-2">
                        <FiCalendar className="size-4.5 absolute top-3 inset-s-3 text-primary" />
                        <select id="month" className="w-full py-2 px-3 ps-10 h-11 bg-transparent rounded-md outline-none border border-gray-100 dark:border-gray-800">
                            <option>I’m flexible</option><option>Within 3 months</option><option>3–6 months</option><option>6+ months</option>
                        </select>
                    </div>
                </div>
                <div className="lg:w-48">
                    <label htmlFor="travellers" className="form-label font-medium text-slate-900 dark:text-white">Travellers</label>
                    <div className="relative mt-2">
                        <FiUsers className="size-4.5 absolute top-3 inset-s-3 text-primary" />
                        <select id="travellers" className="w-full py-2 px-3 ps-10 h-11 bg-transparent rounded-md outline-none border border-gray-100 dark:border-gray-800">
                            <option>2 travellers</option><option>Solo</option><option>Family</option><option>Group</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="h-11 py-2 px-6 inline-flex items-center justify-center bg-primary text-white rounded-md font-medium whitespace-nowrap">Start planning <FiArrowRight className="ms-2" /></button>
            </div>
            <p className="text-xs text-slate-400 mt-3">Free initial consultation · No booking obligation</p>
        </form>
    );
}
