import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
    const { dispatch } = useContext(AppContext);
    return (
        <>
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="currencyChange" >Currency</label>
            </div>
            <select className="custom-select" id="inputCurrencyChange"  onChange={(event) => {
                    dispatch({
                        type: 'CHG_CURRENCY',
                        payload: event.target.value,
                    });
                }
                }>
                <option defaultValue value='£' name='Pound'>£ Pound</option>
                <option value="$" name="Dollar"> $ Dollar</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
            </select>
        </>
    )
}

export default Currency;