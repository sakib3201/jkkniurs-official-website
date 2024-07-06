import Slider from './slider';
const OPTIONS = { loop: true }
export default function Hero() {
    return (
        <div>
            <div className="flex flex-col items-center mt-5">
                <div className="mb-20">
                    <Slider />
                </div>
                
            </div>
        </div>
    );
}
