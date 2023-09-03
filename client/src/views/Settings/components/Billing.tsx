const Billing = () => {
    return(
        <div className="accountBilling">
            <h3>Billing and payments</h3>
            <h2>Choose how you make purchases on HelloTube</h2>

            <div style={{borderTop: "0.5px solid gray"}}>
                <p className="bold">Quick purchase is disabled</p>
                <p>You will asked to verify your account for all HelloTube purchases</p>
                <p className="blue">Learn more about purchase verification</p>
            </div>
        </div>
    )
}

export default Billing;