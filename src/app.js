import { CurrentDate, CurrentWeather, DaysList } from './components';
import { FilterForm } from './components/forms';

export const App = () => {
    return (
        <main>
            <FilterForm />
            <CurrentDate />
            <CurrentWeather />
            <DaysList />
        </main>
    );
};

