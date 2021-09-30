import { useSelectedDay } from '../hooks';

export const CurrentWeather = () => {
    const { selectedDay } = useSelectedDay();

    return (
        selectedDay
        && <div className = 'current-weather'>
            <p className = 'temperature'>{ selectedDay?.temperature }</p>
            <p className = 'meta'>
                <span className = 'rainy'>%{ selectedDay?.rain_probability }</span>
                <span className = 'humidity'>%{ selectedDay?.humidity }</span>
            </p>
        </div>
    );
};
