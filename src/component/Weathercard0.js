import React, {useState, useEffect} from 'react'
const Weathercard0 = ({
    Temper0, weathermood0, day0, icon0,
    Temper8, weathermood8, day8, icon8,
    Temper16, weathermood16, day16, icon16,
    Temper24, weathermood24, day24, icon24,
    Temper32, weathermood32, day32, icon32,
}) => {
    const [weatherState, setWeatherState] = React.useState("");

    return (
        <>        
        <div className='weathercard'>
                <div className='datetime'>{day0}
                    <div className='icon'><img src={`http://openweathermap.org/img/wn/${icon0}@2x.png`} alt='image'/>
                        <div className='temp'> {Temper0}&deg;F
                            <div className='weathermood'>{weathermood0}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* </div> */}
        </>
    )
}

export default Weathercard0
