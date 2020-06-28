import React, { useState, Fragment } from 'react';
import { calculateTotal } from '../helpers';

const Form = (props) => {

    const { amount, saveAmount, term, saveTerm, saveTotal, saveLoading } = props;

    // Define the state
    const [error, saveError] = useState(false);

    // When the user clicks calculate
    const calculateLoan = e => {
        e.preventDefault();

        // Validation
        if(amount === 0 || term === ''){
            saveError(true);
            return;
        }

        // Delete previous error
        saveError(false);

        // Enable Spinner
        saveLoading(true);

        setTimeout(() => {

        // Make a quote
        const total = calculateTotal(amount, term);

        // After doing the calculation we save the total to pay
        saveTotal(total);

        // Disable Spinner
        saveLoading(false);

        },3000);

    }
    return ( 
    <Fragment>
    <form onSubmit={calculateLoan} 
          className="form"
    >

    <h3 className="text-center mb-3">Calculá tu cuota</h3>

    { (error) ? <p className="error">Todos los campos son obligatorios, complételos y envie nuevamente el formulario</p> : null }

    <div className="form-group">
        <label>Monto</label>
        <input 
            type="number" 
            className="form-control" 
            placeholder="Seleccione monto" 
            onChange={ e => saveAmount(parseInt (e.target.value) ) }
        />
    </div>

    <div className="form-group">
        <label>Plazo</label>
        <select 
            className="form-control" 
            onChange={ e => saveTerm(parseInt (e.target.value) ) }
        >
            <option value="">Seleccione el plazo</option>
            <option value="3">3 meses</option>
            <option value="6">6 meses</option>
            <option value="12">12 meses</option>
            <option value="24">24 meses</option>
            <option value="36">36 meses</option>
        </select>
  </div>

        <input 
        type="submit" 
        className="btn button mt-4"
        value="Calcular"
        />
     
    </form>

    </Fragment>
    );
}
 
export default Form;