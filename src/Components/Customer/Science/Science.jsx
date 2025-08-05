import scienceImg from '../../../assets/science/science.png'
import { HiBadgeCheck } from "react-icons/hi";


const Science = () => {
    return (
        <div className='bg-[#6B2B00] py-16'>
            <div className='lg:container mx-auto px-5 md:px-10'>
                
                {/* ------------------science section ------------------------- */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div className='text-white flex items-center'>
                        <div>
                            <h2 className='text-5xl font-semibold'>Backed by Science</h2>
                            <h5 className='font- text-base pt-4 pb-8'>Our product is backed by clinical studies that show significant improvement in airflow and reduction in snoring for consistent users.</h5>
                            <ul className=' font-semibold text-base space-y-4'>
                                <li className='flex items-center gap-2'> <HiBadgeCheck size={20} className='text-[#f97316]' />Clinical study shows 80% improvement in nasal airflow</li>
                                <li className='flex items-center gap-2'> <HiBadgeCheck size={20} className='text-[#f97316]' /> Clinical study shows 80% improvement in nasal airflow</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img className='lg:h-[400px]' src={scienceImg} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Science;