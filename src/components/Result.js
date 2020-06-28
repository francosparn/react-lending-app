import React from 'react';

const Result = ({total, term, amount}) => ( 
    <div className="result-div text-center">
        <h2 className="result-header">Resumen</h2>
            <div className="result">
                <p>Monto solicitado: <b>${amount}</b></p>
                <p>Plazo: <b>{term} meses</b></p>
                <p>Pago mensual: <b>${(total / term).toFixed(2)}</b></p>
                <p>Total a pagar: <b>${(total).toFixed(2)}</b></p>
                <p>Comisión uso de plataforma: <b>${total-amount}</b></p>
                <p className="result-text">
                El resultado de “Calculá tu cuota” se basa exclusivamente en la información crediticia que ingresaste en el formulario. Te informaremos la tasa de interés del préstamo y el valor de cuota promedio que te podamos ofrecer una vez que finalices la Solicitud de Crédito, aclarando que podrán ser diferentes del resultado de “Calculá tu cuota”.
                </p>
            </div>
    </div>
);
 
export default Result;