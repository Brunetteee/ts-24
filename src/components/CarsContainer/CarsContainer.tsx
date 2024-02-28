import React, {useEffect, useState} from 'react';
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {ICar} from "../../interfaces/carInterface";
import {carService} from "../../services/carService";

const CarsContainer = () => {
    const [cars, setCars] = useState<ICar[]>([])
    const [trigger, setTrigger] = useState<boolean>(null)
    const [carForUpdate, setCarForUpdate] = useState<ICar>(null)

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger ]);
    
    const changeTrigger = () => {
      setTrigger(prevState => ! prevState)
    }
    return (
        <div>
            <CarForm changeTrigger={changeTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} changeTrigger={changeTrigger}/>
        </div>
    );
};

export {CarsContainer};