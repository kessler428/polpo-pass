import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'


export const Paypal = () => {
    return (
        <div className='mt-10'>
            <PayPalScriptProvider options={{ "client-id": "AWtJ8m9IkxRZadcAmrdHOsrCd3BUbRjiH2u1b6ltrRPQh_nlleq2R5YWOvQQcFUzdvNM3bVfkGABoPm6" }}>
                <PayPalButtons
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: "1.99",
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions:any) => {
                        return actions.order.capture().then((details:any) => {
                            const name = details.payer.name.given_name;
                            alert(`Transaction completed by ${name}`);
                        });
                    }}
                />
            </PayPalScriptProvider>
        </div>
    )
}