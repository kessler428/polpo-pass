import Chart from 'react-apexcharts'

export const DonutChart = () => {
  return (
    <div className='mt-5'>
        <Chart
            options={{
                chart: {
                    type: "donut",
                    width: "80%",
                    height: 400,
                },
            }}
            series={[
                1
            ]}
            
            height={400}
            type="donut"
        />
        
    </div>
  )
}
