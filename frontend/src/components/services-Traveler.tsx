import { Link } from 'react-router-dom';

interface ServicesData{
    icon: string;
    title: string;
    desc: string;
}

export default function ServicesTraveler() {

    const services = [
        {
            icon : 'ri-hotel-line', 
            title : 'Hotel Service', 
            desc : 'The phrasal sequence of the is now so that many campaign and benefit',
        },
        {
            icon : 'ri-flight-takeoff-line', 
            title : 'Flight Finder', 
            desc : 'The phrasal sequence of the is now so that many campaign and benefit',
        },
        {
            icon : 'ri-passport-line', 
            title : 'Visa Processing', 
            desc : 'The phrasal sequence of the is now so that many campaign and benefit',
        }
    ];

  return (
    <>
        {services.map((item:ServicesData, index:number)=>(
            <div className="text-center px-6" key={index}>
                <div className="relative text-transparent">
                    <div className="size-16 bg-primary/5 text-primary rounded-xl text-3xl flex align-middle justify-center items-center mx-auto shadow-xs dark:shadow-gray-800">
                        <i className={item.icon}></i>
                    </div>
                </div>

                <div className="content mt-7">
                    <h5 className="h5 text-lg font-semibold">{item.title}</h5>
                    <p className="text-slate-400 mt-3">{item.desc}</p>
                    
                    <div className="mt-5">
                        <Link to="/" className="font-medium hover:text-primary">Explore Now <i className="ri-arrow-right-s-line"></i></Link>
                    </div>
                </div>
            </div>
        ))}
    </>
  )
}
