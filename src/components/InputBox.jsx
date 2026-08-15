import React from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    CurrencyList = [],
    SelectCurrency = 'usd',
    onCurrencyChange,
    amountDisable = false,
    currencyDisable = false
}) {
    return (
        <div className="box">
            <div className="top">
                <span>{label}</span>

                <div className="right">
                    <label>Currency Type</label>
                    <select
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        value={SelectCurrency}
                        disabled={currencyDisable}
                    >
                        {CurrencyList.map((curr) => (
                            <option key={curr} value={curr}>
                                {curr}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <input
                type="number"
                placeholder="0"
                disabled={amountDisable}
                value={amount}
                onChange={(e) => {
                    const value = Number(e.target.value);
                    if (onAmountChange) {
                        onAmountChange(value);
                    }
                }}
            />
        </div>
    );
}

export default InputBox;