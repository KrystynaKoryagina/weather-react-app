import { useForm } from 'react-hook-form';

import { Checkbox, Input, Button } from '../elements';

import { useFilter, useSelectedDay } from '../../../hooks';

export const FilterForm = () => {
    const { filter, setFilter } = useFilter();

    const {
        register, setValue, handleSubmit, watch, reset, formState: { isDirty },
    } = useForm({
        mode:          'onSubmit',
        defaultValues: {
            type: '',
            min:  null,
            max:  null,
        },
    });

    const watchType = watch('type');

    const onSubmit = (selectedFilter) => setFilter(selectedFilter);

    const resetFilter = () => {
        reset();
        setFilter(null);
    };

    return (
        <div className = 'filter'>
            <Checkbox
                label = 'Облачно'
                type = 'cloudy'
                register = { register('type') }
                setValue = { setValue }
                filter = { filter }
                isSelected = { watchType === 'cloudy' } />

            <Checkbox
                label = 'Солнечно'
                type = 'sunny'
                register = { register('type') }
                setValue = { setValue }
                filter = { filter }
                isSelected = { watchType === 'sunny' } />

            <Input
                label = 'Минимальная температура'
                id = 'min-temperature'
                register = { register('min') }
                isDisabled = { filter } />

            <Input
                label = 'Максимальная температура'
                id = 'max-temperature'
                register = { register('max') }
                isDisabled = { filter } />

            {  filter
                ? <Button value = 'Сбросить' onClickHandler = { () => resetFilter() } />
                : <Button
                    value = 'Отфильтровать' isDisabled = { !isDirty }
                    onClickHandler = { handleSubmit(onSubmit) } />
            }
        </div>
    );
};
