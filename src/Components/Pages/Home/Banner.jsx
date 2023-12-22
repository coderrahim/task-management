import img from '/src/assets/Banner/coderrahim.jpg'


const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/photos-gratuite/gros-plan-image-programmeur-travaillant-son-bureau-dans-bureau_1098-18707.jpg?w=740&t=st=1703224835~exp=1703225435~hmac=ee52398117bdb8432dbded6fb54cc19894875e22fe78cfe4a896596103ca5e0f)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">Your Ultimate Task Management Solution</h1>

                    <button className="btn bg-pink-600 border-0 text-lg text-white hover:bg-transparent hover:border-pink-600 hover:border mt-20">Let’s Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;